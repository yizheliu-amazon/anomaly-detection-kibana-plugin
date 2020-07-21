function cov_nbgk992j4() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/EditFeatures/utils/constants.ts";
  var hash = "0fd1c539bb80ff286a894fe11f615b5def8e3475";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/EditFeatures/utils/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 29
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 36
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "2": {
        start: {
          line: 34,
          column: 33
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "3": {
        start: {
          line: 42,
          column: 30
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "4": {
        start: {
          line: 49,
          column: 52
        },
        end: {
          line: 61,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0fd1c539bb80ff286a894fe11f615b5def8e3475"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nbgk992j4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_nbgk992j4();

/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
import { FEATURE_TYPE } from '../../../models/interfaces';
import { FeaturesFormikValues } from '../containers/utils/formikToFeatures';
export const FEATURE_TYPES = (cov_nbgk992j4().s[0]++, [{
  text: 'Custom Aggregation',
  value: FEATURE_TYPE.CUSTOM
}, {
  text: 'Defined Aggregation',
  value: FEATURE_TYPE.SIMPLE
}]);
export const FEATURE_TYPE_OPTIONS = (cov_nbgk992j4().s[1]++, [{
  text: 'Field value',
  value: FEATURE_TYPE.SIMPLE
}, {
  text: 'Custom expression',
  value: FEATURE_TYPE.CUSTOM
}]);
export enum SAVE_FEATURE_OPTIONS {
  START_AD_JOB = 'start_ad_job',
  KEEP_AD_JOB_STOPPED = 'keep_ad_job_stopped',
}
export const AGGREGATION_TYPES = (cov_nbgk992j4().s[2]++, [{
  value: 'avg',
  text: 'average()'
}, {
  value: 'value_count',
  text: 'count()'
}, {
  value: 'sum',
  text: 'sum()'
}, {
  value: 'min',
  text: 'min()'
}, {
  value: 'max',
  text: 'max()'
}]);
export const FEATURE_FIELDS = (cov_nbgk992j4().s[3]++, ['featureName', 'aggregationOf', 'aggregationBy', 'aggregationQuery']);
export const INITIAL_VALUES: FeaturesFormikValues = (cov_nbgk992j4().s[4]++, {
  featureId: '',
  featureName: '',
  featureEnabled: true,
  featureType: FEATURE_TYPE.SIMPLE,
  aggregationQuery: JSON.stringify({
    aggregation_name: {
      sum: {
        field: 'field_name'
      }
    }
  }, null, 4),
  aggregationBy: '',
  aggregationOf: []
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJGRUFUVVJFX1RZUEUiLCJGZWF0dXJlc0Zvcm1pa1ZhbHVlcyIsIkZFQVRVUkVfVFlQRVMiLCJ0ZXh0IiwidmFsdWUiLCJDVVNUT00iLCJTSU1QTEUiLCJGRUFUVVJFX1RZUEVfT1BUSU9OUyIsIlNBVkVfRkVBVFVSRV9PUFRJT05TIiwiU1RBUlRfQURfSk9CIiwiS0VFUF9BRF9KT0JfU1RPUFBFRCIsIkFHR1JFR0FUSU9OX1RZUEVTIiwiRkVBVFVSRV9GSUVMRFMiLCJJTklUSUFMX1ZBTFVFUyIsImZlYXR1cmVJZCIsImZlYXR1cmVOYW1lIiwiZmVhdHVyZUVuYWJsZWQiLCJmZWF0dXJlVHlwZSIsImFnZ3JlZ2F0aW9uUXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWdncmVnYXRpb25fbmFtZSIsInN1bSIsImZpZWxkIiwiYWdncmVnYXRpb25CeSIsImFnZ3JlZ2F0aW9uT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU0EsWUFBVCxRQUE2Qiw0QkFBN0I7QUFDQSxTQUFTQyxvQkFBVCxRQUFxQyxzQ0FBckM7QUFFQSxPQUFPLE1BQU1DLGFBQWEsNEJBQUcsQ0FDM0I7QUFBRUMsRUFBQUEsSUFBSSxFQUFFLG9CQUFSO0FBQThCQyxFQUFBQSxLQUFLLEVBQUVKLFlBQVksQ0FBQ0s7QUFBbEQsQ0FEMkIsRUFFM0I7QUFBRUYsRUFBQUEsSUFBSSxFQUFFLHFCQUFSO0FBQStCQyxFQUFBQSxLQUFLLEVBQUVKLFlBQVksQ0FBQ007QUFBbkQsQ0FGMkIsQ0FBSCxDQUFuQjtBQUtQLE9BQU8sTUFBTUMsb0JBQW9CLDRCQUFHLENBQ2xDO0FBQUVKLEVBQUFBLElBQUksRUFBRSxhQUFSO0FBQXVCQyxFQUFBQSxLQUFLLEVBQUVKLFlBQVksQ0FBQ007QUFBM0MsQ0FEa0MsRUFFbEM7QUFBRUgsRUFBQUEsSUFBSSxFQUFFLG1CQUFSO0FBQTZCQyxFQUFBQSxLQUFLLEVBQUVKLFlBQVksQ0FBQ0s7QUFBakQsQ0FGa0MsQ0FBSCxDQUExQjtBQUtQLE9BQU8sS0FBS0csb0JBQUw7QUFDTEMsRUFBQUEsWUFBWSxHQUFHLGNBQUg7QUFDWkMsRUFBQUEsbUJBQW1CLEdBQUcscUJBQUg7QUFGZDtBQUtQLE9BQU8sTUFBTUMsaUJBQWlCLDRCQUFHLENBQy9CO0FBQUVQLEVBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCRCxFQUFBQSxJQUFJLEVBQUU7QUFBdEIsQ0FEK0IsRUFFL0I7QUFBRUMsRUFBQUEsS0FBSyxFQUFFLGFBQVQ7QUFBd0JELEVBQUFBLElBQUksRUFBRTtBQUE5QixDQUYrQixFQUcvQjtBQUFFQyxFQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkQsRUFBQUEsSUFBSSxFQUFFO0FBQXRCLENBSCtCLEVBSS9CO0FBQUVDLEVBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCRCxFQUFBQSxJQUFJLEVBQUU7QUFBdEIsQ0FKK0IsRUFLL0I7QUFBRUMsRUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JELEVBQUFBLElBQUksRUFBRTtBQUF0QixDQUwrQixDQUFILENBQXZCO0FBUVAsT0FBTyxNQUFNUyxjQUFjLDRCQUFHLENBQzVCLGFBRDRCLEVBRTVCLGVBRjRCLEVBRzVCLGVBSDRCLEVBSTVCLGtCQUo0QixDQUFILENBQXBCO0FBT1AsT0FBTyxNQUFNQyxjQUFjLEVBQUVaLG9CQUFvQiw0QkFBRztBQUNsRGEsRUFBQUEsU0FBUyxFQUFFLEVBRHVDO0FBRWxEQyxFQUFBQSxXQUFXLEVBQUUsRUFGcUM7QUFHbERDLEVBQUFBLGNBQWMsRUFBRSxJQUhrQztBQUlsREMsRUFBQUEsV0FBVyxFQUFFakIsWUFBWSxDQUFDTSxNQUp3QjtBQUtsRFksRUFBQUEsZ0JBQWdCLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUNoQjtBQUFFQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQUFFQyxNQUFBQSxHQUFHLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBUDtBQUFwQixHQURnQixFQUVoQixJQUZnQixFQUdoQixDQUhnQixDQUxnQztBQVVsREMsRUFBQUEsYUFBYSxFQUFFLEVBVm1DO0FBV2xEQyxFQUFBQSxhQUFhLEVBQUU7QUFYbUMsQ0FBSCxDQUExQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEZFQVRVUkVfVFlQRSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZlYXR1cmVzRm9ybWlrVmFsdWVzIH0gZnJvbSAnLi4vY29udGFpbmVycy91dGlscy9mb3JtaWtUb0ZlYXR1cmVzJztcblxuZXhwb3J0IGNvbnN0IEZFQVRVUkVfVFlQRVMgPSBbXG4gIHsgdGV4dDogJ0N1c3RvbSBBZ2dyZWdhdGlvbicsIHZhbHVlOiBGRUFUVVJFX1RZUEUuQ1VTVE9NIH0sXG4gIHsgdGV4dDogJ0RlZmluZWQgQWdncmVnYXRpb24nLCB2YWx1ZTogRkVBVFVSRV9UWVBFLlNJTVBMRSB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZFQVRVUkVfVFlQRV9PUFRJT05TID0gW1xuICB7IHRleHQ6ICdGaWVsZCB2YWx1ZScsIHZhbHVlOiBGRUFUVVJFX1RZUEUuU0lNUExFIH0sXG4gIHsgdGV4dDogJ0N1c3RvbSBleHByZXNzaW9uJywgdmFsdWU6IEZFQVRVUkVfVFlQRS5DVVNUT00gfSxcbl07XG5cbmV4cG9ydCBlbnVtIFNBVkVfRkVBVFVSRV9PUFRJT05TIHtcbiAgU1RBUlRfQURfSk9CID0gJ3N0YXJ0X2FkX2pvYicsXG4gIEtFRVBfQURfSk9CX1NUT1BQRUQgPSAna2VlcF9hZF9qb2Jfc3RvcHBlZCcsXG59XG5cbmV4cG9ydCBjb25zdCBBR0dSRUdBVElPTl9UWVBFUyA9IFtcbiAgeyB2YWx1ZTogJ2F2ZycsIHRleHQ6ICdhdmVyYWdlKCknIH0sXG4gIHsgdmFsdWU6ICd2YWx1ZV9jb3VudCcsIHRleHQ6ICdjb3VudCgpJyB9LFxuICB7IHZhbHVlOiAnc3VtJywgdGV4dDogJ3N1bSgpJyB9LFxuICB7IHZhbHVlOiAnbWluJywgdGV4dDogJ21pbigpJyB9LFxuICB7IHZhbHVlOiAnbWF4JywgdGV4dDogJ21heCgpJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZFQVRVUkVfRklFTERTID0gW1xuICAnZmVhdHVyZU5hbWUnLFxuICAnYWdncmVnYXRpb25PZicsXG4gICdhZ2dyZWdhdGlvbkJ5JyxcbiAgJ2FnZ3JlZ2F0aW9uUXVlcnknLFxuXTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfVkFMVUVTOiBGZWF0dXJlc0Zvcm1pa1ZhbHVlcyA9IHtcbiAgZmVhdHVyZUlkOiAnJyxcbiAgZmVhdHVyZU5hbWU6ICcnLFxuICBmZWF0dXJlRW5hYmxlZDogdHJ1ZSxcbiAgZmVhdHVyZVR5cGU6IEZFQVRVUkVfVFlQRS5TSU1QTEUsXG4gIGFnZ3JlZ2F0aW9uUXVlcnk6IEpTT04uc3RyaW5naWZ5KFxuICAgIHsgYWdncmVnYXRpb25fbmFtZTogeyBzdW06IHsgZmllbGQ6ICdmaWVsZF9uYW1lJyB9IH0gfSxcbiAgICBudWxsLFxuICAgIDRcbiAgKSxcbiAgYWdncmVnYXRpb25CeTogJycsXG4gIGFnZ3JlZ2F0aW9uT2Y6IFtdLFxufTtcbiJdfQ==