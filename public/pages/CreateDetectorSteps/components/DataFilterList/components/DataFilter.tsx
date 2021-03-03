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
import { Field, FieldProps, FormikProps } from 'formik';
import { UIFilter } from '../../../../../models/interfaces';
import { SimpleFilter } from '../components/SimpleFilter';
import { CustomFilter } from '../components/CustomFilter';
import { FormattedFormRow } from '../../FormattedFormRow/FormattedFormRow';
import { DetectorDefinitionFormikValues } from '../../../models/interfaces';

interface DataFilterProps {
  filter: UIFilter;
  index: number;
  values: DetectorDefinitionFormikValues;
  replace(index: number, value: any): void;
  onOpen(): void;
  onSave(): void;
  onCancel(): void;
  onDelete(): void;
  openPopoverIndex: number;
  setOpenPopoverIndex(index: number): void;
  isNewFilter: boolean;
}

export const DataFilter = (props: DataFilterProps) => {
  const isPopoverOpen = props.openPopoverIndex === props.index;
  const openPopover = () => {
    props.setOpenPopoverIndex(props.index);
  };
  const closePopover = () => {
    props.setOpenPopoverIndex(-1);
  };

  const [isSimple, setIsSimple] = useState<boolean>(true);
  const setToSimple = () => setIsSimple(true);
  const setToCustom = () => setIsSimple(false);

  const [isCustomLabel, setIsCustomLabel] = useState<boolean>(false);

  const getFilterLabel = (filter: UIFilter) => {
    return filter.label && isCustomLabel ? filter.label : 'Default label';
  };

  const badge = (
    <EuiBadge
      key={props.index}
      color="hollow"
      iconType="cross"
      iconSide="right"
      iconOnClick={() => {
        props.onDelete();
      }}
      iconOnClickAriaLabel="onClick event for icon within the button"
      onClick={() => {
        openPopover();
      }}
      onClickAriaLabel="onClick event for the button"
    >
      {getFilterLabel(props.filter)}
    </EuiBadge>
  );

  const newFilterButton = (
    <EuiButtonEmpty
      size="xs"
      onClick={() => {
        props.onOpen();
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
        button={props.isNewFilter ? newFilterButton : badge}
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
          <SimpleFilter
            filter={props.filter}
            index={props.index}
            values={props.values}
            replace={props.replace}
          />
        ) : (
          <CustomFilter
            filter={props.filter}
            index={props.index}
            values={props.values}
            replace={props.replace}
          />
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
                <Field name={`filters.${props.index}.label`}>
                  {({ field, form }: FieldProps) => (
                    <FormattedFormRow title="Custom label">
                      <EuiFieldText
                        name="customLabel"
                        id="customLabel"
                        placeholder="Enter a value"
                        onBlur={() => {
                          form.setFieldTouched(
                            `filters.${props.index}.label`,
                            true
                          );
                        }}
                        {...field}
                      />
                    </FormattedFormRow>
                  )}
                </Field>
              </EuiFlexItem>
            ) : null}
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiFlexGroup
            alignItems="center"
            justifyContent="flexEnd"
            gutterSize="s"
          >
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                data-test-subj={`cancelFilter${props.index}Button`}
                onClick={() => {
                  props.onCancel();
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
                  props.onSave();
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
