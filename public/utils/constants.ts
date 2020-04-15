/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

export enum DATA_TYPES {
  NUMBER = 'number',
  TEXT = 'text',
  BOOLEAN = 'boolean',
  KEYWORD = 'keyword',
}

export const BREADCRUMBS = Object.freeze({
  ANOMALY_DETECTOR: { text: 'Anomaly detection', href: '#/' },
  DETECTORS: { text: 'Detectors', href: '#/detectors' },
  CREATE_DETECTOR: { text: 'Create detector' },
  EDIT_DETECTOR: { text: 'Edit detector' },
  DASHBOARD: { text: 'Dashboard', href: '#/' },
  EDIT_FEATURES: { text: 'Edit features' },
});

export const APP_PATH = {
  CREATE_DETECTOR: '/create-ad',
  DASHBOARD: '/dashboard',
  LIST_DETECTORS: '/detectors',
  DETECTOR_DETAILS: '/detectors/:detectorId/',
};
export const PLUGIN_NAME = 'opendistro-anomaly-detection';

export const ALERTING_PLUGIN_NAME = 'opendistro-alerting';

export const ANOMALY_RESULT_INDEX = '.opendistro-anomaly-results';