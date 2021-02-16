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
  EuiSpacer,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonEmpty,
} from '@elastic/eui';

interface DefineDetectorProps {
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
}

export const DefineDetector = (props: DefineDetectorProps) => {
  return (
    <React.Fragment>
      <EuiText>Define detector here</EuiText>
      <EuiSpacer />
      <EuiFlexGroup alignItems="center" justifyContent="flexEnd">
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty onClick={props.handleCancelClick}>
            Cancel
          </EuiButtonEmpty>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            iconSide="right"
            iconType="arrowRight"
            fill={true}
            data-test-subj="defineDetectorNextButton"
            //isLoading={formikProps.isSubmitting}
            //@ts-ignore
            onClick={() => {
              props.setStep(2);
            }}
          >
            Next
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </React.Fragment>
  );
};
