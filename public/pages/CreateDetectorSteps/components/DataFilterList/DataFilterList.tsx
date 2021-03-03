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
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiBadge,
  EuiSpacer,
  EuiIcon,
  EuiButtonEmpty,
  EuiPopover,
  EuiText,
} from '@elastic/eui';
import { Field, FieldArray, FieldArrayRenderProps, FormikProps } from 'formik';
import React, { useState, Fragment } from 'react';
import { getError, isInvalid, required } from '../../../../utils/utils';
import { DetectorDefinitionFormikValues } from '../../models/interfaces';
import { UIFilter } from '../../../../models/interfaces';
import { DataFilter } from './components/DataFilter';
import { NewDataFilterButton } from './components/NewDataFilterButton';

// import { FILTER_TYPES_OPTIONS } from './utils/constant';
// import { SimpleFilter } from './SimpleFilter';
// import { QueryDataFilter } from './QueryDataFilter';
// import { FILTER_TYPES } from '../../../../models/interfaces';
import { FormattedFormRow } from '../FormattedFormRow/FormattedFormRow';
import { EMPTY_UI_FILTER } from '../../utils/constants';

interface DataFilterListProps {
  formikProps: FormikProps<DetectorDefinitionFormikValues>;
}

export const DataFilterList = (props: DataFilterListProps) => {
  return (
    <FieldArray name="filters" validateOnChange={true}>
      {({ push, remove, replace, form: { values } }: FieldArrayRenderProps) => {
        return (
          <Fragment>
            <FormattedFormRow
              fullWidth
              formattedTitle={
                <p>
                  Data filter
                  <span className="optional">- optional</span>
                </p>
              }
              hint={[
                'Choose a subset of your data source to focus your data stream and reduce noisy data.',
              ]}
              hintLink={
                'https://opendistro.github.io/for-elasticsearch-docs/docs/ad/'
              }
              // isInvalid={isInvalid(field.name, form)}
              // error={getError(field.name, form)}
            >
              <Fragment>
                <EuiSpacer size="m" />
                <EuiFlexGroup direction="row" gutterSize="xs">
                  <EuiFlexItem grow={false}>
                    <EuiIcon
                      type="filter"
                      style={{ marginRight: '8px', marginTop: '2px' }}
                    />
                  </EuiFlexItem>
                  {values.filters.map((filter: UIFilter, index: number) => {
                    return (
                      <DataFilter
                        filter={filter}
                        index={index}
                        onDelete={() => remove(index)}
                      />
                    );
                  })}
                  <EuiFlexItem grow={false} style={{ marginTop: '0px' }}>
                    <NewDataFilterButton
                      onCreate={() => push(EMPTY_UI_FILTER)}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </Fragment>
            </FormattedFormRow>
          </Fragment>
        );
      }}
    </FieldArray>
  );
};
