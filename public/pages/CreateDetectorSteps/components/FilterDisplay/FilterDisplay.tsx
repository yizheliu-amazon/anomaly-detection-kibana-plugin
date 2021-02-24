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

import { EuiText, EuiLink } from '@elastic/eui';
import React, { Component } from 'react';
import { FILTER_TYPES, UIFilter } from '../../../../models/interfaces';
import { CodeModal } from '../CodeModal/CodeModal';
import { displayText } from '../DataFilters/utils/helpers';

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
