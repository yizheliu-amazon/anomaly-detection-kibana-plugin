function cov_16fp0bvsvn() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/liveAnomalyResults.ts";
  var hash = "9a17414fa3969aceddc91ff23dcb990299808262";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/liveAnomalyResults.ts",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 30
        },
        end: {
          line: 26,
          column: 56
        }
      },
      "1": {
        start: {
          line: 34,
          column: 53
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
          line: 63,
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
          line: 54,
          column: 7
        }
      },
      "5": {
        start: {
          line: 55,
          column: 76
        },
        end: {
          line: 59,
          column: 7
        }
      },
      "6": {
        start: {
          line: 65,
          column: 38
        },
        end: {
          line: 74,
          column: 2
        }
      },
      "7": {
        start: {
          line: 68,
          column: 17
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "8": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 73,
          column: 6
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
            line: 54,
            column: 7
          }
        },
        line: 49
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 55,
            column: 15
          },
          end: {
            line: 55,
            column: 16
          }
        },
        loc: {
          start: {
            line: 55,
            column: 76
          },
          end: {
            line: 59,
            column: 7
          }
        },
        line: 55
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 65,
            column: 38
          },
          end: {
            line: 65,
            column: 39
          }
        },
        loc: {
          start: {
            line: 68,
            column: 17
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 68
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 70,
            column: 11
          },
          end: {
            line: 70,
            column: 12
          }
        },
        loc: {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 73,
            column: 6
          }
        },
        line: 71
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
    hash: "9a17414fa3969aceddc91ff23dcb990299808262"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16fp0bvsvn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16fp0bvsvn();

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
import { APIAction, APIResponseAction, IHttpService } from '../middleware/types';
import handleActions from '../utils/handleActions';
import { AD_NODE_API } from '../../../utils/constants';
import { DetectorResultsQueryParams } from '../../../server/models/types';
import { Anomaly } from '../../../server/models/interfaces';
const DETECTOR_LIVE_RESULTS = (cov_16fp0bvsvn().s[0]++, 'ad/DETECTOR_LIVE_RESULTS');
export interface Anomalies {
  requesting: boolean;
  totalLiveAnomalies: number;
  liveAnomalies: Anomaly[];
  errorMessage: string;
}
export const initialDetectorLiveResults: Anomalies = (cov_16fp0bvsvn().s[1]++, {
  requesting: false,
  errorMessage: '',
  totalLiveAnomalies: 0,
  liveAnomalies: []
});
const reducer = (cov_16fp0bvsvn().s[2]++, handleActions<Anomalies>({
  [DETECTOR_LIVE_RESULTS]: {
    REQUEST: (state: Anomalies): Anomalies => {
      cov_16fp0bvsvn().f[0]++;
      cov_16fp0bvsvn().s[3]++;
      return { ...state,
        requesting: true,
        errorMessage: ''
      };
    },
    SUCCESS: (state: Anomalies, action: APIResponseAction): Anomalies => {
      cov_16fp0bvsvn().f[1]++;
      cov_16fp0bvsvn().s[4]++;
      return { ...state,
        requesting: false,
        totalLiveAnomalies: action.result.data.response.totalAnomalies,
        liveAnomalies: action.result.data.response.results
      };
    },
    FAILURE: (state: Anomalies, action: APIResponseAction): Anomalies => {
      cov_16fp0bvsvn().f[2]++;
      cov_16fp0bvsvn().s[5]++;
      return { ...state,
        requesting: false,
        errorMessage: action.error.data.error
      };
    }
  }
}, initialDetectorLiveResults));
cov_16fp0bvsvn().s[6]++;
export const getDetectorLiveResults = (detectorId: string, queryParams: DetectorResultsQueryParams): APIAction => {
  cov_16fp0bvsvn().f[3]++;
  cov_16fp0bvsvn().s[7]++;
  return {
    type: DETECTOR_LIVE_RESULTS,
    request: (client: IHttpService) => {
      cov_16fp0bvsvn().f[4]++;
      cov_16fp0bvsvn().s[8]++;
      return client.get(`..${AD_NODE_API.DETECTOR}/${detectorId}/results`, {
        params: queryParams
      });
    }
  };
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmVBbm9tYWx5UmVzdWx0cy50cyJdLCJuYW1lcyI6WyJBUElBY3Rpb24iLCJBUElSZXNwb25zZUFjdGlvbiIsIklIdHRwU2VydmljZSIsImhhbmRsZUFjdGlvbnMiLCJBRF9OT0RFX0FQSSIsIkRldGVjdG9yUmVzdWx0c1F1ZXJ5UGFyYW1zIiwiQW5vbWFseSIsIkRFVEVDVE9SX0xJVkVfUkVTVUxUUyIsIkFub21hbGllcyIsInJlcXVlc3RpbmciLCJ0b3RhbExpdmVBbm9tYWxpZXMiLCJsaXZlQW5vbWFsaWVzIiwiZXJyb3JNZXNzYWdlIiwiaW5pdGlhbERldGVjdG9yTGl2ZVJlc3VsdHMiLCJyZWR1Y2VyIiwiUkVRVUVTVCIsInN0YXRlIiwiU1VDQ0VTUyIsImFjdGlvbiIsInJlc3VsdCIsImRhdGEiLCJyZXNwb25zZSIsInRvdGFsQW5vbWFsaWVzIiwicmVzdWx0cyIsIkZBSUxVUkUiLCJlcnJvciIsImdldERldGVjdG9yTGl2ZVJlc3VsdHMiLCJkZXRlY3RvcklkIiwicXVlcnlQYXJhbXMiLCJ0eXBlIiwicmVxdWVzdCIsImNsaWVudCIsImdldCIsIkRFVEVDVE9SIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLFNBQ0VBLFNBREYsRUFFRUMsaUJBRkYsRUFHRUMsWUFIRixRQUlPLHFCQUpQO0FBS0EsT0FBT0MsYUFBUCxNQUEwQix3QkFBMUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLDBCQUE1QjtBQUNBLFNBQVNDLDBCQUFULFFBQTJDLDhCQUEzQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsbUNBQXhCO0FBRUEsTUFBTUMscUJBQXFCLDZCQUFHLDBCQUFILENBQTNCO0FBRUEsT0FBTyxVQUFVQyxTQUFWLENBQW9CO0FBQ3pCQyxFQUFBQSxVQUFVLEVBQUUsT0FBRjtBQUNWQyxFQUFBQSxrQkFBa0IsRUFBRSxNQUFGO0FBQ2xCQyxFQUFBQSxhQUFhLEVBQUVMLE9BQU8sRUFBVDtBQUNiTSxFQUFBQSxZQUFZLEVBQUUsTUFBRjtBQUphO0FBTTNCLE9BQU8sTUFBTUMsMEJBQTBCLEVBQUVMLFNBQVMsNkJBQUc7QUFDbkRDLEVBQUFBLFVBQVUsRUFBRSxLQUR1QztBQUVuREcsRUFBQUEsWUFBWSxFQUFFLEVBRnFDO0FBR25ERixFQUFBQSxrQkFBa0IsRUFBRSxDQUgrQjtBQUluREMsRUFBQUEsYUFBYSxFQUFFO0FBSm9DLENBQUgsQ0FBM0M7QUFPUCxNQUFNRyxPQUFPLDZCQUFHWCxhQUFhLENBQUNLLFNBQUQsRUFDM0I7QUFDRSxHQUFDRCxxQkFBRCxHQUF5QjtBQUN2QlEsSUFBQUEsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRVIsU0FBUixDQUFrQixFQUFFQSxTQUFwQixJQUFrQztBQUFBO0FBQUE7QUFBQSxlQUN6QyxHQUFHUSxLQURzQztBQUV6Q1AsUUFBQUEsVUFBVSxFQUFFLElBRjZCO0FBR3pDRyxRQUFBQSxZQUFZLEVBQUU7QUFIMkI7QUFJMUMsS0FMc0I7QUFNdkJLLElBQUFBLE9BQU8sRUFBRSxDQUFDRCxLQUFLLEVBQUVSLFNBQVIsRUFBbUJVLE1BQU0sRUFBRWpCLGlCQUEzQixDQUE2QyxFQUFFTyxTQUEvQyxJQUE2RDtBQUFBO0FBQUE7QUFBQSxlQUNwRSxHQUFHUSxLQURpRTtBQUVwRVAsUUFBQUEsVUFBVSxFQUFFLEtBRndEO0FBR3BFQyxRQUFBQSxrQkFBa0IsRUFBRVEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJDLFFBQW5CLENBQTRCQyxjQUhvQjtBQUlwRVgsUUFBQUEsYUFBYSxFQUFFTyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsUUFBbkIsQ0FBNEJFO0FBSnlCO0FBS3JFLEtBWHNCO0FBWXZCQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQ1IsS0FBSyxFQUFFUixTQUFSLEVBQW1CVSxNQUFNLEVBQUVqQixpQkFBM0IsQ0FBNkMsRUFBRU8sU0FBL0MsSUFBNkQ7QUFBQTtBQUFBO0FBQUEsZUFDcEUsR0FBR1EsS0FEaUU7QUFFcEVQLFFBQUFBLFVBQVUsRUFBRSxLQUZ3RDtBQUdwRUcsUUFBQUEsWUFBWSxFQUFFTSxNQUFNLENBQUNPLEtBQVAsQ0FBYUwsSUFBYixDQUFrQks7QUFIb0M7QUFJckU7QUFoQnNCO0FBRDNCLENBRDJCLEVBcUIzQlosMEJBckIyQixDQUFoQixDQUFiOztBQXdCQSxPQUFPLE1BQU1hLHNCQUFzQixHQUFHLENBQ3BDQyxVQUFVLEVBQUUsTUFEd0IsRUFFcENDLFdBQVcsRUFBRXZCLDBCQUZ1QixDQUdyQyxFQUFFTCxTQUhtQyxJQUdyQjtBQUFBO0FBQUE7QUFBQTtBQUNmNkIsSUFBQUEsSUFBSSxFQUFFdEIscUJBRFM7QUFFZnVCLElBQUFBLE9BQU8sRUFBRSxDQUFDQyxNQUFNLEVBQUU3QixZQUFULEtBQ1A7QUFBQTtBQUFBO0FBQUEsYUFBQTZCLE1BQU0sQ0FBQ0MsR0FBUCxDQUFZLEtBQUk1QixXQUFXLENBQUM2QixRQUFTLElBQUdOLFVBQVcsVUFBbkQsRUFBOEQ7QUFDNURPLFFBQUFBLE1BQU0sRUFBRU47QUFEb0QsT0FBOUQ7QUFFRTtBQUxXO0FBTWhCLENBVE07QUFXUCxlQUFlZCxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgQVBJQWN0aW9uLFxuICBBUElSZXNwb25zZUFjdGlvbixcbiAgSUh0dHBTZXJ2aWNlLFxufSBmcm9tICcuLi9taWRkbGV3YXJlL3R5cGVzJztcbmltcG9ydCBoYW5kbGVBY3Rpb25zIGZyb20gJy4uL3V0aWxzL2hhbmRsZUFjdGlvbnMnO1xuaW1wb3J0IHsgQURfTk9ERV9BUEkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgRGV0ZWN0b3JSZXN1bHRzUXVlcnlQYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL3R5cGVzJztcbmltcG9ydCB7IEFub21hbHkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2ludGVyZmFjZXMnO1xuXG5jb25zdCBERVRFQ1RPUl9MSVZFX1JFU1VMVFMgPSAnYWQvREVURUNUT1JfTElWRV9SRVNVTFRTJztcblxuZXhwb3J0IGludGVyZmFjZSBBbm9tYWxpZXMge1xuICByZXF1ZXN0aW5nOiBib29sZWFuO1xuICB0b3RhbExpdmVBbm9tYWxpZXM6IG51bWJlcjtcbiAgbGl2ZUFub21hbGllczogQW5vbWFseVtdO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBpbml0aWFsRGV0ZWN0b3JMaXZlUmVzdWx0czogQW5vbWFsaWVzID0ge1xuICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgdG90YWxMaXZlQW5vbWFsaWVzOiAwLFxuICBsaXZlQW5vbWFsaWVzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zPEFub21hbGllcz4oXG4gIHtcbiAgICBbREVURUNUT1JfTElWRV9SRVNVTFRTXToge1xuICAgICAgUkVRVUVTVDogKHN0YXRlOiBBbm9tYWxpZXMpOiBBbm9tYWxpZXMgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlcXVlc3Rpbmc6IHRydWUsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICB9KSxcbiAgICAgIFNVQ0NFU1M6IChzdGF0ZTogQW5vbWFsaWVzLCBhY3Rpb246IEFQSVJlc3BvbnNlQWN0aW9uKTogQW5vbWFsaWVzID0+ICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgdG90YWxMaXZlQW5vbWFsaWVzOiBhY3Rpb24ucmVzdWx0LmRhdGEucmVzcG9uc2UudG90YWxBbm9tYWxpZXMsXG4gICAgICAgIGxpdmVBbm9tYWxpZXM6IGFjdGlvbi5yZXN1bHQuZGF0YS5yZXNwb25zZS5yZXN1bHRzLFxuICAgICAgfSksXG4gICAgICBGQUlMVVJFOiAoc3RhdGU6IEFub21hbGllcywgYWN0aW9uOiBBUElSZXNwb25zZUFjdGlvbik6IEFub21hbGllcyA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yLmRhdGEuZXJyb3IsXG4gICAgICB9KSxcbiAgICB9LFxuICB9LFxuICBpbml0aWFsRGV0ZWN0b3JMaXZlUmVzdWx0c1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldERldGVjdG9yTGl2ZVJlc3VsdHMgPSAoXG4gIGRldGVjdG9ySWQ6IHN0cmluZyxcbiAgcXVlcnlQYXJhbXM6IERldGVjdG9yUmVzdWx0c1F1ZXJ5UGFyYW1zXG4pOiBBUElBY3Rpb24gPT4gKHtcbiAgdHlwZTogREVURUNUT1JfTElWRV9SRVNVTFRTLFxuICByZXF1ZXN0OiAoY2xpZW50OiBJSHR0cFNlcnZpY2UpID0+XG4gICAgY2xpZW50LmdldChgLi4ke0FEX05PREVfQVBJLkRFVEVDVE9SfS8ke2RldGVjdG9ySWR9L3Jlc3VsdHNgLCB7XG4gICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1zLFxuICAgIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXX0=