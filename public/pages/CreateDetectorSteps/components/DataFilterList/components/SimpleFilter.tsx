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
  EuiComboBox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSelect,
} from '@elastic/eui';
import { Field, FieldProps } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllFields } from '../../../../../redux/selectors/elasticsearch';
import { cloneDeep, get, debounce, includes } from 'lodash';
import { getError, isInvalid, required } from '../../../../../utils/utils';
import { UIFilter } from '../../../../../models/interfaces';
import { DATA_TYPES } from '../../../../../utils/constants';
import { EMPTY_UI_FILTER } from '../../../utils/constants';
import { getIndexFields, getOperators, isNullOperator } from '../utils/helpers';
import FilterValue from './FilterValue';
import { DetectorDefinitionFormikValues } from '../../../models/interfaces';

interface SimpleFilterProps {
  filter: UIFilter;
  index: number;
  values: DetectorDefinitionFormikValues;
  replace(index: number, value: any): void;
}

export const SimpleFilter = (props: SimpleFilterProps) => {
  const indexFields = getIndexFields(useSelector(getAllFields));
  const [searchedIndexFields, setSearchedIndexFields] = useState<
    ({
      label: DATA_TYPES;
      options: {
        label: string;
        type: DATA_TYPES;
      }[];
    } | null)[]
  >();

  //If user search field name, filter filed names which include user's input word
  //So user can only need to select from the filtered fileds.
  const handleSearchFieldChange = debounce(async (searchValue: string) => {
    let selectedFields: any = [];
    if (searchValue) {
      for (let i = 0; i < indexFields.length; i++) {
        let selectedOptions: any = [];

        let options = indexFields[i]?.options;
        if (options) {
          for (let j = 0; j < options.length; j++) {
            if (includes(options[j].label, searchValue)) {
              selectedOptions.push(options[j]);
            }
          }
          if (selectedOptions.length > 0) {
            selectedFields.push({
              label: indexFields[i]?.label,
              options: selectedOptions,
            });
          }
        }
      }
      setSearchedIndexFields(selectedFields);
    } else {
      setSearchedIndexFields(undefined);
    }
  }, 300);

  return (
    <EuiFlexGroup
      style={{ padding: '0px', width: '400px' }}
      alignItems="stretch"
      direction="column"
    >
      <EuiFlexItem grow={false}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <Field
              name={`filters.${props.index}.fieldInfo`}
              validate={required}
            >
              {({ field, form }: FieldProps) => (
                <EuiFormRow
                  label="Field"
                  isInvalid={isInvalid(field.name, form)}
                  error={getError(field.name, form)}
                >
                  <EuiComboBox
                    id={`filters.${props.index}.fieldInfo`}
                    singleSelection={{ asPlainText: true }}
                    placeholder="Choose a field"
                    async
                    isClearable
                    //@ts-ignore
                    options={
                      searchedIndexFields ? searchedIndexFields : indexFields
                    }
                    onCreateOption={(createdOption: string) => {
                      const normalizedOptions = createdOption.trim();
                      if (!normalizedOptions) return;
                      const customOption = [{ label: normalizedOptions }];
                      form.setFieldValue(
                        `filters.${props.index}.fieldInfo`,
                        customOption
                      );
                    }}
                    selectedOptions={field.value}
                    {...field}
                    onChange={(options) => {
                      //Reset operator and values
                      //props.replace(props.index, cloneDeep(EMPTY_UI_FILTER));
                      form.setFieldValue(
                        `filters.${props.index}.fieldInfo`,
                        options
                      );
                    }}
                    onBlur={() => {
                      form.setFieldTouched(
                        `filters.${props.index}.fieldInfo`,
                        true
                      );
                    }}
                    onSearchChange={handleSearchFieldChange}
                    isInvalid={isInvalid(field.name, form)}
                  />
                </EuiFormRow>
              )}
            </Field>
          </EuiFlexItem>
          <EuiFlexItem>
            <Field name={`filters.${props.index}.operator`}>
              {({ field, form }: FieldProps) => (
                <EuiFormRow
                  label="Operator"
                  isInvalid={isInvalid(field.name, form)}
                  error={getError(field.name, form)}
                >
                  <EuiSelect
                    id={`filters.${props.index}.operator`}
                    placeholder="Choose an operator"
                    options={getOperators(
                      get(
                        props.values,
                        `filters.${props.index}.fieldInfo.0.type`,
                        DATA_TYPES.NUMBER
                      )
                    )}
                    {...field}
                  />
                </EuiFormRow>
              )}
            </Field>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem grow={null}>
        {isNullOperator(props.filter.operator) ? null : (
          <FilterValue
            dataType={get(
              props.values,
              `filters.${props.index}.fieldInfo.0.type`,
              'number'
            )}
            index={props.index}
            operator={props.filter.operator}
            filterValues={props.filter}
          />
        )}
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};