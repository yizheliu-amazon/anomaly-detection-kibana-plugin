function cov_25uk2m1k9k() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorResults/hooks/useFetchMonitorInfo.ts";
  var hash = "eaac03c4a0f50625d745eb1e871255af6f61beb0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorResults/hooks/useFetchMonitorInfo.ts",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 35
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "1": {
        start: {
          line: 27,
          column: 19
        },
        end: {
          line: 27,
          column: 32
        }
      },
      "2": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 33,
          column: 9
        }
      },
      "3": {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 31,
          column: 5
        }
      },
      "4": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 39
        }
      },
      "5": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 22
        }
      },
      "6": {
        start: {
          line: 35,
          column: 19
        },
        end: {
          line: 35,
          column: 76
        }
      },
      "7": {
        start: {
          line: 35,
          column: 52
        },
        end: {
          line: 35,
          column: 75
        }
      },
      "8": {
        start: {
          line: 36,
          column: 18
        },
        end: {
          line: 36,
          column: 50
        }
      },
      "9": {
        start: {
          line: 37,
          column: 19
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "10": {
        start: {
          line: 38,
          column: 25
        },
        end: {
          line: 38,
          column: 52
        }
      },
      "11": {
        start: {
          line: 40,
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
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 35
          },
          end: {
            line: 24,
            column: 36
          }
        },
        loc: {
          start: {
            line: 26,
            column: 67
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 28,
            column: 13
          }
        },
        loc: {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 28
          },
          end: {
            line: 29,
            column: 29
          }
        },
        loc: {
          start: {
            line: 29,
            column: 40
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 29
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 35,
            column: 31
          },
          end: {
            line: 35,
            column: 32
          }
        },
        loc: {
          start: {
            line: 35,
            column: 52
          },
          end: {
            line: 35,
            column: 75
          }
        },
        line: 35
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        loc: {
          start: {
            line: 38,
            column: 25
          },
          end: {
            line: 38,
            column: 52
          }
        },
        line: 38
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 41
          }
        }, {
          start: {
            line: 42,
            column: 45
          },
          end: {
            line: 42,
            column: 61
          }
        }],
        line: 42
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "eaac03c4a0f50625d745eb1e871255af6f61beb0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25uk2m1k9k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25uk2m1k9k();

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
import { get, isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Monitor } from '../../../models/interfaces';
import { AppState } from '../../../redux/reducers';
import { searchMonitors } from '../../../redux/reducers/alerting'; //A hook which gets AD monitor.

cov_25uk2m1k9k().s[0]++;
export const useFetchMonitorInfo = (detectorId: string): {
  monitor: Monitor | undefined;
  fetchMonitorError: boolean;
} => {
  cov_25uk2m1k9k().f[0]++;
  const dispatch = (cov_25uk2m1k9k().s[1]++, useDispatch());
  cov_25uk2m1k9k().s[2]++;
  useEffect(() => {
    cov_25uk2m1k9k().f[1]++;
    cov_25uk2m1k9k().s[3]++;

    const fetchAdMonitors = async () => {
      cov_25uk2m1k9k().f[2]++;
      cov_25uk2m1k9k().s[4]++;
      await dispatch(searchMonitors());
    };

    cov_25uk2m1k9k().s[5]++;
    fetchAdMonitors();
  }, []);
  const monitors = (cov_25uk2m1k9k().s[6]++, useSelector((state: AppState) => {
    cov_25uk2m1k9k().f[3]++;
    cov_25uk2m1k9k().s[7]++;
    return state.alerting.monitors;
  }));
  const monitor = (cov_25uk2m1k9k().s[8]++, get(monitors, `${detectorId}.0`));
  const hasError = (cov_25uk2m1k9k().s[9]++, useSelector((state: AppState) => {
    cov_25uk2m1k9k().f[4]++;
    cov_25uk2m1k9k().s[10]++;
    return state.alerting.errorMessage;
  }));
  cov_25uk2m1k9k().s[11]++;
  return {
    monitor: monitor,
    fetchMonitorError: (cov_25uk2m1k9k().b[0][0]++, !isEmpty(hasError)) && (cov_25uk2m1k9k().b[0][1]++, isEmpty(monitor))
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZUZldGNoTW9uaXRvckluZm8udHMiXSwibmFtZXMiOlsiZ2V0IiwiaXNFbXB0eSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJNb25pdG9yIiwiQXBwU3RhdGUiLCJzZWFyY2hNb25pdG9ycyIsInVzZUZldGNoTW9uaXRvckluZm8iLCJkZXRlY3RvcklkIiwibW9uaXRvciIsImZldGNoTW9uaXRvckVycm9yIiwiZGlzcGF0Y2giLCJmZXRjaEFkTW9uaXRvcnMiLCJtb25pdG9ycyIsInN0YXRlIiwiYWxlcnRpbmciLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTQSxHQUFULEVBQWNDLE9BQWQsUUFBNkIsUUFBN0I7QUFDQSxTQUFTQyxTQUFULFFBQTBCLE9BQTFCO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsV0FBdEIsUUFBeUMsYUFBekM7QUFDQSxTQUFTQyxPQUFULFFBQXdCLDRCQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIseUJBQXpCO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixrQ0FBL0IsQyxDQUVBOzs7QUFDQSxPQUFPLE1BQU1DLG1CQUFtQixHQUFHLENBQ2pDQyxVQUFVLEVBQUUsTUFEcUIsQ0FFbEMsRUFBRTtBQUFFQyxFQUFBQSxPQUFPLEVBQUVMLE9BQU8sR0FBRyxTQUFaO0FBQXVCTSxFQUFBQSxpQkFBaUIsRUFBRSxPQUFGO0FBQWpELENBRmdDLElBRWdDO0FBQUE7QUFDakUsUUFBTUMsUUFBUSw2QkFBR1QsV0FBVyxFQUFkLENBQWQ7QUFEaUU7QUFFakVELEVBQUFBLFNBQVMsQ0FBQyxNQUFNO0FBQUE7QUFBQTs7QUFDZCxVQUFNVyxlQUFlLEdBQUcsWUFBWTtBQUFBO0FBQUE7QUFDbEMsWUFBTUQsUUFBUSxDQUFDTCxjQUFjLEVBQWYsQ0FBZDtBQUNELEtBRkQ7O0FBRGM7QUFJZE0sSUFBQUEsZUFBZTtBQUNoQixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0EsUUFBTUMsUUFBUSw2QkFBR1YsV0FBVyxDQUFDLENBQUNXLEtBQUssRUFBRVQsUUFBUixLQUFxQjtBQUFBO0FBQUE7QUFBQSxXQUFBUyxLQUFLLENBQUNDLFFBQU4sQ0FBZUYsUUFBZjtBQUF1QixHQUE3QyxDQUFkLENBQWQ7QUFDQSxRQUFNSixPQUFPLDZCQUFHVixHQUFHLENBQUNjLFFBQUQsRUFBWSxHQUFFTCxVQUFXLElBQXpCLENBQU4sQ0FBYjtBQUNBLFFBQU1RLFFBQVEsNkJBQUdiLFdBQVcsQ0FDMUIsQ0FBQ1csS0FBSyxFQUFFVCxRQUFSLEtBQXFCO0FBQUE7QUFBQTtBQUFBLFdBQUFTLEtBQUssQ0FBQ0MsUUFBTixDQUFlRSxZQUFmO0FBQTJCLEdBRHRCLENBQWQsQ0FBZDtBQVhpRTtBQWNqRSxTQUFPO0FBQ0xSLElBQUFBLE9BQU8sRUFBRUEsT0FESjtBQUVMQyxJQUFBQSxpQkFBaUIsRUFBRSw4QkFBQ1YsT0FBTyxDQUFDZ0IsUUFBRCxDQUFSLGtDQUFzQmhCLE9BQU8sQ0FBQ1MsT0FBRCxDQUE3QjtBQUZkLEdBQVA7QUFJRCxDQXBCTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldCwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBNb25pdG9yIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBzZWFyY2hNb25pdG9ycyB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FsZXJ0aW5nJztcblxuLy9BIGhvb2sgd2hpY2ggZ2V0cyBBRCBtb25pdG9yLlxuZXhwb3J0IGNvbnN0IHVzZUZldGNoTW9uaXRvckluZm8gPSAoXG4gIGRldGVjdG9ySWQ6IHN0cmluZ1xuKTogeyBtb25pdG9yOiBNb25pdG9yIHwgdW5kZWZpbmVkOyBmZXRjaE1vbml0b3JFcnJvcjogYm9vbGVhbiB9ID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQWRNb25pdG9ycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHNlYXJjaE1vbml0b3JzKCkpO1xuICAgIH07XG4gICAgZmV0Y2hBZE1vbml0b3JzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBtb25pdG9ycyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmFsZXJ0aW5nLm1vbml0b3JzKTtcbiAgY29uc3QgbW9uaXRvciA9IGdldChtb25pdG9ycywgYCR7ZGV0ZWN0b3JJZH0uMGApO1xuICBjb25zdCBoYXNFcnJvciA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmFsZXJ0aW5nLmVycm9yTWVzc2FnZVxuICApO1xuICByZXR1cm4ge1xuICAgIG1vbml0b3I6IG1vbml0b3IsXG4gICAgZmV0Y2hNb25pdG9yRXJyb3I6ICFpc0VtcHR5KGhhc0Vycm9yKSAmJiBpc0VtcHR5KG1vbml0b3IpLFxuICB9O1xufTtcbiJdfQ==