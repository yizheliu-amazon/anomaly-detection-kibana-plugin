function cov_9e6d4srwh() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/main/hooks/useHideSideNavBar.ts";
  var hash = "990a6f4b1e883d664e42d5b3f9aa4e4f21d4bbe9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/main/hooks/useHideSideNavBar.ts",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 33
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 21
        },
        end: {
          line: 22,
          column: 34
        }
      },
      "2": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 31,
          column: 6
        }
      },
      "3": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 76
        }
      },
      "4": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 28,
          column: 13
        }
      },
      "5": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 27,
          column: 90
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 34
          }
        },
        loc: {
          start: {
            line: 21,
            column: 81
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        },
        loc: {
          start: {
            line: 24,
            column: 14
          },
          end: {
            line: 29,
            column: 9
          }
        },
        line: 24
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 19
          },
          end: {
            line: 26,
            column: 20
          }
        },
        loc: {
          start: {
            line: 26,
            column: 25
          },
          end: {
            line: 28,
            column: 13
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "990a6f4b1e883d664e42d5b3f9aa4e4f21d4bbe9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9e6d4srwh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_9e6d4srwh();

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
import { useEffect } from 'react';
import { SET_HIDE_SIDE_NAV_BAR_STATE } from '../../../redux/reducers/adAppReducer';
import { useDispatch } from 'react-redux'; //A hook which hide side nav bar

cov_9e6d4srwh().s[0]++;
export const useHideSideNavBar = (hidden: boolean, hiddenAfterClear: boolean) => {
  cov_9e6d4srwh().f[0]++;
  const dispatch = (cov_9e6d4srwh().s[1]++, useDispatch());
  cov_9e6d4srwh().s[2]++;
  useEffect(() => {
    cov_9e6d4srwh().f[1]++;
    cov_9e6d4srwh().s[3]++;
    dispatch({
      type: SET_HIDE_SIDE_NAV_BAR_STATE,
      payload: hidden
    });
    cov_9e6d4srwh().s[4]++;
    return () => {
      cov_9e6d4srwh().f[2]++;
      cov_9e6d4srwh().s[5]++;
      dispatch({
        type: SET_HIDE_SIDE_NAV_BAR_STATE,
        payload: hiddenAfterClear
      });
    };
  }, []);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZUhpZGVTaWRlTmF2QmFyLnRzIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNFVF9ISURFX1NJREVfTkFWX0JBUl9TVEFURSIsInVzZURpc3BhdGNoIiwidXNlSGlkZVNpZGVOYXZCYXIiLCJoaWRkZW4iLCJoaWRkZW5BZnRlckNsZWFyIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU0EsU0FBVCxRQUEwQixPQUExQjtBQUNBLFNBQVNDLDJCQUFULFFBQTRDLHNDQUE1QztBQUNBLFNBQVNDLFdBQVQsUUFBNEIsYUFBNUIsQyxDQUVBOzs7QUFDQSxPQUFPLE1BQU1DLGlCQUFpQixHQUFHLENBQUNDLE1BQU0sRUFBRSxPQUFULEVBQWtCQyxnQkFBZ0IsRUFBRSxPQUFwQyxLQUFnRDtBQUFBO0FBQzdFLFFBQU1DLFFBQVEsNEJBQUdKLFdBQVcsRUFBZCxDQUFkO0FBRDZFO0FBRTdFRixFQUFBQSxTQUFTLENBQ0wsTUFBTTtBQUFBO0FBQUE7QUFDRk0sSUFBQUEsUUFBUSxDQUFDO0FBQUVDLE1BQUFBLElBQUksRUFBRU4sMkJBQVI7QUFBcUNPLE1BQUFBLE9BQU8sRUFBRUo7QUFBOUMsS0FBRCxDQUFSO0FBREU7QUFFRixXQUFPLE1BQU07QUFBQTtBQUFBO0FBQ1RFLE1BQUFBLFFBQVEsQ0FBQztBQUFFQyxRQUFBQSxJQUFJLEVBQUVOLDJCQUFSO0FBQXFDTyxRQUFBQSxPQUFPLEVBQUVIO0FBQTlDLE9BQUQsQ0FBUjtBQUNILEtBRkQ7QUFHSCxHQU5JLEVBT0wsRUFQSyxDQUFUO0FBU0gsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNFVF9ISURFX1NJREVfTkFWX0JBUl9TVEFURSB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2FkQXBwUmVkdWNlcic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy9BIGhvb2sgd2hpY2ggaGlkZSBzaWRlIG5hdiBiYXJcbmV4cG9ydCBjb25zdCB1c2VIaWRlU2lkZU5hdkJhciA9IChoaWRkZW46IGJvb2xlYW4sIGhpZGRlbkFmdGVyQ2xlYXI6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdXNlRWZmZWN0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9ISURFX1NJREVfTkFWX0JBUl9TVEFURSwgcGF5bG9hZDogaGlkZGVuIH0pXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX0hJREVfU0lERV9OQVZfQkFSX1NUQVRFLCBwYXlsb2FkOiBoaWRkZW5BZnRlckNsZWFyIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgKTtcbn07XG4iXX0=