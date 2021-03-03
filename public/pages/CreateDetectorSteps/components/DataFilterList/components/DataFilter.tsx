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
import React, { useState, useEffect } from 'react';
import { Field, FieldProps, FormikProps } from 'formik';
import { get } from 'lodash';
import { UIFilter } from '../../../../../models/interfaces';
import { SimpleFilter } from '../components/SimpleFilter';
import { CustomFilter } from '../components/CustomFilter';
import { FormattedFormRow } from '../../FormattedFormRow/FormattedFormRow';
import { DetectorDefinitionFormikValues } from '../../../models/interfaces';
import { FILTER_TYPES } from '../../../../../models/interfaces';

interface DataFilterProps {
  formikProps: FormikProps<DetectorDefinitionFormikValues>;
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

  const [filterType, setFilterType] = useState<FILTER_TYPES>(
    get(props, 'filter.filterType', FILTER_TYPES.SIMPLE)
  );

  const [isCustomLabel, setIsCustomLabel] = useState<boolean>(false);
  const [customLabel, setCustomLabel] = useState<string>(
    get(props, 'filter.label', '')
  );

  // Hook to update the custom label state
  useEffect(() => {
    setCustomLabel(get(props, 'filter.label', ''));
  }, [props.filter?.label]);

  // Hook to update the filter type state
  useEffect(() => {
    setFilterType(get(props, 'filter.filterType', FILTER_TYPES.SIMPLE));
  }, [props.filter]);

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
      style={{ marginTop: '-2px' }}
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
    <EuiFlexItem grow={false} style={{ marginBottom: '2px' }}>
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
                  filterType === FILTER_TYPES.SIMPLE
                    ? props.formikProps.setFieldValue(
                        `filters.${props.index}.filterType`,
                        FILTER_TYPES.CUSTOM
                      )
                    : props.formikProps.setFieldValue(
                        `filters.${props.index}.filterType`,
                        FILTER_TYPES.SIMPLE
                      );
                }}
              >
                {filterType === FILTER_TYPES.SIMPLE
                  ? 'Use query DSL'
                  : 'Use visual editor'}
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPopoverTitle>
        {filterType === FILTER_TYPES.SIMPLE ? (
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
                <FormattedFormRow title="Custom label">
                  <EuiFieldText
                    name="customLabel"
                    id="customLabel"
                    placeholder="Enter a value"
                    value={customLabel}
                    onChange={(e) => {
                      setCustomLabel(e.target.value);
                    }}
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
                  props.formikProps.setFieldValue(
                    `filters.${props.index}.label`,
                    customLabel
                  );
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
