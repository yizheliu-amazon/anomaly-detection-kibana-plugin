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
} from '@elastic/eui';
import { isEmpty } from 'lodash';
import React, { useEffect, Fragment, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../redux/reducers';
import { getDetector } from '../../../redux/reducers/ad';
import { getDetectorStateDetails } from '../../DetectorDetail/utils/helpers';
import { HistoricalRangeModal } from '../components/HistoricalRangeModal';

interface HistoricalDetectorResultsProps extends RouteComponentProps {
  detectorId: string;
}

export function HistoricalDetectorResults(
  props: HistoricalDetectorResultsProps
) {
  const dispatch = useDispatch();
  const detector = useSelector(
    (state: AppState) => state.ad.detectors[props.detectorId]
  );

  const [historicalRangeModalOpen, setHistoricalRangeModalOpen] = useState<
    boolean
  >(false);

  console.log('detector: ', detector);

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
                      {getDetectorStateDetails(detector, false)}
                    </div>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexGroup direction="row" gutterSize="xs">
                  <EuiFlexItem grow={false}>
                    <EuiIcon
                      type="calendar"
                      style={{
                        marginLeft: '14px',
                        marginRight: '8px',
                        marginTop: '3px',
                      }}
                    />
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText size="s">
                      <p>
                        <b>Some date here</b>
                      </p>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false} style={{ color: '#483D8B' }}>
                    <EuiIcon
                      type="gear"
                      color="0000ff"
                      title="something"
                      style={{
                        marginLeft: '14px',
                        marginRight: '8px',
                        marginTop: '3px',
                      }}
                    />
                  </EuiFlexItem>
                  <EuiFlexItem
                    grow={false}
                    style={{ marginTop: '0px', marginLeft: '-12px' }}
                  >
                    <EuiButtonEmpty
                      size="xs"
                      onClick={() => {
                        setHistoricalRangeModalOpen(true);
                      }}
                    >
                      Modify historical analysis range
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                </EuiFlexGroup>
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
