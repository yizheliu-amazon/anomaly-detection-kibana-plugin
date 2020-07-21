function cov_29ahsvqrpb() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/anomalyResults.ts";
  var hash = "f90a08c5230e81893ce0299c2d5d867d79f5ddad";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/anomalyResults.ts",
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
          line: 34,
          column: 48
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "2": {
        start: {
          line: 42,
          column: 16
        },
        end: {
          line: 65,
          column: 1
        }
      },
      "3": {
        start: {
          line: 45,
          column: 49
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "4": {
        start: {
          line: 50,
          column: 76
        },
        end: {
          line: 56,
          column: 7
        }
      },
      "5": {
        start: {
          line: 57,
          column: 76
        },
        end: {
          line: 61,
          column: 7
        }
      },
      "6": {
        start: {
          line: 67,
          column: 34
        },
        end: {
          line: 76,
          column: 2
        }
      },
      "7": {
        start: {
          line: 70,
          column: 17
        },
        end: {
          line: 76,
          column: 1
        }
      },
      "8": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 75,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 45,
            column: 15
          },
          end: {
            line: 45,
            column: 16
          }
        },
        loc: {
          start: {
            line: 45,
            column: 49
          },
          end: {
            line: 49,
            column: 7
          }
        },
        line: 45
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 50,
            column: 15
          },
          end: {
            line: 50,
            column: 16
          }
        },
        loc: {
          start: {
            line: 50,
            column: 76
          },
          end: {
            line: 56,
            column: 7
          }
        },
        line: 50
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 57,
            column: 15
          },
          end: {
            line: 57,
            column: 16
          }
        },
        loc: {
          start: {
            line: 57,
            column: 76
          },
          end: {
            line: 61,
            column: 7
          }
        },
        line: 57
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 67,
            column: 34
          },
          end: {
            line: 67,
            column: 35
          }
        },
        loc: {
          start: {
            line: 70,
            column: 17
          },
          end: {
            line: 76,
            column: 1
          }
        },
        line: 70
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 72,
            column: 11
          },
          end: {
            line: 72,
            column: 12
          }
        },
        loc: {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 75,
            column: 6
          }
        },
        line: 73
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
    hash: "f90a08c5230e81893ce0299c2d5d867d79f5ddad"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29ahsvqrpb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_29ahsvqrpb();

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
import { AnomalyData } from '../../models/interfaces';
const DETECTOR_RESULTS = (cov_29ahsvqrpb().s[0]++, 'ad/DETECTOR_RESULTS');
export interface Anomalies {
  requesting: boolean;
  total: number;
  anomalies: AnomalyData[];
  errorMessage: string;
  featureData: any;
}
export const initialDetectorsState: Anomalies = (cov_29ahsvqrpb().s[1]++, {
  requesting: false,
  total: 0,
  anomalies: [],
  errorMessage: '',
  featureData: {}
});
const reducer = (cov_29ahsvqrpb().s[2]++, handleActions<Anomalies>({
  [DETECTOR_RESULTS]: {
    REQUEST: (state: Anomalies): Anomalies => {
      cov_29ahsvqrpb().f[0]++;
      cov_29ahsvqrpb().s[3]++;
      return { ...state,
        requesting: true,
        errorMessage: ''
      };
    },
    SUCCESS: (state: Anomalies, action: APIResponseAction): Anomalies => {
      cov_29ahsvqrpb().f[1]++;
      cov_29ahsvqrpb().s[4]++;
      return { ...state,
        requesting: false,
        total: action.result.data.response.totalAnomalies,
        anomalies: action.result.data.response.results,
        featureData: action.result.data.response.featureResults
      };
    },
    FAILURE: (state: Anomalies, action: APIResponseAction): Anomalies => {
      cov_29ahsvqrpb().f[2]++;
      cov_29ahsvqrpb().s[5]++;
      return { ...state,
        requesting: false,
        errorMessage: action.error.data.error
      };
    }
  }
}, initialDetectorsState));
cov_29ahsvqrpb().s[6]++;
export const getDetectorResults = (detectorId: string, queryParams: any): APIAction => {
  cov_29ahsvqrpb().f[3]++;
  cov_29ahsvqrpb().s[7]++;
  return {
    type: DETECTOR_RESULTS,
    request: (client: IHttpService) => {
      cov_29ahsvqrpb().f[4]++;
      cov_29ahsvqrpb().s[8]++;
      return client.get(`..${AD_NODE_API.DETECTOR}/${detectorId}/results`, {
        params: queryParams
      });
    }
  };
};
export default reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub21hbHlSZXN1bHRzLnRzIl0sIm5hbWVzIjpbIkFQSUFjdGlvbiIsIkFQSVJlc3BvbnNlQWN0aW9uIiwiSUh0dHBTZXJ2aWNlIiwiaGFuZGxlQWN0aW9ucyIsIkFEX05PREVfQVBJIiwiQW5vbWFseURhdGEiLCJERVRFQ1RPUl9SRVNVTFRTIiwiQW5vbWFsaWVzIiwicmVxdWVzdGluZyIsInRvdGFsIiwiYW5vbWFsaWVzIiwiZXJyb3JNZXNzYWdlIiwiZmVhdHVyZURhdGEiLCJpbml0aWFsRGV0ZWN0b3JzU3RhdGUiLCJyZWR1Y2VyIiwiUkVRVUVTVCIsInN0YXRlIiwiU1VDQ0VTUyIsImFjdGlvbiIsInJlc3VsdCIsImRhdGEiLCJyZXNwb25zZSIsInRvdGFsQW5vbWFsaWVzIiwicmVzdWx0cyIsImZlYXR1cmVSZXN1bHRzIiwiRkFJTFVSRSIsImVycm9yIiwiZ2V0RGV0ZWN0b3JSZXN1bHRzIiwiZGV0ZWN0b3JJZCIsInF1ZXJ5UGFyYW1zIiwidHlwZSIsInJlcXVlc3QiLCJjbGllbnQiLCJnZXQiLCJERVRFQ1RPUiIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUNFQSxTQURGLEVBRUVDLGlCQUZGLEVBR0VDLFlBSEYsUUFJTyxxQkFKUDtBQUtBLE9BQU9DLGFBQVAsTUFBMEIsd0JBQTFCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QiwwQkFBNUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLHlCQUE1QjtBQUVBLE1BQU1DLGdCQUFnQiw2QkFBRyxxQkFBSCxDQUF0QjtBQUVBLE9BQU8sVUFBVUMsU0FBVixDQUFvQjtBQUN6QkMsRUFBQUEsVUFBVSxFQUFFLE9BQUY7QUFDVkMsRUFBQUEsS0FBSyxFQUFFLE1BQUY7QUFDTEMsRUFBQUEsU0FBUyxFQUFFTCxXQUFXLEVBQWI7QUFDVE0sRUFBQUEsWUFBWSxFQUFFLE1BQUY7QUFDWkMsRUFBQUEsV0FBVyxFQUFFLEdBQUY7QUFMYztBQU8zQixPQUFPLE1BQU1DLHFCQUFxQixFQUFFTixTQUFTLDZCQUFHO0FBQzlDQyxFQUFBQSxVQUFVLEVBQUUsS0FEa0M7QUFFOUNDLEVBQUFBLEtBQUssRUFBRSxDQUZ1QztBQUc5Q0MsRUFBQUEsU0FBUyxFQUFFLEVBSG1DO0FBSTlDQyxFQUFBQSxZQUFZLEVBQUUsRUFKZ0M7QUFLOUNDLEVBQUFBLFdBQVcsRUFBRTtBQUxpQyxDQUFILENBQXRDO0FBUVAsTUFBTUUsT0FBTyw2QkFBR1gsYUFBYSxDQUFDSSxTQUFELEVBQzNCO0FBQ0UsR0FBQ0QsZ0JBQUQsR0FBb0I7QUFDbEJTLElBQUFBLE9BQU8sRUFBRSxDQUFDQyxLQUFLLEVBQUVULFNBQVIsQ0FBa0IsRUFBRUEsU0FBcEIsSUFBa0M7QUFBQTtBQUFBO0FBQUEsZUFDekMsR0FBR1MsS0FEc0M7QUFFekNSLFFBQUFBLFVBQVUsRUFBRSxJQUY2QjtBQUd6Q0csUUFBQUEsWUFBWSxFQUFFO0FBSDJCO0FBSTFDLEtBTGlCO0FBTWxCTSxJQUFBQSxPQUFPLEVBQUUsQ0FBQ0QsS0FBSyxFQUFFVCxTQUFSLEVBQW1CVyxNQUFNLEVBQUVqQixpQkFBM0IsQ0FBNkMsRUFBRU0sU0FBL0MsSUFBNkQ7QUFBQTtBQUFBO0FBQUEsZUFDcEUsR0FBR1MsS0FEaUU7QUFFcEVSLFFBQUFBLFVBQVUsRUFBRSxLQUZ3RDtBQUdwRUMsUUFBQUEsS0FBSyxFQUFFUyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsUUFBbkIsQ0FBNEJDLGNBSGlDO0FBSXBFWixRQUFBQSxTQUFTLEVBQUVRLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxRQUFuQixDQUE0QkUsT0FKNkI7QUFLcEVYLFFBQUFBLFdBQVcsRUFBRU0sTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJDLFFBQW5CLENBQTRCRztBQUwyQjtBQU1yRSxLQVppQjtBQWFsQkMsSUFBQUEsT0FBTyxFQUFFLENBQUNULEtBQUssRUFBRVQsU0FBUixFQUFtQlcsTUFBTSxFQUFFakIsaUJBQTNCLENBQTZDLEVBQUVNLFNBQS9DLElBQTZEO0FBQUE7QUFBQTtBQUFBLGVBQ3BFLEdBQUdTLEtBRGlFO0FBRXBFUixRQUFBQSxVQUFVLEVBQUUsS0FGd0Q7QUFHcEVHLFFBQUFBLFlBQVksRUFBRU8sTUFBTSxDQUFDUSxLQUFQLENBQWFOLElBQWIsQ0FBa0JNO0FBSG9DO0FBSXJFO0FBakJpQjtBQUR0QixDQUQyQixFQXNCM0JiLHFCQXRCMkIsQ0FBaEIsQ0FBYjs7QUF5QkEsT0FBTyxNQUFNYyxrQkFBa0IsR0FBRyxDQUNoQ0MsVUFBVSxFQUFFLE1BRG9CLEVBRWhDQyxXQUFXLEVBQUUsR0FGbUIsQ0FHakMsRUFBRTdCLFNBSCtCLElBR2pCO0FBQUE7QUFBQTtBQUFBO0FBQ2Y4QixJQUFBQSxJQUFJLEVBQUV4QixnQkFEUztBQUVmeUIsSUFBQUEsT0FBTyxFQUFFLENBQUNDLE1BQU0sRUFBRTlCLFlBQVQsS0FDUDtBQUFBO0FBQUE7QUFBQSxhQUFBOEIsTUFBTSxDQUFDQyxHQUFQLENBQVksS0FBSTdCLFdBQVcsQ0FBQzhCLFFBQVMsSUFBR04sVUFBVyxVQUFuRCxFQUE4RDtBQUM1RE8sUUFBQUEsTUFBTSxFQUFFTjtBQURvRCxPQUE5RDtBQUVFO0FBTFc7QUFNaEIsQ0FUTTtBQVdQLGVBQWVmLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTkgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBBUElBY3Rpb24sXG4gIEFQSVJlc3BvbnNlQWN0aW9uLFxuICBJSHR0cFNlcnZpY2UsXG59IGZyb20gJy4uL21pZGRsZXdhcmUvdHlwZXMnO1xuaW1wb3J0IGhhbmRsZUFjdGlvbnMgZnJvbSAnLi4vdXRpbHMvaGFuZGxlQWN0aW9ucyc7XG5pbXBvcnQgeyBBRF9OT0RFX0FQSSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbm9tYWx5RGF0YSB9IGZyb20gJy4uLy4uL21vZGVscy9pbnRlcmZhY2VzJztcblxuY29uc3QgREVURUNUT1JfUkVTVUxUUyA9ICdhZC9ERVRFQ1RPUl9SRVNVTFRTJztcblxuZXhwb3J0IGludGVyZmFjZSBBbm9tYWxpZXMge1xuICByZXF1ZXN0aW5nOiBib29sZWFuO1xuICB0b3RhbDogbnVtYmVyO1xuICBhbm9tYWxpZXM6IEFub21hbHlEYXRhW107XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBmZWF0dXJlRGF0YTogYW55O1xufVxuZXhwb3J0IGNvbnN0IGluaXRpYWxEZXRlY3RvcnNTdGF0ZTogQW5vbWFsaWVzID0ge1xuICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgdG90YWw6IDAsXG4gIGFub21hbGllczogW10sXG4gIGVycm9yTWVzc2FnZTogJycsXG4gIGZlYXR1cmVEYXRhOiB7fSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zPEFub21hbGllcz4oXG4gIHtcbiAgICBbREVURUNUT1JfUkVTVUxUU106IHtcbiAgICAgIFJFUVVFU1Q6IChzdGF0ZTogQW5vbWFsaWVzKTogQW5vbWFsaWVzID0+ICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXF1ZXN0aW5nOiB0cnVlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgfSksXG4gICAgICBTVUNDRVNTOiAoc3RhdGU6IEFub21hbGllcywgYWN0aW9uOiBBUElSZXNwb25zZUFjdGlvbik6IEFub21hbGllcyA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucmVzdWx0LmRhdGEucmVzcG9uc2UudG90YWxBbm9tYWxpZXMsXG4gICAgICAgIGFub21hbGllczogYWN0aW9uLnJlc3VsdC5kYXRhLnJlc3BvbnNlLnJlc3VsdHMsXG4gICAgICAgIGZlYXR1cmVEYXRhOiBhY3Rpb24ucmVzdWx0LmRhdGEucmVzcG9uc2UuZmVhdHVyZVJlc3VsdHMsXG4gICAgICB9KSxcbiAgICAgIEZBSUxVUkU6IChzdGF0ZTogQW5vbWFsaWVzLCBhY3Rpb246IEFQSVJlc3BvbnNlQWN0aW9uKTogQW5vbWFsaWVzID0+ICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3IuZGF0YS5lcnJvcixcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gIGluaXRpYWxEZXRlY3RvcnNTdGF0ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldERldGVjdG9yUmVzdWx0cyA9IChcbiAgZGV0ZWN0b3JJZDogc3RyaW5nLFxuICBxdWVyeVBhcmFtczogYW55XG4pOiBBUElBY3Rpb24gPT4gKHtcbiAgdHlwZTogREVURUNUT1JfUkVTVUxUUyxcbiAgcmVxdWVzdDogKGNsaWVudDogSUh0dHBTZXJ2aWNlKSA9PlxuICAgIGNsaWVudC5nZXQoYC4uJHtBRF9OT0RFX0FQSS5ERVRFQ1RPUn0vJHtkZXRlY3RvcklkfS9yZXN1bHRzYCwge1xuICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtcyxcbiAgICB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl19