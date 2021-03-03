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
  EuiPopoverTitle,
  EuiText,
  EuiSwitch,
  EuiFieldText,
  EuiSpacer,
} from '@elastic/eui';
import React, { useState } from 'react';
import { UIFilter } from '../../../../../models/interfaces';
import { SimpleFilter } from '../components/SimpleFilter';
import { CustomFilter } from '../components/CustomFilter';
import { FormattedFormRow } from '../../FormattedFormRow/FormattedFormRow';

interface DataFilterProps {
  filter: UIFilter;
  index: number;
  onDelete(): void;
}

export const DataFilter = (props: DataFilterProps) => {
  const getFilterLabel = (filter: UIFilter) => {
    return filter.label ? filter.label : 'Default label';
  };

  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const closePopover = () => setIsPopoverOpen(false);
  const openPopover = () => setIsPopoverOpen(true);

  const [isSimple, setIsSimple] = useState<boolean>(true);
  const setToSimple = () => setIsSimple(true);
  const setToCustom = () => setIsSimple(false);

  const [isCustomLabel, setIsCustomLabel] = useState<boolean>(false);

  const badge = (
    <EuiBadge
      key={props.index}
      color="hollow"
      iconType="cross"
      iconSide="right"
      iconOnClick={() => {
        console.log('clicking delete here');
        props.onDelete();
      }}
      iconOnClickAriaLabel="onClick event for icon within the button"
      onClick={() => {
        console.log('clicking edit here');
        openPopover();
      }}
      onClickAriaLabel="onClick event for the button"
    >
      {getFilterLabel(props.filter)}
    </EuiBadge>
  );

  return (
    <EuiFlexItem grow={false} style={{ marginBottom: '8px' }}>
      <EuiPopover
        ownFocus
        button={badge}
        isOpen={isPopoverOpen}
        closePopover={closePopover}
        anchorPosition="downCenter"
      >
        <EuiPopoverTitle>
          <EuiFlexGroup
            direction="row"
            alignItems="center"
            style={{ margin: '-18px' }}
          >
            <EuiFlexItem>
              <EuiText>
                <p style={{ textTransform: 'none' }}>
                  <b>Data filter</b>
                </p>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                onClick={() => {
                  isSimple ? setToCustom() : setToSimple();
                }}
              >
                {isSimple ? 'Use query DSL' : 'Use visual editor'}
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPopoverTitle>
        {isSimple ? (
          <SimpleFilter filter={props.filter} />
        ) : (
          <CustomFilter filter={props.filter} />
        )}
        <EuiSpacer />
        <EuiFlexGroup direction="column" style={{ margin: '0px' }}>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiSwitch
                label={<EuiText>Create custom label?</EuiText>}
                checked={isCustomLabel}
                onChange={() => setIsCustomLabel(!isCustomLabel)}
              />
            </EuiFlexItem>
            {isCustomLabel ? (
              <EuiFlexItem>
                <FormattedFormRow title="Custom label">
                  <EuiFieldText
                    name="customLabel"
                    id="customLabel"
                    placeholder="Enter a value"
                  />
                </FormattedFormRow>
              </EuiFlexItem>
            ) : null}
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiFlexGroup
            alignItems="center"
            justifyContent="flexEnd"
            gutterSize="s"
            //style={{ marginRight: '12px' }}
          >
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                data-test-subj={`cancelFilter${props.index}Button`}
                onClick={() => {
                  console.log('canceling');
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
                data-test-subj={`saveFilter${props.index}Button`}
                //isLoading={formikProps.isSubmitting}
                onClick={() => {
                  console.log('saving');
                  closePopover();
                }}
              >
                Save
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexGroup>
      </EuiPopover>
    </EuiFlexItem>
  );
};
