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

import React from 'react';
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

interface HistoricalRangeModalProps {
  onClose(): void;
  onConfirm(): void;
}

export const HistoricalRangeModal = (props: HistoricalRangeModalProps) => {
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
          showUpdateButton={false}
          onTimeChange={() => {
            console.log('changing the time here');
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
          onClick={props.onConfirm}
        >
          Run historical analysis
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};
