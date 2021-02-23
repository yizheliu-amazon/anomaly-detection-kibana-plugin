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

import ContentPanel from '../../../../components/ContentPanel/ContentPanel';
import {
  //@ts-ignore
  EuiFlexGrid,
  EuiFlexItem,
  EuiText,
  EuiFormRow,
  EuiButton,
  EuiFormRowProps,
  EuiLink,
} from '@elastic/eui';
import React, { Component, FunctionComponent } from 'react';
import moment from 'moment';
import { get } from 'lodash';
import { CreateDetectorFormikValues } from '../../models/interfaces';
import {
  Detector,
  FILTER_TYPES,
  UIFilter,
} from '../../../../models/interfaces';
import { CodeModal } from '../CodeModal/CodeModal';
import { displayText } from '../DataFilters/utils/helpers';
import { filtersToUIMetadata } from '../../utils/helpers';

interface DetectorDefinitionFieldsProps {
  onEditDetectorDefinition(): void;
  fields: CreateDetectorFormikValues;
  isCreate: boolean;
}

interface FilterDisplayProps {
  uiMetadata: any;
  filterQuery: any;
}

interface FilterDisplayState {
  showCodeModel: boolean;
}

export class FilterDisplay extends Component<
  FilterDisplayProps,
  FilterDisplayState
> {
  constructor(props: FilterDisplayProps) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.getModalVisibilityChange = this.getModalVisibilityChange.bind(this);
    this.state = {
      showCodeModel: false,
    };
  }

  private closeModal() {
    this.setState({
      showCodeModel: false,
    });
  }

  private showModal() {
    this.setState({
      showCodeModel: true,
    });
  }

  private getModalVisibilityChange = () => {
    return this.state.showCodeModel;
  };

  public render() {
    let filter = this.props.uiMetadata;

    if (filter == undefined || filter.filterType == undefined) {
      return (
        <EuiText>
          <p className="enabled">-</p>
        </EuiText>
      );
    }
    if (filter.filterType == FILTER_TYPES.SIMPLE) {
      let filters = filter.filters;
      let n = filters.length;
      let content;

      if (n == 0) {
        content = <p className="enabled">-</p>;
      } else if (n == 1) {
        content = <p className="enabled">{displayText(filters[0])}</p>;
      } else {
        content = (
          <ol>
            {filters.map((filter: UIFilter, index: number) => {
              return (
                <li className="enabled" key={index}>
                  {displayText(filter)}
                </li>
              );
            })}
          </ol>
        );
      }
      return <EuiText>{content}</EuiText>;
    } else {
      return (
        <div>
          <EuiText>
            <p className="enabled">
              Custom expression:{' '}
              <EuiLink data-test-subj="viewFilter" onClick={this.showModal}>
                View code
              </EuiLink>
            </p>
          </EuiText>
          {!this.getModalVisibilityChange() ? null : (
            <CodeModal
              code={this.props.filterQuery}
              title="Filter query"
              subtitle="Custom expression"
              getModalVisibilityChange={this.getModalVisibilityChange}
              closeModal={this.closeModal}
            />
          )}
        </div>
      );
    }
  }
}

const FixedWidthRow = (props: EuiFormRowProps) => (
  <EuiFormRow {...props} style={{ width: '250px' }} />
);

const renderCell = (title: string, description: string | number) => {
  return (
    <FixedWidthRow label={title}>
      <EuiText>
        <p className="enabled">{description}</p>
      </EuiText>
    </FixedWidthRow>
  );
};

const renderDate = (obj: any) => {
  if (typeof obj == 'number') {
    return moment(obj).format('MM/DD/YYYY hh:mm A');
  } else {
    return '-';
  }
};

export const DetectorDefinitionFields = (
  props: DetectorDefinitionFieldsProps
) => {
  // TODO: will need to preprocess detector and change into fields before passing to this component.
  // will need to preprocess a lot of the fields (interval), need to add last update time + ID
  // examples of how to preprocess the filter inputs see commented out sections below:
  //
  // TODO: also, there is some differences in the fields per scenario - if in create mode: we don't have ID & last updated fields,
  // but in config page mode, we do.
  //
  // ANOTHER PREFERRED OPTION: convert the create fields into a detector before passing to this component,
  // which will prevent as much change as possible to the existing page.
  //
  //   const filterInputs = {
  //     uiMetadata: props.fields
  //       ? filtersToUIMetadata(props.fields)
  //       : get(props, 'detector.uiMetadata', {}),
  //     filterQuery: props.fields
  //       ? props.fields.filterQuery
  //       : JSON.stringify(get(props, 'detector.filterQuery', {}) || {}, null, 4),
  //   };

  const filterInputs = {
    uiMetadata: filtersToUIMetadata(props.fields),
    filterQuery: props.fields.filterQuery,
  };

  return (
    <ContentPanel
      title="Detector settings"
      titleSize="s"
      panelStyles={{ margin: '0px' }}
      actions={[
        <EuiButton
          data-test-subj="editDetectorButton"
          onClick={props.onEditDetectorDefinition}
        >
          Edit
        </EuiButton>,
      ]}
    >
      <EuiFlexGrid columns={4} gutterSize="l" style={{ border: 'none' }}>
        <EuiFlexItem>
          {renderCell('Name', get(props, 'fields.name', ''))}
        </EuiFlexItem>
        <EuiFlexItem>
          {renderCell(
            'Data source index',
            get(props, 'fields.index.0.label', '')
          )}
        </EuiFlexItem>
        <EuiFlexItem>
          <FixedWidthRow label="Data filter">
            <FilterDisplay {...filterInputs} />
          </FixedWidthRow>
        </EuiFlexItem>
        <EuiFlexItem>
          {renderCell(
            'Window delay',
            get(props, 'fields.windowDelay', '') + ' ' + 'Minutes'
          )}
        </EuiFlexItem>
        {props.isCreate ? null : (
          <EuiFlexItem>
            {renderCell('ID', get(props, 'fields.id', ''))}
          </EuiFlexItem>
        )}
        <EuiFlexItem>
          {renderCell('Description', get(props, 'fields.description', ''))}
        </EuiFlexItem>
        <EuiFlexItem>
          {renderCell('Timestamp', get(props, 'fields.timeField', ''))}
        </EuiFlexItem>
        <EuiFlexItem>
          {renderCell(
            'Detection interval',
            get(props, 'fields.interval', '') + ' ' + 'Minutes'
          )}
        </EuiFlexItem>
        {props.isCreate ? null : (
          <EuiFlexItem>
            {renderCell(
              'Last updated',
              renderDate(get(props, 'fields.lastUpdateTime', undefined))
            )}
          </EuiFlexItem>
        )}
      </EuiFlexGrid>
    </ContentPanel>
  );
};
