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
import { getDetector } from '../../../redux/reducers/ad';
import { getDetectorStateDetails } from '../../DetectorDetail/utils/helpers';
import { HistoricalRangeModal } from '../components/HistoricalRangeModal';
import { getCallout } from '../utils/helpers';
import { CoreStart } from '../../../../../../src/core/public';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { getHistoricalRangeString } from '../../../utils/utils';

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

  const [isStoppingDetector, setIsStoppingDetector] = useState<boolean>(false);

  const [historicalRangeModalOpen, setHistoricalRangeModalOpen] = useState<
    boolean
  >(false);

  const isHCDetector = !isEmpty(get(props, 'detector.categoryField', []));
  const historicalEnabled = !isEmpty(get(props, 'detector.detectionDateRange'));

  const callout = getCallout(detector, isStoppingDetector);

  useEffect(() => {
    dispatch(getDetector(props.detectorId));
  }, []);

  return (
    <Fragment>
      <EuiPage style={{ marginTop: '16px', paddingTop: '0px' }}>
        <EuiPageBody>
          <EuiSpacer size="l" />
          {!isEmpty(detector) ? (
            <Fragment>
              {historicalRangeModalOpen ? (
                <EuiOverlayMask>
                  <HistoricalRangeModal
                    onClose={() => setHistoricalRangeModalOpen(false)}
                    onConfirm={() => {
                      console.log('placeholder for running the analysis here');
                    }}
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
                  <EuiFlexItem
                    grow={false}
                    style={{ marginLeft: '12px', marginRight: '12px' }}
                  >
                    {callout}
                  </EuiFlexItem>
                ) : null}
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
