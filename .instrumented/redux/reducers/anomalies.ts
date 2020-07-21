function cov_13w9a6sunj() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/anomalies.ts";
  var hash = "8d5895e43eebce576823bc780565e693bdafcba4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/anomalies.ts",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 25
        },
        end: {
          line: 25,
          column: 46
        }
      },
      "1": {
        start: {
          line: 32,
          column: 48
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "2": {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "3": {
        start: {
          line: 44,
          column: 49
        },
        end: {
          line: 48,
          column: 7
        }
      },
      "4": {
        start: {
          line: 49,
          column: 76
        },
        end: {
          line: 53,
          column: 7
        }
      },
      "5": {
        start: {
          line: 54,
          column: 76
        },
        end: {
          line: 58,
          column: 7
        }
      },
      "6": {
        start: {
          line: 64,
          column: 31
        },
        end: {
          line: 71,
          column: 2
        }
      },
      "7": {
        start: {
          line: 67,
          column: 17
        },
        end: {
          line: 71,
          column: 1
        }
      },
      "8": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 79
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 44,
            column: 15
          },
          end: {
            line: 44,
            column: 16
          }
        },
        loc: {
          start: {
            line: 44,
            column: 49
          },
          end: {
            line: 48,
            column: 7
          }
        },
        line: 44
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 49,
            column: 15
          },
          end: {
            line: 49,
            column: 16
          }
        },
        loc: {
          start: {
            line: 49,
            column: 76
          },
          end: {
            line: 53,
            column: 7
          }
        },
        line: 49
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 54,
            column: 15
          },
          end: {
            line: 54,
            column: 16
          }
        },
        loc: {
          start: {
            line: 54,
            column: 76
          },
          end: {
            line: 58,
            column: 7
          }
        },
        line: 54
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 64,
            column: 31
          },
          end: {
            line: 64,
            column: 32
          }
        },
        loc: {
          start: {
            line: 67,
            column: 17
          },
          end: {
            line: 71,
            column: 1
          }
        },
        line: 67
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 69,
            column: 11
          },
          end: {
            line: 69,
            column: 12
          }
        },
        loc: {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 70,
            column: 79
          }
        },
        line: 70
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8d5895e43eebce576823bc780565e693bdafcba4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13w9a6sunj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_13w9a6sunj();

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
import { APIAction, APIResponseAction, IHttpService } from '../middleware/types';
import handleActions from '../utils/handleActions';
import { AD_NODE_API } from '../../../utils/constants';
import { Anomalies } from '../../models/interfaces';
const PREVIEW_DETECTOR = (cov_13w9a6sunj().s[0]++, 'ad/PREVIEW_DETECTOR');
export interface Anomalies {
  requesting: boolean;
  anomaliesResult: Anomalies;
  errorMessage: string;
}
export const initialDetectorsState: Anomalies = (cov_13w9a6sunj().s[1]++, {
  requesting: false,
  anomaliesResult: {
    anomalies: [],
    featureData: {}
  },
  errorMessage: ''
});
const reducer = (cov_13w9a6sunj().s[2]++, handleActions<Anomalies>({
  [PREVIEW_DETECTOR]: {
    REQUEST: (state: Anomalies): Anomalies => {
      cov_13w9a6sunj().f[0]++;
      cov_13w9a6sunj().s[3]++;
      return { ...state,
        requesting: true,
        errorMessage: ''
      };
    },
    SUCCESS: (state: Anomalies, action: APIResponseAction): Anomalies => {
      cov_13w9a6sunj().f[1]++;
      cov_13w9a6sunj().s[4]++;
      return { ...state,
        requesting: false,
        anomaliesResult: action.result.data.response
      };
    },
    FAILURE: (state: Anomalies, action: APIResponseAction): Anomalies => {
      cov_13w9a6sunj().f[2]++;
      cov_13w9a6sunj().s[5]++;
      return { ...state,
        requesting: false,
        errorMessage: action.error
      };
    }
  }
}, initialDetectorsState));
cov_13w9a6sunj().s[6]++;
export const previewDetector = (detectorId: string, requestBody: any): APIAction => {
  cov_13w9a6sunj().f[3]++;
  cov_13w9a6sunj().s[7]++;
  return {
    type: PREVIEW_DETECTOR,
    request: (client: IHttpService) => {
      cov_13w9a6sunj().f[4]++;
      cov_13w9a6sunj().s[8]++;
      return client.post(`..${AD_NODE_API.DETECTOR}/${detectorId}/preview`, requestBody);
    }
  };
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub21hbGllcy50cyJdLCJuYW1lcyI6WyJBUElBY3Rpb24iLCJBUElSZXNwb25zZUFjdGlvbiIsIklIdHRwU2VydmljZSIsImhhbmRsZUFjdGlvbnMiLCJBRF9OT0RFX0FQSSIsIkFub21hbGllcyIsIlBSRVZJRVdfREVURUNUT1IiLCJyZXF1ZXN0aW5nIiwiYW5vbWFsaWVzUmVzdWx0IiwiZXJyb3JNZXNzYWdlIiwiaW5pdGlhbERldGVjdG9yc1N0YXRlIiwiYW5vbWFsaWVzIiwiZmVhdHVyZURhdGEiLCJyZWR1Y2VyIiwiUkVRVUVTVCIsInN0YXRlIiwiU1VDQ0VTUyIsImFjdGlvbiIsInJlc3VsdCIsImRhdGEiLCJyZXNwb25zZSIsIkZBSUxVUkUiLCJlcnJvciIsInByZXZpZXdEZXRlY3RvciIsImRldGVjdG9ySWQiLCJyZXF1ZXN0Qm9keSIsInR5cGUiLCJyZXF1ZXN0IiwiY2xpZW50IiwicG9zdCIsIkRFVEVDVE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLFNBQ0VBLFNBREYsRUFFRUMsaUJBRkYsRUFHRUMsWUFIRixRQUlPLHFCQUpQO0FBS0EsT0FBT0MsYUFBUCxNQUEwQix3QkFBMUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLDBCQUE1QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIseUJBQTFCO0FBRUEsTUFBTUMsZ0JBQWdCLDZCQUFHLHFCQUFILENBQXRCO0FBRUEsT0FBTyxVQUFVRCxTQUFWLENBQW9CO0FBQ3pCRSxFQUFBQSxVQUFVLEVBQUUsT0FBRjtBQUNWQyxFQUFBQSxlQUFlLEVBQUVILFNBQUY7QUFDZkksRUFBQUEsWUFBWSxFQUFFLE1BQUY7QUFIYTtBQUszQixPQUFPLE1BQU1DLHFCQUFxQixFQUFFTCxTQUFTLDZCQUFHO0FBQzlDRSxFQUFBQSxVQUFVLEVBQUUsS0FEa0M7QUFFOUNDLEVBQUFBLGVBQWUsRUFBRTtBQUNmRyxJQUFBQSxTQUFTLEVBQUUsRUFESTtBQUVmQyxJQUFBQSxXQUFXLEVBQUU7QUFGRSxHQUY2QjtBQU05Q0gsRUFBQUEsWUFBWSxFQUFFO0FBTmdDLENBQUgsQ0FBdEM7QUFTUCxNQUFNSSxPQUFPLDZCQUFHVixhQUFhLENBQUNFLFNBQUQsRUFDM0I7QUFDRSxHQUFDQyxnQkFBRCxHQUFvQjtBQUNsQlEsSUFBQUEsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRVYsU0FBUixDQUFrQixFQUFFQSxTQUFwQixJQUFrQztBQUFBO0FBQUE7QUFBQSxlQUN6QyxHQUFHVSxLQURzQztBQUV6Q1IsUUFBQUEsVUFBVSxFQUFFLElBRjZCO0FBR3pDRSxRQUFBQSxZQUFZLEVBQUU7QUFIMkI7QUFJMUMsS0FMaUI7QUFNbEJPLElBQUFBLE9BQU8sRUFBRSxDQUFDRCxLQUFLLEVBQUVWLFNBQVIsRUFBbUJZLE1BQU0sRUFBRWhCLGlCQUEzQixDQUE2QyxFQUFFSSxTQUEvQyxJQUE2RDtBQUFBO0FBQUE7QUFBQSxlQUNwRSxHQUFHVSxLQURpRTtBQUVwRVIsUUFBQUEsVUFBVSxFQUFFLEtBRndEO0FBR3BFQyxRQUFBQSxlQUFlLEVBQUVTLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQztBQUhnQztBQUlyRSxLQVZpQjtBQVdsQkMsSUFBQUEsT0FBTyxFQUFFLENBQUNOLEtBQUssRUFBRVYsU0FBUixFQUFtQlksTUFBTSxFQUFFaEIsaUJBQTNCLENBQTZDLEVBQUVJLFNBQS9DLElBQTZEO0FBQUE7QUFBQTtBQUFBLGVBQ3BFLEdBQUdVLEtBRGlFO0FBRXBFUixRQUFBQSxVQUFVLEVBQUUsS0FGd0Q7QUFHcEVFLFFBQUFBLFlBQVksRUFBRVEsTUFBTSxDQUFDSztBQUgrQztBQUlyRTtBQWZpQjtBQUR0QixDQUQyQixFQW9CM0JaLHFCQXBCMkIsQ0FBaEIsQ0FBYjs7QUF1QkEsT0FBTyxNQUFNYSxlQUFlLEdBQUcsQ0FDN0JDLFVBQVUsRUFBRSxNQURpQixFQUU3QkMsV0FBVyxFQUFFLEdBRmdCLENBRzlCLEVBQUV6QixTQUg0QixJQUdkO0FBQUE7QUFBQTtBQUFBO0FBQ2YwQixJQUFBQSxJQUFJLEVBQUVwQixnQkFEUztBQUVmcUIsSUFBQUEsT0FBTyxFQUFFLENBQUNDLE1BQU0sRUFBRTFCLFlBQVQsS0FDUDtBQUFBO0FBQUE7QUFBQSxhQUFBMEIsTUFBTSxDQUFDQyxJQUFQLENBQWEsS0FBSXpCLFdBQVcsQ0FBQzBCLFFBQVMsSUFBR04sVUFBVyxVQUFwRCxFQUErREMsV0FBL0Q7QUFBMkU7QUFIOUQ7QUFJaEIsQ0FQTTtBQVNQLGVBQWVaLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTkgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBBUElBY3Rpb24sXG4gIEFQSVJlc3BvbnNlQWN0aW9uLFxuICBJSHR0cFNlcnZpY2UsXG59IGZyb20gJy4uL21pZGRsZXdhcmUvdHlwZXMnO1xuaW1wb3J0IGhhbmRsZUFjdGlvbnMgZnJvbSAnLi4vdXRpbHMvaGFuZGxlQWN0aW9ucyc7XG5pbXBvcnQgeyBBRF9OT0RFX0FQSSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbm9tYWxpZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcyc7XG5cbmNvbnN0IFBSRVZJRVdfREVURUNUT1IgPSAnYWQvUFJFVklFV19ERVRFQ1RPUic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5vbWFsaWVzIHtcbiAgcmVxdWVzdGluZzogYm9vbGVhbjtcbiAgYW5vbWFsaWVzUmVzdWx0OiBBbm9tYWxpZXM7XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IGluaXRpYWxEZXRlY3RvcnNTdGF0ZTogQW5vbWFsaWVzID0ge1xuICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgYW5vbWFsaWVzUmVzdWx0OiB7XG4gICAgYW5vbWFsaWVzOiBbXSxcbiAgICBmZWF0dXJlRGF0YToge30sXG4gIH0sXG4gIGVycm9yTWVzc2FnZTogJycsXG59O1xuXG5jb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9uczxBbm9tYWxpZXM+KFxuICB7XG4gICAgW1BSRVZJRVdfREVURUNUT1JdOiB7XG4gICAgICBSRVFVRVNUOiAoc3RhdGU6IEFub21hbGllcyk6IEFub21hbGllcyA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVxdWVzdGluZzogdHJ1ZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIH0pLFxuICAgICAgU1VDQ0VTUzogKHN0YXRlOiBBbm9tYWxpZXMsIGFjdGlvbjogQVBJUmVzcG9uc2VBY3Rpb24pOiBBbm9tYWxpZXMgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBhbm9tYWxpZXNSZXN1bHQ6IGFjdGlvbi5yZXN1bHQuZGF0YS5yZXNwb25zZSxcbiAgICAgIH0pLFxuICAgICAgRkFJTFVSRTogKHN0YXRlOiBBbm9tYWxpZXMsIGFjdGlvbjogQVBJUmVzcG9uc2VBY3Rpb24pOiBBbm9tYWxpZXMgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvcixcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gIGluaXRpYWxEZXRlY3RvcnNTdGF0ZVxuKTtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdEZXRlY3RvciA9IChcbiAgZGV0ZWN0b3JJZDogc3RyaW5nLFxuICByZXF1ZXN0Qm9keTogYW55XG4pOiBBUElBY3Rpb24gPT4gKHtcbiAgdHlwZTogUFJFVklFV19ERVRFQ1RPUixcbiAgcmVxdWVzdDogKGNsaWVudDogSUh0dHBTZXJ2aWNlKSA9PlxuICAgIGNsaWVudC5wb3N0KGAuLiR7QURfTk9ERV9BUEkuREVURUNUT1J9LyR7ZGV0ZWN0b3JJZH0vcHJldmlld2AsIHJlcXVlc3RCb2R5KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl19