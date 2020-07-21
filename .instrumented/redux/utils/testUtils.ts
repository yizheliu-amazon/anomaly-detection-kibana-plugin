function cov_2mtg1gau2b() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/utils/testUtils.ts";
  var hash = "7c9001ddf491b5655dc1eac45180b404a3205e05";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/utils/testUtils.ts",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 28
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "1": {
        start: {
          line: 52,
          column: 27
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "2": {
        start: {
          line: 53,
          column: 22
        },
        end: {
          line: 53,
          column: 56
        }
      },
      "3": {
        start: {
          line: 54,
          column: 20
        },
        end: {
          line: 54,
          column: 57
        }
      },
      "4": {
        start: {
          line: 55,
          column: 16
        },
        end: {
          line: 55,
          column: 36
        }
      },
      "5": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 56,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 52,
            column: 27
          },
          end: {
            line: 52,
            column: 28
          }
        },
        loc: {
          start: {
            line: 52,
            column: 78
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 52
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 52,
            column: 28
          },
          end: {
            line: 52,
            column: 52
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 52,
            column: 40
          },
          end: {
            line: 52,
            column: 52
          }
        }],
        line: 52
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
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7c9001ddf491b5655dc1eac45180b404a3205e05"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mtg1gau2b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2mtg1gau2b();

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
import configureStore, { MockStore } from 'redux-mock-store';
import clientMiddleware from '../middleware/clientMiddleware';
import httpClientMock from '../../../test/mocks/httpClientMock';
import { AppState } from '../reducers';
export const initialState = (cov_2mtg1gau2b().s[0]++, {
  ad: {
    requesting: false,
    detectors: {},
    totalDetectors: 0,
    errorMessage: '',
    detectorList: {}
  },
  elasticsearch: {
    indices: [],
    aliases: [],
    dataTypes: {},
    requesting: false,
    searchResult: {},
    errorMessage: ''
  },
  anomalies: {
    requesting: false,
    anomaliesResult: {
      anomalies: [],
      featureData: {}
    },
    errorMessage: ''
  },
  anomalyResults: {
    requesting: false,
    total: 0,
    anomalies: [],
    errorMessage: ''
  }
});
cov_2mtg1gau2b().s[1]++;
export const mockedStore = (mockState = (cov_2mtg1gau2b().b[0][0]++, initialState)): MockStore<AppState> => {
  cov_2mtg1gau2b().f[0]++;
  const middlewares = (cov_2mtg1gau2b().s[2]++, [clientMiddleware(httpClientMock)]);
  const mockStore = (cov_2mtg1gau2b().s[3]++, configureStore<AppState>(middlewares));
  const store = (cov_2mtg1gau2b().s[4]++, mockStore(mockState));
  cov_2mtg1gau2b().s[5]++;
  return store;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RVdGlscy50cyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsIk1vY2tTdG9yZSIsImNsaWVudE1pZGRsZXdhcmUiLCJodHRwQ2xpZW50TW9jayIsIkFwcFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWQiLCJyZXF1ZXN0aW5nIiwiZGV0ZWN0b3JzIiwidG90YWxEZXRlY3RvcnMiLCJlcnJvck1lc3NhZ2UiLCJkZXRlY3Rvckxpc3QiLCJlbGFzdGljc2VhcmNoIiwiaW5kaWNlcyIsImFsaWFzZXMiLCJkYXRhVHlwZXMiLCJzZWFyY2hSZXN1bHQiLCJhbm9tYWxpZXMiLCJhbm9tYWxpZXNSZXN1bHQiLCJmZWF0dXJlRGF0YSIsImFub21hbHlSZXN1bHRzIiwidG90YWwiLCJtb2NrZWRTdG9yZSIsIm1vY2tTdGF0ZSIsIm1pZGRsZXdhcmVzIiwibW9ja1N0b3JlIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPQSxjQUFQLElBQXlCQyxTQUF6QixRQUEwQyxrQkFBMUM7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixnQ0FBN0I7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLG9DQUEzQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFDQSxPQUFPLE1BQU1DLFlBQVksNkJBQUc7QUFDMUJDLEVBQUFBLEVBQUUsRUFBRTtBQUNGQyxJQUFBQSxVQUFVLEVBQUUsS0FEVjtBQUVGQyxJQUFBQSxTQUFTLEVBQUUsRUFGVDtBQUdGQyxJQUFBQSxjQUFjLEVBQUUsQ0FIZDtBQUlGQyxJQUFBQSxZQUFZLEVBQUUsRUFKWjtBQUtGQyxJQUFBQSxZQUFZLEVBQUU7QUFMWixHQURzQjtBQVExQkMsRUFBQUEsYUFBYSxFQUFFO0FBQ2JDLElBQUFBLE9BQU8sRUFBRSxFQURJO0FBRWJDLElBQUFBLE9BQU8sRUFBRSxFQUZJO0FBR2JDLElBQUFBLFNBQVMsRUFBRSxFQUhFO0FBSWJSLElBQUFBLFVBQVUsRUFBRSxLQUpDO0FBS2JTLElBQUFBLFlBQVksRUFBRSxFQUxEO0FBTWJOLElBQUFBLFlBQVksRUFBRTtBQU5ELEdBUlc7QUFnQjFCTyxFQUFBQSxTQUFTLEVBQUU7QUFDVFYsSUFBQUEsVUFBVSxFQUFFLEtBREg7QUFFVFcsSUFBQUEsZUFBZSxFQUFFO0FBQ2ZELE1BQUFBLFNBQVMsRUFBRSxFQURJO0FBRWZFLE1BQUFBLFdBQVcsRUFBRTtBQUZFLEtBRlI7QUFNVFQsSUFBQUEsWUFBWSxFQUFFO0FBTkwsR0FoQmU7QUF3QjFCVSxFQUFBQSxjQUFjLEVBQUU7QUFDZGIsSUFBQUEsVUFBVSxFQUFFLEtBREU7QUFFZGMsSUFBQUEsS0FBSyxFQUFFLENBRk87QUFHZEosSUFBQUEsU0FBUyxFQUFFLEVBSEc7QUFJZFAsSUFBQUEsWUFBWSxFQUFFO0FBSkE7QUF4QlUsQ0FBSCxDQUFsQjs7QUFnQ1AsT0FBTyxNQUFNWSxXQUFXLEdBQUcsQ0FBQ0MsU0FBUyxnQ0FBR2xCLFlBQUgsQ0FBVixDQUEwQixFQUFFSixTQUFTLENBQUNHLFFBQUQsQ0FBckMsSUFBbUQ7QUFBQTtBQUM1RSxRQUFNb0IsV0FBVyw2QkFBRyxDQUFDdEIsZ0JBQWdCLENBQUNDLGNBQUQsQ0FBakIsQ0FBSCxDQUFqQjtBQUNBLFFBQU1zQixTQUFTLDZCQUFHekIsY0FBYyxDQUFDSSxRQUFELEVBQVdvQixXQUFYLENBQWpCLENBQWY7QUFDQSxRQUFNRSxLQUFLLDZCQUFHRCxTQUFTLENBQUNGLFNBQUQsQ0FBWixDQUFYO0FBSDRFO0FBSTVFLFNBQU9HLEtBQVA7QUFDRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE5IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlLCB7IE1vY2tTdG9yZSB9IGZyb20gJ3JlZHV4LW1vY2stc3RvcmUnO1xuaW1wb3J0IGNsaWVudE1pZGRsZXdhcmUgZnJvbSAnLi4vbWlkZGxld2FyZS9jbGllbnRNaWRkbGV3YXJlJztcbmltcG9ydCBodHRwQ2xpZW50TW9jayBmcm9tICcuLi8uLi8uLi90ZXN0L21vY2tzL2h0dHBDbGllbnRNb2NrJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMnO1xuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWQ6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBkZXRlY3RvcnM6IHt9LFxuICAgIHRvdGFsRGV0ZWN0b3JzOiAwLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgZGV0ZWN0b3JMaXN0OiB7fSxcbiAgfSxcbiAgZWxhc3RpY3NlYXJjaDoge1xuICAgIGluZGljZXM6IFtdLFxuICAgIGFsaWFzZXM6IFtdLFxuICAgIGRhdGFUeXBlczoge30sXG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgc2VhcmNoUmVzdWx0OiB7fSxcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICB9LFxuICBhbm9tYWxpZXM6IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBhbm9tYWxpZXNSZXN1bHQ6IHtcbiAgICAgIGFub21hbGllczogW10sXG4gICAgICBmZWF0dXJlRGF0YToge30sXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICB9LFxuICBhbm9tYWx5UmVzdWx0czoge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIHRvdGFsOiAwLFxuICAgIGFub21hbGllczogW10sXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtb2NrZWRTdG9yZSA9IChtb2NrU3RhdGUgPSBpbml0aWFsU3RhdGUpOiBNb2NrU3RvcmU8QXBwU3RhdGU+ID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbY2xpZW50TWlkZGxld2FyZShodHRwQ2xpZW50TW9jayldO1xuICBjb25zdCBtb2NrU3RvcmUgPSBjb25maWd1cmVTdG9yZTxBcHBTdGF0ZT4obWlkZGxld2FyZXMpO1xuICBjb25zdCBzdG9yZSA9IG1vY2tTdG9yZShtb2NrU3RhdGUpO1xuICByZXR1cm4gc3RvcmU7XG59O1xuIl19