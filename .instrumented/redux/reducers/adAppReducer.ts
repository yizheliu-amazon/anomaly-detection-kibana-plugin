function cov_2gb2j0ynhr() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/adAppReducer.ts";
  var hash = "435840f31b04f6a6cc099f7c5f64f572d19bab34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/adAppReducer.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 43
        },
        end: {
          line: 19,
          column: 78
        }
      },
      "1": {
        start: {
          line: 21,
          column: 26
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 29,
          column: 16
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "3": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "4": {
        start: {
          line: 33,
          column: 26
        },
        end: {
          line: 33,
          column: 40
        }
      },
      "5": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 37,
          column: 8
        }
      },
      "6": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 17
          }
        },
        loc: {
          start: {
            line: 29,
            column: 63
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 29
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 29,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 29,
            column: 42
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }, {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 40,
            column: 19
          }
        }],
        line: 30
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
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "435840f31b04f6a6cc099f7c5f64f572d19bab34"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gb2j0ynhr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2gb2j0ynhr();

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
import { Action } from 'redux';
export const SET_HIDE_SIDE_NAV_BAR_STATE = (cov_2gb2j0ynhr().s[0]++, 'adApp/SET_HIDE_SIDE_NAV_BAR_STATE');
const initialAdAppState = (cov_2gb2j0ynhr().s[1]++, {
  hideSideNavBar: false
});
export interface AdAppState {
  hideSideNavBar: boolean;
}
cov_2gb2j0ynhr().s[2]++;

const reducer = (state = (cov_2gb2j0ynhr().b[0][0]++, initialAdAppState), action: Action) => {
  cov_2gb2j0ynhr().f[0]++;
  cov_2gb2j0ynhr().s[3]++;

  switch (action.type) {
    case SET_HIDE_SIDE_NAV_BAR_STATE:
      cov_2gb2j0ynhr().b[1][0]++;
      {
        // @ts-ignore
        const hideNaveBar = (cov_2gb2j0ynhr().s[4]++, action.payload);
        cov_2gb2j0ynhr().s[5]++;
        return { ...state,
          hideSideNavBar: hideNaveBar
        };
      }

    default:
      cov_2gb2j0ynhr().b[1][1]++;
      cov_2gb2j0ynhr().s[6]++;
      return state;
  }
};

export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkQXBwUmVkdWNlci50cyJdLCJuYW1lcyI6WyJBY3Rpb24iLCJTRVRfSElERV9TSURFX05BVl9CQVJfU1RBVEUiLCJpbml0aWFsQWRBcHBTdGF0ZSIsImhpZGVTaWRlTmF2QmFyIiwiQWRBcHBTdGF0ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJoaWRlTmF2ZUJhciIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTQSxNQUFULFFBQXVCLE9BQXZCO0FBR0EsT0FBTyxNQUFNQywyQkFBMkIsNkJBQUcsbUNBQUgsQ0FBakM7QUFFUCxNQUFNQyxpQkFBaUIsNkJBQUc7QUFDeEJDLEVBQUFBLGNBQWMsRUFBRTtBQURRLENBQUgsQ0FBdkI7QUFJQSxPQUFPLFVBQVVDLFVBQVYsQ0FBcUI7QUFDMUJELEVBQUFBLGNBQWMsRUFBRSxPQUFGO0FBRFk7OztBQUk1QixNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxnQ0FBR0osaUJBQUgsQ0FBTixFQUE0QkssTUFBTSxFQUFFUCxNQUFwQyxLQUErQztBQUFBO0FBQUE7O0FBQzdELFVBQVFPLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtQLDJCQUFMO0FBQUE7QUFBa0M7QUFDaEM7QUFDQSxjQUFNUSxXQUFXLDZCQUFHRixNQUFNLENBQUNHLE9BQVYsQ0FBakI7QUFGZ0M7QUFHaEMsZUFBTyxFQUNMLEdBQUdKLEtBREU7QUFFTEgsVUFBQUEsY0FBYyxFQUFFTTtBQUZYLFNBQVA7QUFJRDs7QUFDRDtBQUFBO0FBQUE7QUFDRSxhQUFPSCxLQUFQO0FBVko7QUFZRCxDQWJEOztBQWVBLGVBQWVELE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cblxuZXhwb3J0IGNvbnN0IFNFVF9ISURFX1NJREVfTkFWX0JBUl9TVEFURSA9ICdhZEFwcC9TRVRfSElERV9TSURFX05BVl9CQVJfU1RBVEUnO1xuXG5jb25zdCBpbml0aWFsQWRBcHBTdGF0ZSA9IHtcbiAgaGlkZVNpZGVOYXZCYXI6IGZhbHNlXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkQXBwU3RhdGUge1xuICBoaWRlU2lkZU5hdkJhcjogYm9vbGVhbjtcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxBZEFwcFN0YXRlLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfSElERV9TSURFX05BVl9CQVJfU1RBVEU6IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGhpZGVOYXZlQmFyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaGlkZVNpZGVOYXZCYXI6IGhpZGVOYXZlQmFyLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl19