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

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonEmpty,
  EuiPopover,
  EuiText,
} from '@elastic/eui';
import React, { useState } from 'react';

interface NewDataFilterButtonProps {
  onCreate(): void;
}

export const NewDataFilterButton = (props: NewDataFilterButtonProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const closePopover = () => setIsPopoverOpen(false);
  const openPopover = () => setIsPopoverOpen(true);

  const addFilterButton = (
    <EuiButtonEmpty
      size="xs"
      onClick={() => {
        openPopover();
      }}
    >
      + Add data filter
    </EuiButtonEmpty>
  );

  return (
    <EuiFlexItem grow={false} style={{ marginBottom: '8px' }}>
      <EuiPopover
        ownFocus
        button={addFilterButton}
        isOpen={isPopoverOpen}
        closePopover={closePopover}
      >
        <EuiText>New data filter</EuiText>
        <EuiFlexGroup
          alignItems="center"
          justifyContent="flexEnd"
          gutterSize="s"
          style={{ marginRight: '12px' }}
        >
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              data-test-subj={`cancelNewFilterButton`}
              onClick={() => {
                console.log('canceling creation of new filter');
                closePopover();
              }}
            >
              Cancel
            </EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton
              //type="submit"
              fill={true}
              data-test-subj={`saveNewFilterButton`}
              //isLoading={formikProps.isSubmitting}
              onClick={() => {
                console.log('creating new filter');
                props.onCreate();
                closePopover();
              }}
            >
              Save
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPopover>
    </EuiFlexItem>
  );
};
