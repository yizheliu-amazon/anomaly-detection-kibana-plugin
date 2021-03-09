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
  FEATURE_TYPE,
  FILTER_TYPES,
  UIFilter,
} from '../../../models/interfaces';
import { OPERATORS_MAP } from '../../DefineDetector/components/DataFilterList/utils/constant';
import { DetectorDefinitionFormikValues } from '../../DefineDetector/models/interfaces';
import {
  ModelConfigurationFormikValues,
  FeaturesFormikValues,
} from '../../ConfigureModel/models/interfaces';
import { DetectorJobsFormikValues } from '../../DetectorJobs/models/interfaces';

export type STEP_STATUS =
  | 'incomplete'
  | 'complete'
  | 'warning'
  | 'danger'
  | 'disabled'
  | undefined;

export const EMPTY_UI_FILTER: UIFilter = {
  filterType: FILTER_TYPES.SIMPLE,
  fieldInfo: [],
  operator: OPERATORS_MAP.IS,
  fieldValue: '',
  query: '',
  label: '',
};

export const INITIAL_FEATURE_VALUES: FeaturesFormikValues = {
  featureId: '',
  featureName: '',
  featureEnabled: true,
  featureType: FEATURE_TYPE.SIMPLE,
  aggregationQuery: JSON.stringify(
    { aggregation_name: { sum: { field: 'field_name' } } },
    null,
    4
  ),
  aggregationBy: '',
  aggregationOf: [],
};

export const INITIAL_DETECTOR_DEFINITION_VALUES: DetectorDefinitionFormikValues = {
  name: '',
  description: '',
  index: [],
  filters: [],
  filterQuery: JSON.stringify({ bool: { filter: [] } }, null, 4),
  timeField: '',
  interval: 10,
  windowDelay: 1,
};

export const INITIAL_MODEL_CONFIGURATION_VALUES: ModelConfigurationFormikValues = {
  featureList: [],
  categoryFieldEnabled: false,
  categoryField: [],
  shingleSize: 4,
};

export const INITIAL_DETECTOR_JOB_VALUES: DetectorJobsFormikValues = {
  realTime: true,
  historical: false,
  startTime: 'now-30d',
  endTime: 'now',
};

export const HISTORICAL_DATE_RANGE_COMMON_OPTIONS = [
  { start: 'now-24h', end: 'now', label: 'last 24 hours' },
  { start: 'now-7d', end: 'now', label: 'last 7 days' },
  { start: 'now-30d', end: 'now', label: 'last 30 days' },
  { start: 'now-90d', end: 'now', label: 'last 90 days' },

  { start: 'now/d', end: 'now', label: 'Today' },
  { start: 'now/w', end: 'now', label: 'Week to date' },
  { start: 'now/M', end: 'now', label: 'Month to date' },
  { start: 'now/y', end: 'now', label: 'Year to date' },
];
