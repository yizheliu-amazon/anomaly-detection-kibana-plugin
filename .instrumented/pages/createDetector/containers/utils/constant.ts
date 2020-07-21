function cov_28r7fou6rw() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/containers/utils/constant.ts";
  var hash = "10d03d91d51738c5b38aa0a7b4896e3cf1aa6071";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/containers/utils/constant.ts",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 46
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 32,
          column: 41
        },
        end: {
          line: 36,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "10d03d91d51738c5b38aa0a7b4896e3cf1aa6071"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28r7fou6rw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_28r7fou6rw();

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
import { ADFormikValues } from '../models/interfaces';
import { OPERATORS_MAP } from '../../components/DataFilters/utils/constant';
import { UIFilter, FILTER_TYPES } from '../../../../models/interfaces';
export const INITIAL_VALUES: ADFormikValues = (cov_28r7fou6rw().s[0]++, {
  detectorName: '',
  timeField: '',
  detectorDescription: '',
  filters: [],
  index: [],
  filterType: FILTER_TYPES.SIMPLE,
  filterQuery: JSON.stringify({
    bool: {
      filter: []
    }
  }, null, 4),
  detectionInterval: 10,
  windowDelay: 1
});
export const EMPTY_UI_FILTER: UIFilter = (cov_28r7fou6rw().s[1]++, {
  fieldInfo: [],
  operator: OPERATORS_MAP.IS,
  fieldValue: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50LnRzIl0sIm5hbWVzIjpbIkFERm9ybWlrVmFsdWVzIiwiT1BFUkFUT1JTX01BUCIsIlVJRmlsdGVyIiwiRklMVEVSX1RZUEVTIiwiSU5JVElBTF9WQUxVRVMiLCJkZXRlY3Rvck5hbWUiLCJ0aW1lRmllbGQiLCJkZXRlY3RvckRlc2NyaXB0aW9uIiwiZmlsdGVycyIsImluZGV4IiwiZmlsdGVyVHlwZSIsIlNJTVBMRSIsImZpbHRlclF1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImJvb2wiLCJmaWx0ZXIiLCJkZXRlY3Rpb25JbnRlcnZhbCIsIndpbmRvd0RlbGF5IiwiRU1QVFlfVUlfRklMVEVSIiwiZmllbGRJbmZvIiwib3BlcmF0b3IiLCJJUyIsImZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU0EsY0FBVCxRQUErQixzQkFBL0I7QUFDQSxTQUFTQyxhQUFULFFBQThCLDZDQUE5QjtBQUNBLFNBQVNDLFFBQVQsRUFBbUJDLFlBQW5CLFFBQXVDLCtCQUF2QztBQUVBLE9BQU8sTUFBTUMsY0FBYyxFQUFFSixjQUFjLDZCQUFHO0FBQzVDSyxFQUFBQSxZQUFZLEVBQUUsRUFEOEI7QUFFNUNDLEVBQUFBLFNBQVMsRUFBRSxFQUZpQztBQUc1Q0MsRUFBQUEsbUJBQW1CLEVBQUUsRUFIdUI7QUFJNUNDLEVBQUFBLE9BQU8sRUFBRSxFQUptQztBQUs1Q0MsRUFBQUEsS0FBSyxFQUFFLEVBTHFDO0FBTTVDQyxFQUFBQSxVQUFVLEVBQUVQLFlBQVksQ0FBQ1EsTUFObUI7QUFPNUNDLEVBQUFBLFdBQVcsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVIsR0FBZixFQUF5QyxJQUF6QyxFQUErQyxDQUEvQyxDQVArQjtBQVE1Q0MsRUFBQUEsaUJBQWlCLEVBQUUsRUFSeUI7QUFTNUNDLEVBQUFBLFdBQVcsRUFBRTtBQVQrQixDQUFILENBQXBDO0FBWVAsT0FBTyxNQUFNQyxlQUFlLEVBQUVqQixRQUFRLDZCQUFHO0FBQ3ZDa0IsRUFBQUEsU0FBUyxFQUFFLEVBRDRCO0FBRXZDQyxFQUFBQSxRQUFRLEVBQUVwQixhQUFhLENBQUNxQixFQUZlO0FBR3ZDQyxFQUFBQSxVQUFVLEVBQUU7QUFIMkIsQ0FBSCxDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFERm9ybWlrVmFsdWVzIH0gZnJvbSAnLi4vbW9kZWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTX01BUCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGF0YUZpbHRlcnMvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IHsgVUlGaWx0ZXIsIEZJTFRFUl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfVkFMVUVTOiBBREZvcm1pa1ZhbHVlcyA9IHtcbiAgZGV0ZWN0b3JOYW1lOiAnJyxcbiAgdGltZUZpZWxkOiAnJyxcbiAgZGV0ZWN0b3JEZXNjcmlwdGlvbjogJycsXG4gIGZpbHRlcnM6IFtdLFxuICBpbmRleDogW10sXG4gIGZpbHRlclR5cGU6IEZJTFRFUl9UWVBFUy5TSU1QTEUsXG4gIGZpbHRlclF1ZXJ5OiBKU09OLnN0cmluZ2lmeSh7IGJvb2w6IHsgZmlsdGVyOiBbXSB9IH0sIG51bGwsIDQpLFxuICBkZXRlY3Rpb25JbnRlcnZhbDogMTAsXG4gIHdpbmRvd0RlbGF5OiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1VJX0ZJTFRFUjogVUlGaWx0ZXIgPSB7XG4gIGZpZWxkSW5mbzogW10sXG4gIG9wZXJhdG9yOiBPUEVSQVRPUlNfTUFQLklTLFxuICBmaWVsZFZhbHVlOiAnJyxcbn07XG4iXX0=