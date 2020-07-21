function cov_1cc5c33tqv() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorResults/utils/tableUtils.ts";
  var hash = "544410e82f1a5f4ae013aa4ea47e900712ddc014";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorResults/utils/tableUtils.ts",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 34
        },
        end: {
          line: 20,
          column: 37
        }
      },
      "1": {
        start: {
          line: 22,
          column: 19
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 33
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 80
        }
      },
      "4": {
        start: {
          line: 24,
          column: 36
        },
        end: {
          line: 24,
          column: 80
        }
      },
      "5": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 28
        }
      },
      "6": {
        start: {
          line: 28,
          column: 28
        },
        end: {
          line: 59,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 19
          },
          end: {
            line: 22,
            column: 20
          }
        },
        loc: {
          start: {
            line: 22,
            column: 37
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 80
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 80
          }
        }, {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 80
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 10
          }
        }, {
          start: {
            line: 24,
            column: 14
          },
          end: {
            line: 24,
            column: 34
          }
        }],
        line: 24
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "544410e82f1a5f4ae013aa4ea47e900712ddc014"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1cc5c33tqv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1cc5c33tqv();

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
//@ts-ignore
import moment from 'moment';
import { EuiBasicTableColumn } from '@elastic/eui';
export const DEFAULT_EMPTY_DATA = (cov_1cc5c33tqv().s[0]++, '-');
cov_1cc5c33tqv().s[1]++;

const renderTime = (time: number) => {
  cov_1cc5c33tqv().f[0]++;
  const momentTime = (cov_1cc5c33tqv().s[2]++, moment(time));
  cov_1cc5c33tqv().s[3]++;

  if ((cov_1cc5c33tqv().b[1][0]++, time) && (cov_1cc5c33tqv().b[1][1]++, momentTime.isValid())) {
    cov_1cc5c33tqv().b[0][0]++;
    cov_1cc5c33tqv().s[4]++;
    return momentTime.format('MM/DD/YY h:mm A');
  } else {
    cov_1cc5c33tqv().b[0][1]++;
  }

  cov_1cc5c33tqv().s[5]++;
  return DEFAULT_EMPTY_DATA;
};

export const staticColumn = (cov_1cc5c33tqv().s[6]++, ([{
  field: 'startTime',
  name: 'Start time',
  sortable: true,
  truncateText: false,
  render: renderTime,
  dataType: 'date'
}, {
  field: 'endTime',
  name: 'End time',
  sortable: true,
  truncateText: false,
  render: renderTime,
  dataType: 'date'
}, {
  field: 'confidence',
  name: 'Data confidence',
  sortable: true,
  truncateText: false,
  dataType: 'number'
}, {
  field: 'anomalyGrade',
  name: 'Anomaly grade',
  sortable: true,
  truncateText: false,
  dataType: 'number'
}] as EuiBasicTableColumn<any>[]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlVXRpbHMudHMiXSwibmFtZXMiOlsibW9tZW50IiwiRXVpQmFzaWNUYWJsZUNvbHVtbiIsIkRFRkFVTFRfRU1QVFlfREFUQSIsInJlbmRlclRpbWUiLCJ0aW1lIiwibW9tZW50VGltZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJzdGF0aWNDb2x1bW4iLCJmaWVsZCIsIm5hbWUiLCJzb3J0YWJsZSIsInRydW5jYXRlVGV4dCIsInJlbmRlciIsImRhdGFUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQSxPQUFPQSxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0MsbUJBQVQsUUFBb0MsY0FBcEM7QUFFQSxPQUFPLE1BQU1DLGtCQUFrQiw2QkFBRyxHQUFILENBQXhCOzs7QUFFUCxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLE1BQVAsS0FBa0I7QUFBQTtBQUNuQyxRQUFNQyxVQUFVLDZCQUFHTCxNQUFNLENBQUNJLElBQUQsQ0FBVCxDQUFoQjtBQURtQzs7QUFFbkMsTUFBSSw2QkFBQUEsSUFBSSxrQ0FBSUMsVUFBVSxDQUFDQyxPQUFYLEVBQUosQ0FBUixFQUFrQztBQUFBO0FBQUE7QUFBQSxXQUFPRCxVQUFVLENBQUNFLE1BQVgsQ0FBa0IsaUJBQWxCLENBQVA7QUFBNEMsR0FBOUU7QUFBQTtBQUFBOztBQUZtQztBQUduQyxTQUFPTCxrQkFBUDtBQUNELENBSkQ7O0FBTUEsT0FBTyxNQUFNTSxZQUFZLDhCQUFHLENBQzFCO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLEVBQUFBLElBQUksRUFBRSxZQUZSO0FBR0VDLEVBQUFBLFFBQVEsRUFBRSxJQUhaO0FBSUVDLEVBQUFBLFlBQVksRUFBRSxLQUpoQjtBQUtFQyxFQUFBQSxNQUFNLEVBQUVWLFVBTFY7QUFNRVcsRUFBQUEsUUFBUSxFQUFFO0FBTlosQ0FEMEIsRUFTMUI7QUFDRUwsRUFBQUEsS0FBSyxFQUFFLFNBRFQ7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLFVBRlI7QUFHRUMsRUFBQUEsUUFBUSxFQUFFLElBSFo7QUFJRUMsRUFBQUEsWUFBWSxFQUFFLEtBSmhCO0FBS0VDLEVBQUFBLE1BQU0sRUFBRVYsVUFMVjtBQU1FVyxFQUFBQSxRQUFRLEVBQUU7QUFOWixDQVQwQixFQWlCMUI7QUFDRUwsRUFBQUEsS0FBSyxFQUFFLFlBRFQ7QUFFRUMsRUFBQUEsSUFBSSxFQUFFLGlCQUZSO0FBR0VDLEVBQUFBLFFBQVEsRUFBRSxJQUhaO0FBSUVDLEVBQUFBLFlBQVksRUFBRSxLQUpoQjtBQUtFRSxFQUFBQSxRQUFRLEVBQUU7QUFMWixDQWpCMEIsRUF3QjFCO0FBQ0VMLEVBQUFBLEtBQUssRUFBRSxjQURUO0FBRUVDLEVBQUFBLElBQUksRUFBRSxlQUZSO0FBR0VDLEVBQUFBLFFBQVEsRUFBRSxJQUhaO0FBSUVDLEVBQUFBLFlBQVksRUFBRSxLQUpoQjtBQUtFRSxFQUFBQSxRQUFRLEVBQUU7QUFMWixDQXhCMEIsS0ErQnZCYixtQkFBbUIsQ0FBQyxHQUFELENBQW5CLEVBL0JvQixFQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRXVpQmFzaWNUYWJsZUNvbHVtbiB9IGZyb20gJ0BlbGFzdGljL2V1aSc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VNUFRZX0RBVEEgPSAnLSc7XG5cbmNvbnN0IHJlbmRlclRpbWUgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG1vbWVudFRpbWUgPSBtb21lbnQodGltZSk7XG4gIGlmICh0aW1lICYmIG1vbWVudFRpbWUuaXNWYWxpZCgpKSByZXR1cm4gbW9tZW50VGltZS5mb3JtYXQoJ01NL0REL1lZIGg6bW0gQScpO1xuICByZXR1cm4gREVGQVVMVF9FTVBUWV9EQVRBO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRpY0NvbHVtbiA9IFtcbiAge1xuICAgIGZpZWxkOiAnc3RhcnRUaW1lJyxcbiAgICBuYW1lOiAnU3RhcnQgdGltZScsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgdHJ1bmNhdGVUZXh0OiBmYWxzZSxcbiAgICByZW5kZXI6IHJlbmRlclRpbWUsXG4gICAgZGF0YVR5cGU6ICdkYXRlJyxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZW5kVGltZScsXG4gICAgbmFtZTogJ0VuZCB0aW1lJyxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICB0cnVuY2F0ZVRleHQ6IGZhbHNlLFxuICAgIHJlbmRlcjogcmVuZGVyVGltZSxcbiAgICBkYXRhVHlwZTogJ2RhdGUnLFxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdjb25maWRlbmNlJyxcbiAgICBuYW1lOiAnRGF0YSBjb25maWRlbmNlJyxcbiAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICB0cnVuY2F0ZVRleHQ6IGZhbHNlLFxuICAgIGRhdGFUeXBlOiAnbnVtYmVyJyxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnYW5vbWFseUdyYWRlJyxcbiAgICBuYW1lOiAnQW5vbWFseSBncmFkZScsXG4gICAgc29ydGFibGU6IHRydWUsXG4gICAgdHJ1bmNhdGVUZXh0OiBmYWxzZSxcbiAgICBkYXRhVHlwZTogJ251bWJlcicsXG4gIH0sXG5dIGFzIEV1aUJhc2ljVGFibGVDb2x1bW48YW55PltdO1xuIl19