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
import { OPERATORS_MAP } from '../components/DataFilters/utils/constant';
import {
  CreateDetectorFormikValues,
  DetectorDefinitionFormikValues,
  ModelConfigurationFormikValues,
  DetectorJobFormikValues,
  FeaturesFormikValues,
} from '../models/interfaces';

export type STEP_STATUS =
  | 'incomplete'
  | 'complete'
  | 'warning'
  | 'danger'
  | 'disabled'
  | undefined;

export const FEATURE_TYPES = [
  { text: 'Custom Aggregation', value: FEATURE_TYPE.CUSTOM },
  { text: 'Defined Aggregation', value: FEATURE_TYPE.SIMPLE },
];

export const FEATURE_TYPE_OPTIONS = [
  { text: 'Field value', value: FEATURE_TYPE.SIMPLE },
  { text: 'Custom expression', value: FEATURE_TYPE.CUSTOM },
];

export enum SAVE_FEATURE_OPTIONS {
  START_AD_JOB = 'start_ad_job',
  KEEP_AD_JOB_STOPPED = 'keep_ad_job_stopped',
}

export const AGGREGATION_TYPES = [
  { value: 'avg', text: 'average()' },
  { value: 'value_count', text: 'count()' },
  { value: 'sum', text: 'sum()' },
  { value: 'min', text: 'min()' },
  { value: 'max', text: 'max()' },
];

export const FEATURE_FIELDS = [
  'featureName',
  'aggregationOf',
  'aggregationBy',
  'aggregationQuery',
];

export const EMPTY_UI_FILTER: UIFilter = {
  fieldInfo: [],
  operator: OPERATORS_MAP.IS,
  fieldValue: '',
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
  filterType: FILTER_TYPES.SIMPLE,
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

export const INITIAL_DETECTOR_JOB_VALUES: DetectorJobFormikValues = {
  startTime: 'now',
  endTime: 'now-30d',
  rangeValid: true,
};

export const INITIAL_DETECTOR_VALUES: CreateDetectorFormikValues = {
  ...INITIAL_DETECTOR_DEFINITION_VALUES,
  ...INITIAL_MODEL_CONFIGURATION_VALUES,
  ...INITIAL_DETECTOR_JOB_VALUES,
};