/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import React, { useState } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiModal,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiSpacer,
  EuiText,
  EuiButtonEmpty,
  EuiButton,
  EuiSuperDatePicker,
} from '@elastic/eui';
import { get } from 'lodash';
import { Detector } from '../../../../models/interfaces';
import {
  convertTimestampToString,
  convertTimestampToNumber,
} from '../../../../utils/utils';
import { HISTORICAL_DATE_RANGE_COMMON_OPTIONS } from '../../../DetectorJobs/utils/constants';

interface HistoricalRangeModalProps {
  detector: Detector;
  onClose(): void;
  onConfirm(startTime: number, endTime: number): void;
}

export const HistoricalRangeModal = (props: HistoricalRangeModalProps) => {
  const [startTime, setStartTime] = useState<string>(
    convertTimestampToString(
      get(props, 'detector.detectionDateRange.startTime', 'now')
    )
  );
  const [endTime, setEndTime] = useState<string>(
    convertTimestampToString(
      get(props, 'detector.detectionDateRange.endTime', 'now')
    )
  );
  return (
    <EuiModal onClose={props.onClose}>
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          Modify historical analysis date range&nbsp;
        </EuiModalHeaderTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            <EuiText>
              <p>Select a date range and run your historical analysis.</p>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="s" />
        <EuiSuperDatePicker
          isPaused={true}
          showUpdateButton={false}
          commonlyUsedRanges={HISTORICAL_DATE_RANGE_COMMON_OPTIONS}
          start={startTime}
          end={endTime}
          onTimeChange={({ start, end, isInvalid, isQuickSelection }) => {
            setStartTime(start);
            setEndTime(end);
          }}
        />
      </EuiModalBody>

      <EuiModalFooter>
        <EuiButtonEmpty data-test-subj="cancelButton" onClick={props.onClose}>
          Cancel
        </EuiButtonEmpty>

        <EuiButton
          data-test-subj="confirmButton"
          fill
          onClick={() => {
            props.onConfirm(
              //@ts-ignore
              convertTimestampToNumber(startTime),
              convertTimestampToNumber(endTime)
            );
          }}
        >
          Run historical analysis
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};
