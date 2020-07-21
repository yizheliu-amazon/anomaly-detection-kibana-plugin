function cov_2768x1t3jp() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/containers/utils/detectorToFormik.ts";
  var hash = "1e0fb289595ffc588d4f16e14686fd1feaf93227";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/containers/utils/detectorToFormik.ts",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 24
        },
        end: {
          line: 22,
          column: 49
        }
      },
      "1": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 40
        }
      },
      "2": {
        start: {
          line: 23,
          column: 19
        },
        end: {
          line: 23,
          column: 40
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 70
        }
      },
      "4": {
        start: {
          line: 27,
          column: 20
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "5": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "detectorToFormik",
        decl: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 32
          }
        },
        loc: {
          start: {
            line: 21,
            column: 63
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 40
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 40
          }
        }, {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 40
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 47
          }
        }, {
          start: {
            line: 26,
            column: 51
          },
          end: {
            line: 26,
            column: 70
          }
        }],
        line: 26
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1e0fb289595ffc588d4f16e14686fd1feaf93227"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2768x1t3jp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2768x1t3jp();

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
import { cloneDeep, isEmpty, get } from 'lodash';
import { Detector, FILTER_TYPES } from '../../../../models/interfaces';
import { ADFormikValues } from '../models/interfaces';
import { INITIAL_VALUES } from './constant';
export function detectorToFormik(ad: Detector): ADFormikValues {
  cov_2768x1t3jp().f[0]++;
  const initialValues = (cov_2768x1t3jp().s[0]++, cloneDeep(INITIAL_VALUES));
  cov_2768x1t3jp().s[1]++;

  if (isEmpty(ad)) {
    cov_2768x1t3jp().b[0][0]++;
    cov_2768x1t3jp().s[2]++;
    return initialValues;
  } else {
    cov_2768x1t3jp().b[0][1]++;
  } //If detector id updated / added using API, convert all filters to Query boxes as we don't have any meta data.


  const filterType = (cov_2768x1t3jp().s[3]++, (cov_2768x1t3jp().b[1][0]++, get(ad, 'uiMetadata.filterType', undefined)) || (cov_2768x1t3jp().b[1][1]++, FILTER_TYPES.CUSTOM));
  let filterQuery = (cov_2768x1t3jp().s[4]++, JSON.stringify(get(ad, 'filterQuery', {
    match_all: {}
  }), null, 4));
  cov_2768x1t3jp().s[5]++;
  return { ...initialValues,
    detectorName: ad.name,
    detectorDescription: ad.description,
    filters: get(ad, 'uiMetadata.filters', []),
    filterType,
    filterQuery,
    index: [{
      label: ad.indices[0]
    }],
    // Currently we support only one index
    timeField: ad.timeField,
    detectionInterval: get(ad, 'detectionInterval.period.interval', 10),
    windowDelay: get(ad, 'windowDelay.period.interval', 0)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGVjdG9yVG9Gb3JtaWsudHMiXSwibmFtZXMiOlsiY2xvbmVEZWVwIiwiaXNFbXB0eSIsImdldCIsIkRldGVjdG9yIiwiRklMVEVSX1RZUEVTIiwiQURGb3JtaWtWYWx1ZXMiLCJJTklUSUFMX1ZBTFVFUyIsImRldGVjdG9yVG9Gb3JtaWsiLCJhZCIsImluaXRpYWxWYWx1ZXMiLCJmaWx0ZXJUeXBlIiwidW5kZWZpbmVkIiwiQ1VTVE9NIiwiZmlsdGVyUXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwibWF0Y2hfYWxsIiwiZGV0ZWN0b3JOYW1lIiwibmFtZSIsImRldGVjdG9yRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImZpbHRlcnMiLCJpbmRleCIsImxhYmVsIiwiaW5kaWNlcyIsInRpbWVGaWVsZCIsImRldGVjdGlvbkludGVydmFsIiwid2luZG93RGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU0EsU0FBVCxFQUFvQkMsT0FBcEIsRUFBNkJDLEdBQTdCLFFBQXdDLFFBQXhDO0FBQ0EsU0FBU0MsUUFBVCxFQUFtQkMsWUFBbkIsUUFBdUMsK0JBQXZDO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixzQkFBL0I7QUFDQSxTQUFTQyxjQUFULFFBQStCLFlBQS9CO0FBRUEsT0FBTyxTQUFTQyxnQkFBVCxDQUEwQkMsRUFBRSxFQUFFTCxRQUE5QixDQUF1QyxFQUFFRSxjQUF6QyxDQUF3RDtBQUFBO0FBQzdELFFBQU1JLGFBQWEsNkJBQUdULFNBQVMsQ0FBQ00sY0FBRCxDQUFaLENBQW5CO0FBRDZEOztBQUU3RCxNQUFJTCxPQUFPLENBQUNPLEVBQUQsQ0FBWCxFQUFpQjtBQUFBO0FBQUE7QUFBQSxXQUFPQyxhQUFQO0FBQXFCLEdBQXRDO0FBQUE7QUFBQSxHQUY2RCxDQUc3RDs7O0FBQ0EsUUFBTUMsVUFBVSw2QkFDZCw2QkFBQVIsR0FBRyxDQUFDTSxFQUFELEVBQUssdUJBQUwsRUFBOEJHLFNBQTlCLENBQUgsa0NBQStDUCxZQUFZLENBQUNRLE1BQTVELENBRGMsQ0FBaEI7QUFFQSxNQUFJQyxXQUFXLDZCQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FDaEJiLEdBQUcsQ0FBQ00sRUFBRCxFQUFLLGFBQUwsRUFBb0I7QUFBRVEsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBcEIsQ0FEYSxFQUVoQixJQUZnQixFQUdoQixDQUhnQixDQUFILENBQWY7QUFONkQ7QUFXN0QsU0FBTyxFQUNMLEdBQUdQLGFBREU7QUFFTFEsSUFBQUEsWUFBWSxFQUFFVCxFQUFFLENBQUNVLElBRlo7QUFHTEMsSUFBQUEsbUJBQW1CLEVBQUVYLEVBQUUsQ0FBQ1ksV0FIbkI7QUFJTEMsSUFBQUEsT0FBTyxFQUFFbkIsR0FBRyxDQUFDTSxFQUFELEVBQUssb0JBQUwsRUFBMkIsRUFBM0IsQ0FKUDtBQUtMRSxJQUFBQSxVQUxLO0FBTUxHLElBQUFBLFdBTks7QUFPTFMsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFZixFQUFFLENBQUNnQixPQUFILENBQVcsQ0FBWDtBQUFULEtBQUQsQ0FQRjtBQU84QjtBQUNuQ0MsSUFBQUEsU0FBUyxFQUFFakIsRUFBRSxDQUFDaUIsU0FSVDtBQVNMQyxJQUFBQSxpQkFBaUIsRUFBRXhCLEdBQUcsQ0FBQ00sRUFBRCxFQUFLLG1DQUFMLEVBQTBDLEVBQTFDLENBVGpCO0FBVUxtQixJQUFBQSxXQUFXLEVBQUV6QixHQUFHLENBQUNNLEVBQUQsRUFBSyw2QkFBTCxFQUFvQyxDQUFwQztBQVZYLEdBQVA7QUFZRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNsb25lRGVlcCwgaXNFbXB0eSwgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IERldGVjdG9yLCBGSUxURVJfVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBREZvcm1pa1ZhbHVlcyB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElOSVRJQUxfVkFMVUVTIH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RvclRvRm9ybWlrKGFkOiBEZXRlY3Rvcik6IEFERm9ybWlrVmFsdWVzIHtcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IGNsb25lRGVlcChJTklUSUFMX1ZBTFVFUyk7XG4gIGlmIChpc0VtcHR5KGFkKSkgcmV0dXJuIGluaXRpYWxWYWx1ZXM7XG4gIC8vSWYgZGV0ZWN0b3IgaWQgdXBkYXRlZCAvIGFkZGVkIHVzaW5nIEFQSSwgY29udmVydCBhbGwgZmlsdGVycyB0byBRdWVyeSBib3hlcyBhcyB3ZSBkb24ndCBoYXZlIGFueSBtZXRhIGRhdGEuXG4gIGNvbnN0IGZpbHRlclR5cGUgPVxuICAgIGdldChhZCwgJ3VpTWV0YWRhdGEuZmlsdGVyVHlwZScsIHVuZGVmaW5lZCkgfHwgRklMVEVSX1RZUEVTLkNVU1RPTTtcbiAgbGV0IGZpbHRlclF1ZXJ5ID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgZ2V0KGFkLCAnZmlsdGVyUXVlcnknLCB7IG1hdGNoX2FsbDoge30gfSksXG4gICAgbnVsbCxcbiAgICA0XG4gICk7XG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFZhbHVlcyxcbiAgICBkZXRlY3Rvck5hbWU6IGFkLm5hbWUsXG4gICAgZGV0ZWN0b3JEZXNjcmlwdGlvbjogYWQuZGVzY3JpcHRpb24sXG4gICAgZmlsdGVyczogZ2V0KGFkLCAndWlNZXRhZGF0YS5maWx0ZXJzJywgW10pLFxuICAgIGZpbHRlclR5cGUsXG4gICAgZmlsdGVyUXVlcnksXG4gICAgaW5kZXg6IFt7IGxhYmVsOiBhZC5pbmRpY2VzWzBdIH1dLCAvLyBDdXJyZW50bHkgd2Ugc3VwcG9ydCBvbmx5IG9uZSBpbmRleFxuICAgIHRpbWVGaWVsZDogYWQudGltZUZpZWxkLFxuICAgIGRldGVjdGlvbkludGVydmFsOiBnZXQoYWQsICdkZXRlY3Rpb25JbnRlcnZhbC5wZXJpb2QuaW50ZXJ2YWwnLCAxMCksXG4gICAgd2luZG93RGVsYXk6IGdldChhZCwgJ3dpbmRvd0RlbGF5LnBlcmlvZC5pbnRlcnZhbCcsIDApLFxuICB9O1xufVxuIl19