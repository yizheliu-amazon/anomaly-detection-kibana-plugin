/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import {
  EuiPage,
  EuiPageBody,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiLoadingSpinner,
  EuiIcon,
  EuiButtonEmpty,
  EuiOverlayMask,
  EuiBadge,
} from '@elastic/eui';
import { get, isEmpty } from 'lodash';
import React, { useEffect, Fragment, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { darkModeEnabled } from '../../../utils/kibanaUtils';
import { AppState } from '../../../redux/reducers';
import {
  getDetector,
  startHistoricalDetector,
} from '../../../redux/reducers/ad';
import { DETECTOR_STATE } from '../../../../server/utils/constants';
import { getDetectorStateDetails } from '../../DetectorDetail/utils/helpers';
import { HistoricalRangeModal } from '../components/HistoricalRangeModal';
import { getCallout } from '../utils/helpers';
import { HISTORICAL_DETECTOR_RESULT_REFRESH_RATE } from '../utils/constants';
import { CoreStart } from '../../../../../../src/core/public';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { AnomalyHistory } from '../../DetectorResults/containers/AnomalyHistory';
import {
  getHistoricalRangeString,
  getErrorMessage,
} from '../../../utils/utils';
import { prettifyErrorMessage } from '../../../../server/utils/helpers';
import { EmptyHistoricalDetectorResults } from '../components/EmptyHistoricalDetectorResults';

interface HistoricalDetectorResultsProps extends RouteComponentProps {
  detectorId: string;
}

export function HistoricalDetectorResults(
  props: HistoricalDetectorResultsProps
) {
  const core = React.useContext(CoreServicesContext) as CoreStart;
  const isDark = darkModeEnabled();
  const dispatch = useDispatch();
  const detectorId: string = get(props, 'match.params.detectorId', '');

  const adState = useSelector((state: AppState) => state.ad);
  const allDetectors = adState.detectors;
  const errorGettingDetectors = adState.errorMessage;
  const detector = allDetectors[detectorId];
  const [taskId, setTaskId] = useState<string>(get(detector, 'taskId', ''));

  const [isStoppingDetector, setIsStoppingDetector] = useState<boolean>(false);

  const [historicalRangeModalOpen, setHistoricalRangeModalOpen] = useState<
    boolean
  >(false);

  const isHCDetector = !isEmpty(get(detector, 'categoryField', []));
  const historicalEnabled = !isEmpty(get(detector, 'detectionDateRange'));

  const fetchDetector = async () => {
    try {
      await dispatch(getDetector(detectorId));
    } catch {
      core.notifications.toasts.addDanger(
        'Unable to find the historical detector'
      );
    }
  };

  // Try to get the detector initially
  useEffect(() => {
    if (detectorId) {
      fetchDetector();
    }
  }, []);

  // If detector is initializing or running: keep fetching every 10 seconds to quickly update state/results/percentage bar, etc.
  useEffect(() => {
    if (
      detector?.taskState === DETECTOR_STATE.RUNNING ||
      detector?.taskState === DETECTOR_STATE.INIT
    ) {
      const intervalId = setInterval(
        fetchDetector,
        HISTORICAL_DETECTOR_RESULT_REFRESH_RATE
      );
      return () => {
        clearInterval(intervalId);
      };
    }
    setTaskId(get(detector, 'taskId', ''));
  }, [detector]);

  const startHistoricalTask = async (startTime: number, endTime: number) => {
    try {
      dispatch(startHistoricalDetector(props.detectorId, startTime, endTime))
        .then((response: any) => {
          setTaskId(get(response, 'response._id'));
          core.notifications.toasts.addSuccess(
            `Successfully started the historical detector`
          );
        })
        .catch((err: any) => {
          core.notifications.toasts.addDanger(
            prettifyErrorMessage(
              getErrorMessage(
                err,
                'There was a problem starting the historical detector'
              )
            )
          );
        });
    } finally {
      setHistoricalRangeModalOpen(false);
    }
  };

  const callout = getCallout(detector, isStoppingDetector);

  return (
    <Fragment>
      <EuiPage style={{ marginTop: '16px', paddingTop: '0px' }}>
        <EuiPageBody>
          <EuiSpacer size="l" />
          {!isEmpty(detector) && !historicalEnabled ? (
            <EmptyHistoricalDetectorResults
              detector={detector}
              onConfirm={startHistoricalTask}
            />
          ) : !isEmpty(detector) ? (
            <Fragment>
              {historicalRangeModalOpen ? (
                <EuiOverlayMask>
                  <HistoricalRangeModal
                    detector={detector}
                    onClose={() => setHistoricalRangeModalOpen(false)}
                    onConfirm={startHistoricalTask}
                    isEdit={true}
                  />
                </EuiOverlayMask>
              ) : null}
              <EuiFlexGroup direction="column">
                <EuiFlexItem>
                  <EuiTitle size="m">
                    <div>
                      {'Historical analysis'}&nbsp;
                      {getDetectorStateDetails(detector, false, true)}
                    </div>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexGroup direction="row" gutterSize="xs">
                  <EuiFlexItem grow={false} style={{ marginLeft: '16px' }}>
                    <EuiBadge
                      iconType="calendar"
                      iconSide="left"
                      color="#D4DAE5"
                    >
                      {getHistoricalRangeString(detector)}
                    </EuiBadge>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false} style={{ marginTop: '0px' }}>
                    <EuiButtonEmpty
                      iconType="gear"
                      iconSide="left"
                      size="xs"
                      onClick={() => {
                        setHistoricalRangeModalOpen(true);
                      }}
                    >
                      Modify historical analysis range
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                </EuiFlexGroup>
                {callout ? (
                  <div>
                    <EuiSpacer size="m" />
                    <EuiFlexItem
                      grow={false}
                      style={{
                        marginLeft: '12px',
                        marginRight: '12px',
                      }}
                    >
                      {callout}
                    </EuiFlexItem>
                    <EuiSpacer size="xs" />
                  </div>
                ) : null}
                <EuiFlexItem>
                  {
                    // If intializing a new task: clear out any saved local state in the anomaly history by rendering null here
                  }
                  {detector?.taskState === DETECTOR_STATE.INIT ? null : (
                    <AnomalyHistory
                      detector={detector}
                      monitor={undefined}
                      isFeatureDataMissing={false}
                      isHistorical={true}
                      taskId={taskId}
                      isNotSample={true}
                    />
                  )}
                </EuiFlexItem>
              </EuiFlexGroup>
            </Fragment>
          ) : (
            <EuiLoadingSpinner size="xl" />
          )}
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
}
