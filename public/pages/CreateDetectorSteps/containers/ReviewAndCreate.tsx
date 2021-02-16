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

interface ReviewAndCreateProps {
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
  onCreate(): void;
}

export const ReviewAndCreate = (props: ReviewAndCreateProps) => {
  return (
    <React.Fragment>
      <EuiText>Review and create detector here</EuiText>
      <EuiSpacer />
      <EuiFlexGroup alignItems="center" justifyContent="flexEnd">
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty onClick={props.handleCancelClick}>
            Cancel
          </EuiButtonEmpty>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            iconSide="left"
            iconType="arrowLeft"
            fill={false}
            data-test-subj="reviewAndCreatePreviousButton"
            //isLoading={formikProps.isSubmitting}
            //@ts-ignore
            onClick={() => {
              props.setStep(3);
            }}
          >
            Previous
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            iconSide="right"
            iconType="arrowRight"
            fill={true}
            data-test-subj="reviewAndCreateButton"
            //isLoading={formikProps.isSubmitting}
            //@ts-ignore
            onClick={() => {
              props.onCreate();
            }}
          >
            Create
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </React.Fragment>
  );
};
