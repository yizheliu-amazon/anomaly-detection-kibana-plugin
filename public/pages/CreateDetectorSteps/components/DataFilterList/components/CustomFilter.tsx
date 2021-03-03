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
  EuiBadge,
  EuiButtonEmpty,
  EuiPopover,
  EuiText,
} from '@elastic/eui';
import React, { useState } from 'react';
import { UIFilter } from '../../../../../models/interfaces';

interface CustomFilterProps {
  filter: UIFilter;
}

export const CustomFilter = (props: CustomFilterProps) => {
  return (
    <EuiFlexItem>
      <EuiText>Some code editor here</EuiText>
    </EuiFlexItem>
  );
};
