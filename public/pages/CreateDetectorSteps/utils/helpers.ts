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
  DATA_TYPES,
  MULTI_ENTITY_SHINGLE_SIZE,
  SINGLE_ENTITY_SHINGLE_SIZE,
} from '../../../utils/constants';
import {
  FEATURE_TYPE,
  FILTER_TYPES,
  UNITS,
  FeatureAttributes,
  Detector,
  UIFilter,
  UiFeature,
} from '../../../models/interfaces';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { get, forOwn, cloneDeep, isEmpty, snakeCase } from 'lodash';
import { DataTypes } from '../../../redux/reducers/elasticsearch';
import { DetectorDefinitionFormikValues } from '../../DefineDetector/models/interfaces';
import {
  ModelConfigurationFormikValues,
  FeaturesFormikValues,
} from '../../ConfigureModel/models/interfaces';
import { CreateDetectorFormikValues } from '../models/interfaces';
import {
  INITIAL_DETECTOR_DEFINITION_VALUES,
  INITIAL_MODEL_CONFIGURATION_VALUES,
} from './constants';
import { OPERATORS_QUERY_MAP } from './whereFilters';
import { convertTimestampToNumber } from '../../../utils/utils';

export const getFieldOptions = (
  allFields: { [key: string]: string[] },
  validTypes: DATA_TYPES[]
) =>
  validTypes
    .map((dataType) =>
      allFields[dataType]
        ? {
            label: dataType,
            options: allFields[dataType].map((field) => ({
              label: field,
              type: dataType,
            })),
          }
        : []
    )
    .filter(Boolean);

export const getNumberFieldOptions = (allFields: { [key: string]: string[] }) =>
  getFieldOptions(allFields, [DATA_TYPES.NUMBER]);

export const getCountableFieldOptions = (allFields: {
  [key: string]: string[];
}) => {
  const countableDataTypes = [
    DATA_TYPES.NUMBER,
    DATA_TYPES.BOOLEAN,
    DATA_TYPES.KEYWORD,
    DATA_TYPES.DATE,
  ];
  return getFieldOptions(
    allFields,
    Object.keys(allFields)
      .map((field) => field as DATA_TYPES)
      .filter((field) => countableDataTypes.includes(field))
  );
};

export const initialFeatureValue = () => ({
  featureId: uuidv4(),
  featureName: undefined,
  featureType: FEATURE_TYPE.SIMPLE,
  featureEnabled: true,
  importance: 1,
  aggregationBy: 'sum',
  aggregationQuery: JSON.stringify(
    {
      aggregation_name: { sum: { field: 'field_name' } },
    },
    null,
    4
  ),
  newFeature: true,
});

export const validateFeatures = (values: any) => {
  const featureList = get(values, 'featureList', []);
  let featureNameCount = new Map<string, number>();

  featureList.forEach((attribute: FeatureAttributes) => {
    if (attribute.featureName) {
      const featureName = attribute.featureName.toLowerCase();
      if (featureNameCount.has(featureName)) {
        featureNameCount.set(
          featureName,
          // @ts-ignore
          featureNameCount.get(featureName) + 1
        );
      } else {
        featureNameCount.set(featureName, 1);
      }
    }
  });

  let hasError = false;
  const featureErrors = featureList.map((attribute: FeatureAttributes) => {
    if (attribute.featureName) {
      // @ts-ignore
      if (featureNameCount.get(attribute.featureName.toLowerCase()) > 1) {
        hasError = true;
        return { featureName: 'Duplicate feature name' };
      } else {
        return undefined;
      }
    } else {
      hasError = true;
      // @ts-ignore
      return {
        featureName: 'You must enter a feature name',
      };
    }
  });
  return hasError ? { featureList: featureErrors } : undefined;
};

export const generateInitialFeatures = (
  detector: Detector
): FeaturesFormikValues[] => {
  const featureUiMetaData = get(detector, 'uiMetadata.features', []);
  const features = get(detector, 'featureAttributes', []);
  // @ts-ignore
  return features.map((feature: FeatureAttributes) => {
    return {
      ...featureUiMetaData[feature.featureName],
      ...feature,
      aggregationQuery: JSON.stringify(feature['aggregationQuery'], null, 4),
      aggregationOf: get(
        featureUiMetaData,
        `${feature.featureName}.aggregationOf`
      )
        ? [
            {
              label: get(
                featureUiMetaData,
                `${feature.featureName}.aggregationOf`
              ),
            },
          ]
        : [],
      featureType: get(featureUiMetaData, `${feature.featureName}.featureType`)
        ? get(featureUiMetaData, `${feature.featureName}.featureType`)
        : FEATURE_TYPE.CUSTOM,
    };
  });
};

export const focusOnFirstWrongFeature = (errors: any, setFieldTouched: any) => {
  if (
    //@ts-ignore
    !!get(errors, 'featureList', []).filter((featureError) => featureError)
      .length
  ) {
    const featureList = get(errors, 'featureList', []);
    for (let i = featureList.length - 1; i >= 0; i--) {
      if (featureList[i]) {
        forOwn(featureList[i], function (value, key) {
          setFieldTouched(`featureList.${i}.${key}`, true);
        });
        focusOnFeatureAccordion(i);
      }
    }
    return true;
  }
  return false;
};

export const focusOnFeatureAccordion = (index: number) => {
  const featureAccordion = document.getElementById(
    `featureAccordionHeaders.${index}`
  );
  //@ts-ignore
  featureAccordion.setAttribute('tabindex', '-1');
  //@ts-ignore
  featureAccordion.focus();
  const header =
    //@ts-ignore
    featureAccordion.parentElement.parentElement.parentElement.parentElement;
  //@ts-ignore
  if (!header.className.includes('euiAccordion-isOpen')) {
    //@ts-ignore
    featureAccordion.click();
  }
};

export const focusOnCategoryField = () => {
  const component = document.getElementById('categoryFieldCheckbox');
  component?.focus();
};

export const getCategoryFields = (dataTypes: DataTypes) => {
  const keywordFields = get(dataTypes, 'keyword', []);
  const ipFields = get(dataTypes, 'ip', []);
  return keywordFields.concat(ipFields);
};

export const getShingleSizeFromObject = (
  obj: object,
  isHCDetector: boolean
) => {
  return get(
    obj,
    'shingleSize',
    isHCDetector ? MULTI_ENTITY_SHINGLE_SIZE : SINGLE_ENTITY_SHINGLE_SIZE
  );
};

export function clearModelConfiguration(ad: Detector): Detector {
  return {
    ...ad,
    featureAttributes: [],
    uiMetadata: {
      ...ad.uiMetadata,
      features: {},
    },
    categoryField: undefined,
    shingleSize: SINGLE_ENTITY_SHINGLE_SIZE,
  };
}

//****** Originally in detectorToFormik.ts, renamed to detectorDefinitionToFormik ******

export function detectorDefinitionToFormik(
  ad: Detector
): DetectorDefinitionFormikValues {
  const initialValues = cloneDeep(INITIAL_DETECTOR_DEFINITION_VALUES);
  if (isEmpty(ad)) return initialValues;

  return {
    ...initialValues,
    name: ad.name,
    description: ad.description,
    index: [{ label: ad.indices[0] }], // Currently we support only one index
    filters: filtersToFormik(ad),
    filterQuery: JSON.stringify(
      get(ad, 'filterQuery', { match_all: {} }),
      null,
      4
    ),
    timeField: ad.timeField,
    interval: get(ad, 'detectionInterval.period.interval', 10),
    windowDelay: get(ad, 'windowDelay.period.interval', 0),
    // shingleSize: getShingleSizeFromObject(
    //   ad,
    //   !isEmpty(get(ad, 'categoryField', []))
    // ),
  };
}

// **** added the following 2 fns - need to make sure these work as expected
export function modelConfigurationToFormik(
  detector: Detector
): ModelConfigurationFormikValues {
  const initialValues = cloneDeep(INITIAL_MODEL_CONFIGURATION_VALUES);
  if (isEmpty(detector)) {
    return initialValues;
  }
  return {
    ...initialValues,
    featureList: featuresToFormik(detector),
    categoryFieldEnabled:
      get(detector, 'categoryField.0', []).length > 0 ? true : false,
    categoryField: get(detector, 'categoryField.0', []),
    shingleSize: get(detector, 'shingleSize', 4),
  };
}

function filtersToFormik(detector: Detector): UIFilter[] {
  // Detectors created or updated using the API will not have metadata - create a custom filter in this case.
  const noMetadata =
    get(detector, 'uiMetadata.filterType') === undefined &&
    get(detector, 'uiMetadata.filters') === undefined;
  if (noMetadata) {
    return [
      {
        filterType: FILTER_TYPES.CUSTOM,
        query: JSON.stringify(
          get(detector, 'filterQuery', { match_all: {} }),
          null,
          4
        ),
      },
    ];
  }

  const curFilterType = get(detector, 'uiMetadata.filterType');
  const curFilters = get(detector, 'uiMetadata.filters', []);
  const curFilterQuery = JSON.stringify(
    get(detector, 'filterQuery', { match_all: {} }),
    null,
    4
  );

  // If this is an old detector (has a base filter type): modify it by injecting that
  // filter type into each existing filter
  if (curFilterType !== undefined) {
    curFilters.forEach((filter: UIFilter) => {
      return {
        ...filter,
        filterType: curFilterType,
        query:
          curFilterType === FILTER_TYPES.CUSTOM ? curFilterQuery : undefined,
      };
    });
  }
  return curFilters;
}

function featuresToFormik(detector: Detector): FeaturesFormikValues[] {
  const featureUiMetaData = get(detector, 'uiMetadata.features', []);
  const features = get(detector, 'featureAttributes', []);
  // @ts-ignore
  return features.map((feature: FeatureAttributes) => {
    return {
      ...featureUiMetaData[feature.featureName],
      ...feature,
      aggregationQuery: JSON.stringify(feature['aggregationQuery'], null, 4),
      aggregationOf: get(
        featureUiMetaData,
        `${feature.featureName}.aggregationOf`
      )
        ? [
            {
              label: get(
                featureUiMetaData,
                `${feature.featureName}.aggregationOf`
              ),
            },
          ]
        : [],
      featureType: get(featureUiMetaData, `${feature.featureName}.featureType`)
        ? get(featureUiMetaData, `${feature.featureName}.featureType`)
        : FEATURE_TYPE.CUSTOM,
    };
  });
}

//********** Originally in formikToDetector.ts *************

// Modified to include all detector fields
// Used in create detector flow
export function formikToDetector(values: CreateDetectorFormikValues): Detector {
  const detectionDateRange = values.historical
    ? {
        startTime: convertTimestampToNumber(values.startTime),
        endTime: convertTimestampToNumber(values.endTime),
      }
    : undefined;
  let detectorBody = {
    name: values.name,
    description: values.description,
    indices: formikToIndices(values.index),
    filterQuery: formikToFilterQuery(values),
    uiMetadata: {
      features: { ...featuresToUIMetadata(values.featureList) },
      filters: get(values, 'filters', []),
    },
    featureAttributes: formikToFeatureAttributes(values.featureList),
    timeField: values.timeField,
    detectionInterval: {
      period: { interval: values.interval, unit: UNITS.MINUTES },
    },
    windowDelay: {
      period: { interval: values.windowDelay, unit: UNITS.MINUTES },
    },
    shingleSize: values.shingleSize,
    detectionDateRange: detectionDateRange,
    categoryField: get(values, 'categoryField', []),
  } as Detector;

  return detectorBody;
}

// Used when editing detector definition
export function formikToDetectorDefinition(
  values: DetectorDefinitionFormikValues,
  detector: Detector
): Detector {
  let detectorBody = {
    ...detector,
    name: values.name,
    description: values.description,
    indices: formikToIndices(values.index),
    filterQuery: formikToFilterQuery(values),
    uiMetadata: {
      ...detector.uiMetadata,
      filters: get(values, 'filters', []),
    },
    timeField: values.timeField,
    detectionInterval: {
      period: { interval: values.interval, unit: UNITS.MINUTES },
    },
    windowDelay: {
      period: { interval: values.windowDelay, unit: UNITS.MINUTES },
    },
  } as Detector;

  return detectorBody;
}

// Used when editing model configuration
export function formikToModelConfiguration(
  values: ModelConfigurationFormikValues,
  detector: Detector
): Detector {
  let detectorBody = {
    ...detector,
    uiMetadata: {
      ...detector.uiMetadata,
      features: { ...featuresToUIMetadata(values.featureList) },
    },
    featureAttributes: formikToFeatureAttributes(values.featureList),
    shingleSize: values.shingleSize,
    categoryField: get(values, 'categoryField', []),
  } as Detector;

  return detectorBody;
}

export const formikToSimpleFilterQuery = (
  filters: UIFilter[]
): { [key: string]: any } => {
  if (filters.length > 0) {
    const esFilters = filters.map((filter: UIFilter) => {
      return OPERATORS_QUERY_MAP[filter.operator].query(filter);
    });
    return {
      bool: {
        filter: [...esFilters],
      },
    };
  } else {
    return { match_all: {} };
  }
};

const formikToIndices = (indices: { label: string }[]) =>
  indices.map((index) => index.label);

// ********* Originally in formikToFeatures.ts **********

export function prepareDetector(
  featureValues: FeaturesFormikValues[],
  shingleSizeValue: number,
  categoryFields: string[],
  ad: Detector,
  forPreview: boolean = false
): Detector {
  const detector = cloneDeep(ad);
  const featureAttributes = formikToFeatures(featureValues, forPreview);

  return {
    ...detector,
    featureAttributes: [...featureAttributes],
    shingleSize: shingleSizeValue,
    categoryField: isEmpty(categoryFields) ? undefined : categoryFields,
    uiMetadata: {
      ...detector.uiMetadata,
      features: { ...featuresToUIMetadata(featureValues) },
    },
  };
}

export function formikToSimpleAggregation(value: FeaturesFormikValues) {
  if (
    value.aggregationBy &&
    value.aggregationOf &&
    value.aggregationOf.length > 0
  ) {
    return {
      [value.featureName]: {
        [value.aggregationBy]: { field: value.aggregationOf[0].label },
      },
    };
  } else {
    return {};
  }
}

export function formikToAggregation(values: FeaturesFormikValues) {
  if (values.featureType === FEATURE_TYPE.SIMPLE) {
    return values.aggregationBy &&
      values.aggregationOf &&
      values.aggregationOf.length > 0
      ? {
          [snakeCase(values.featureName)]: {
            [values.aggregationBy]: { field: values.aggregationOf[0].label },
          },
        }
      : {};
  }
  return JSON.parse(values.aggregationQuery);
}

export function formikToFeatures(
  values: FeaturesFormikValues[],
  forPreview: boolean
) {
  const featureAttribute = formikToFeatureAttributes(values, forPreview);
  return featureAttribute;
}

export function featuresToUIMetadata(values: FeaturesFormikValues[]) {
  // TODO:: Delete Stale metadata if name is changed
  let features: {
    [key: string]: UiFeature;
  } = {};
  values.forEach((value) => {
    if (value.featureType === FEATURE_TYPE.SIMPLE) {
      features[value.featureName] = {
        featureType: value.featureType,
        aggregationBy: value.aggregationBy,
        aggregationOf:
          value.aggregationOf && value.aggregationOf.length
            ? value.aggregationOf[0].label
            : undefined,
      };
    } else {
      features[value.featureName] = {
        featureType: value.featureType,
      };
    }
  });
  return features;
}

function formikToFeatureAttributes(
  values: FeaturesFormikValues[],
  forPreview: boolean = false
): FeatureAttributes[] {
  return values.map(function (value) {
    const id = forPreview
      ? value.featureId
      : value.newFeature
      ? undefined
      : value.featureId;
    return {
      featureId: id,
      featureName: value.featureName,
      featureEnabled: value.featureEnabled,
      importance: 1,
      aggregationQuery: formikToAggregation(value),
    };
  });
}

// ********** added the following helper fns ************
export const formikToFilterQuery = (
  values: CreateDetectorFormikValues | DetectorDefinitionFormikValues
) => {
  let filterQuery = {};
  const filters = get(values, 'filters', []);

  // If we have filters: need to combine into a single filter query.
  // Need to handle each filter type differently when converting
  if (filters.length > 0) {
    let filterArr = [] as any[];
    filters.forEach((filter) => {
      if (filter.filterType === FILTER_TYPES.SIMPLE) {
        filterArr.push(
          //@ts-ignore
          OPERATORS_QUERY_MAP[filter.operator]?.query(filter)
        );
      } else {
        filterArr.push(
          //@ts-ignore
          JSON.parse(filter.query)
        );
      }
    });
    filterQuery = {
      bool: {
        filter: [...filterArr],
      },
    };
  }
  return filterQuery;
};

export function toStringConfigCell(obj: any): string {
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
