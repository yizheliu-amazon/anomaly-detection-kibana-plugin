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
  EuiFlexGrid,
  EuiFlexItem,
  EuiText,
  EuiFormRow,
  EuiButton,
  EuiFormRowProps,
} from '@elastic/eui';
import React from 'react';
import moment from 'moment';
import { get } from 'lodash';
import { Detector } from '../../../../models/interfaces';
import { FilterDisplay } from '../FilterDisplay';

interface DetectorDefinitionFieldsProps {
  onEditDetectorDefinition(): void;
  detector: Detector;
  isCreate: boolean;
}

const FixedWidthRow = (props: EuiFormRowProps) => (
  <EuiFormRow {...props} style={{ width: '250px' }} />
);

interface ConfigCellProps {
  title: string;
  description: string | string[];
}

const ConfigCell = (props: ConfigCellProps) => (
  <FixedWidthRow label={props.title}>
    <EuiText>
      <p className="enabled">{props.description}</p>
    </EuiText>
  </FixedWidthRow>
);

export function toString(obj: any): string {
  if (typeof obj != 'undefined') {
    if (obj.hasOwnProperty('period')) {
      let period = obj.period;
      return period.interval + ' ' + period.unit;
    } else if (typeof obj == 'number') {
      // epoch
      return moment(obj).format('MM/DD/YY hh:mm A');
    }
  }
  return '-';
}

export const DetectorDefinitionFields = (
  props: DetectorDefinitionFieldsProps
) => {
  const filterInputs = {
    uiMetadata: get(props, 'detector.uiMetadata', {}),
    filterQuery: JSON.stringify(
      get(props, 'detector.filterQuery', {}) || {},
      null,
      4
    ),
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
          <ConfigCell
            title="Name"
            description={get(props, 'detector.name', '')}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <ConfigCell
            title="Data source index"
            description={get(props, 'detector.indices.0', '')}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <FixedWidthRow label="Data filter">
            <FilterDisplay {...filterInputs} />
          </FixedWidthRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <ConfigCell
            title="Window delay"
            description={toString(get(props, 'detector.windowDelay', 0))}
          />
        </EuiFlexItem>
        {props.isCreate ? null : (
          <EuiFlexItem>
            <ConfigCell
              title="ID"
              description={get(props, 'detector.id', '')}
            />
          </EuiFlexItem>
        )}
        <EuiFlexItem>
          <ConfigCell
            title="Description"
            description={get(props, 'detector.description', '')}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <ConfigCell
            title="Timestamp"
            description={get(props, 'detector.timeField', '')}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <ConfigCell
            title="Detector interval"
            description={toString(get(props, 'detector.detectionInterval', 0))}
          />
        </EuiFlexItem>
        {props.isCreate ? null : (
          <EuiFlexItem>
            <ConfigCell
              title="Last Updated"
              description={toString(get(props, 'detector.lastUpdateTime', ''))}
            />
          </EuiFlexItem>
        )}
      </EuiFlexGrid>
    </ContentPanel>
  );
};
