function cov_2ch6hrenyv() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/Dashboard/utils/constants.ts";
  var hash = "f1e2270e72824444e95f18c52d68b131fdff8371";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/Dashboard/utils/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 34
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "1": {
        start: {
          line: 27,
          column: 52
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "2": {
        start: {
          line: 58,
          column: 47
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "3": {
        start: {
          line: 70,
          column: 35
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "4": {
        start: {
          line: 79,
          column: 46
        },
        end: {
          line: 86,
          column: 1
        }
      },
      "5": {
        start: {
          line: 88,
          column: 37
        },
        end: {
          line: 88,
          column: 52
        }
      },
      "6": {
        start: {
          line: 89,
          column: 43
        },
        end: {
          line: 89,
          column: 64
        }
      },
      "7": {
        start: {
          line: 90,
          column: 35
        },
        end: {
          line: 90,
          column: 48
        }
      },
      "8": {
        start: {
          line: 92,
          column: 45
        },
        end: {
          line: 92,
          column: 49
        }
      }
    },
    fnMap: {},
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
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f1e2270e72824444e95f18c52d68b131fdff8371"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ch6hrenyv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ch6hrenyv();

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
import { AD_DOC_FIELDS, SORT_DIRECTION } from '../../../../server/utils/constants';
import { ANOMALY_RESULT_INDEX, MAX_DETECTORS } from '../../../utils/constants';
export const TIME_RANGE_OPTIONS = (cov_2ch6hrenyv().s[0]++, [{
  value: '24h',
  text: 'Last 24 hours'
}, {
  value: '7d',
  text: 'Last 7 days'
}]);
export const GET_RECENT_ANOMALOUS_DETECTORS_QUERY = (cov_2ch6hrenyv().s[1]++, {
  index: ANOMALY_RESULT_INDEX,
  size: 10,
  query: {
    bool: {
      must: [{
        range: {
          [AD_DOC_FIELDS.ANOMALY_GRADE]: {
            gt: 0.0
          }
        }
      }],
      must_not: [{
        exists: {
          field: AD_DOC_FIELDS.ERROR
        }
      }]
    }
  },
  sort: {
    [AD_DOC_FIELDS.DATA_START_TIME]: SORT_DIRECTION.DESC
  },
  collapse: {
    field: AD_DOC_FIELDS.DETECTOR_ID
  }
});
export const GET_RECENT_ANOMALY_RESULT_QUERY = (cov_2ch6hrenyv().s[2]++, {
  range: {
    [AD_DOC_FIELDS.DATA_START_TIME]: {
      gte: 'now-30m'
    }
  },
  size: 30,
  sortField: AD_DOC_FIELDS.DATA_START_TIME,
  from: 0,
  sortDirection: SORT_DIRECTION.DESC
});
export const TIME_NOW_LINE_STYLE = (cov_2ch6hrenyv().s[3]++, {
  line: {
    strokeWidth: 1,
    stroke: '#3F3F3F',
    dash: [1, 2],
    opacity: 0.8
  }
});
export const GET_ALL_DETECTORS_QUERY_PARAMS = (cov_2ch6hrenyv().s[4]++, {
  from: 0,
  search: '',
  indices: '',
  size: MAX_DETECTORS,
  sortDirection: SORT_DIRECTION.ASC,
  sortField: 'name'
});
export const ALL_DETECTORS_MESSAGE = (cov_2ch6hrenyv().s[5]++, 'All detectors');
export const ALL_DETECTOR_STATES_MESSAGE = (cov_2ch6hrenyv().s[6]++, 'All detector states');
export const ALL_INDICES_MESSAGE = (cov_2ch6hrenyv().s[7]++, 'All indices');
export const SHOW_DECIMAL_NUMBER_THRESHOLD = (cov_2ch6hrenyv().s[8]++, 0.01);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJBRF9ET0NfRklFTERTIiwiU09SVF9ESVJFQ1RJT04iLCJBTk9NQUxZX1JFU1VMVF9JTkRFWCIsIk1BWF9ERVRFQ1RPUlMiLCJUSU1FX1JBTkdFX09QVElPTlMiLCJ2YWx1ZSIsInRleHQiLCJHRVRfUkVDRU5UX0FOT01BTE9VU19ERVRFQ1RPUlNfUVVFUlkiLCJpbmRleCIsInNpemUiLCJxdWVyeSIsImJvb2wiLCJtdXN0IiwicmFuZ2UiLCJBTk9NQUxZX0dSQURFIiwiZ3QiLCJtdXN0X25vdCIsImV4aXN0cyIsImZpZWxkIiwiRVJST1IiLCJzb3J0IiwiREFUQV9TVEFSVF9USU1FIiwiREVTQyIsImNvbGxhcHNlIiwiREVURUNUT1JfSUQiLCJHRVRfUkVDRU5UX0FOT01BTFlfUkVTVUxUX1FVRVJZIiwiZ3RlIiwic29ydEZpZWxkIiwiZnJvbSIsInNvcnREaXJlY3Rpb24iLCJUSU1FX05PV19MSU5FX1NUWUxFIiwibGluZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwiZGFzaCIsIm9wYWNpdHkiLCJHRVRfQUxMX0RFVEVDVE9SU19RVUVSWV9QQVJBTVMiLCJzZWFyY2giLCJpbmRpY2VzIiwiQVNDIiwiQUxMX0RFVEVDVE9SU19NRVNTQUdFIiwiQUxMX0RFVEVDVE9SX1NUQVRFU19NRVNTQUdFIiwiQUxMX0lORElDRVNfTUVTU0FHRSIsIlNIT1dfREVDSU1BTF9OVU1CRVJfVEhSRVNIT0xEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FDRUEsYUFERixFQUVFQyxjQUZGLFFBR08sb0NBSFA7QUFJQSxTQUFTQyxvQkFBVCxFQUErQkMsYUFBL0IsUUFBb0QsMEJBQXBEO0FBRUEsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUcsQ0FDaEM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEVBQUFBLElBQUksRUFBRTtBQUF0QixDQURnQyxFQUVoQztBQUFFRCxFQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlQyxFQUFBQSxJQUFJLEVBQUU7QUFBckIsQ0FGZ0MsQ0FBSCxDQUF4QjtBQUtQLE9BQU8sTUFBTUMsb0NBQW9DLDZCQUFHO0FBQ2xEQyxFQUFBQSxLQUFLLEVBQUVOLG9CQUQyQztBQUVsRE8sRUFBQUEsSUFBSSxFQUFFLEVBRjRDO0FBR2xEQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRSxDQUNKO0FBQ0VDLFFBQUFBLEtBQUssRUFBRTtBQUNMLFdBQUNiLGFBQWEsQ0FBQ2MsYUFBZixHQUErQjtBQUM3QkMsWUFBQUEsRUFBRSxFQUFFO0FBRHlCO0FBRDFCO0FBRFQsT0FESSxDQURGO0FBVUpDLE1BQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VDLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxLQUFLLEVBQUVsQixhQUFhLENBQUNtQjtBQURmO0FBRFYsT0FEUTtBQVZOO0FBREQsR0FIMkM7QUF1QmxEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSixLQUFDcEIsYUFBYSxDQUFDcUIsZUFBZixHQUFpQ3BCLGNBQWMsQ0FBQ3FCO0FBRDVDLEdBdkI0QztBQTBCbERDLEVBQUFBLFFBQVEsRUFBRTtBQUNSTCxJQUFBQSxLQUFLLEVBQUVsQixhQUFhLENBQUN3QjtBQURiO0FBMUJ3QyxDQUFILENBQTFDO0FBK0JQLE9BQU8sTUFBTUMsK0JBQStCLDZCQUFHO0FBQzdDWixFQUFBQSxLQUFLLEVBQUU7QUFDTCxLQUFDYixhQUFhLENBQUNxQixlQUFmLEdBQWlDO0FBQy9CSyxNQUFBQSxHQUFHLEVBQUU7QUFEMEI7QUFENUIsR0FEc0M7QUFNN0NqQixFQUFBQSxJQUFJLEVBQUUsRUFOdUM7QUFPN0NrQixFQUFBQSxTQUFTLEVBQUUzQixhQUFhLENBQUNxQixlQVBvQjtBQVE3Q08sRUFBQUEsSUFBSSxFQUFFLENBUnVDO0FBUzdDQyxFQUFBQSxhQUFhLEVBQUU1QixjQUFjLENBQUNxQjtBQVRlLENBQUgsQ0FBckM7QUFZUCxPQUFPLE1BQU1RLG1CQUFtQiw2QkFBRztBQUNqQ0MsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLFdBQVcsRUFBRSxDQURUO0FBRUpDLElBQUFBLE1BQU0sRUFBRSxTQUZKO0FBR0pDLElBQUFBLElBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSEY7QUFJSkMsSUFBQUEsT0FBTyxFQUFFO0FBSkw7QUFEMkIsQ0FBSCxDQUF6QjtBQVNQLE9BQU8sTUFBTUMsOEJBQThCLDZCQUFHO0FBQzVDUixFQUFBQSxJQUFJLEVBQUUsQ0FEc0M7QUFFNUNTLEVBQUFBLE1BQU0sRUFBRSxFQUZvQztBQUc1Q0MsRUFBQUEsT0FBTyxFQUFFLEVBSG1DO0FBSTVDN0IsRUFBQUEsSUFBSSxFQUFFTixhQUpzQztBQUs1QzBCLEVBQUFBLGFBQWEsRUFBRTVCLGNBQWMsQ0FBQ3NDLEdBTGM7QUFNNUNaLEVBQUFBLFNBQVMsRUFBRTtBQU5pQyxDQUFILENBQXBDO0FBU1AsT0FBTyxNQUFNYSxxQkFBcUIsNkJBQUcsZUFBSCxDQUEzQjtBQUNQLE9BQU8sTUFBTUMsMkJBQTJCLDZCQUFHLHFCQUFILENBQWpDO0FBQ1AsT0FBTyxNQUFNQyxtQkFBbUIsNkJBQUcsYUFBSCxDQUF6QjtBQUVQLE9BQU8sTUFBTUMsNkJBQTZCLDZCQUFHLElBQUgsQ0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBBRF9ET0NfRklFTERTLFxuICBTT1JUX0RJUkVDVElPTixcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmVyL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBTk9NQUxZX1JFU1VMVF9JTkRFWCwgTUFYX0RFVEVDVE9SUyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBUSU1FX1JBTkdFX09QVElPTlMgPSBbXG4gIHsgdmFsdWU6ICcyNGgnLCB0ZXh0OiAnTGFzdCAyNCBob3VycycgfSxcbiAgeyB2YWx1ZTogJzdkJywgdGV4dDogJ0xhc3QgNyBkYXlzJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEdFVF9SRUNFTlRfQU5PTUFMT1VTX0RFVEVDVE9SU19RVUVSWSA9IHtcbiAgaW5kZXg6IEFOT01BTFlfUkVTVUxUX0lOREVYLFxuICBzaXplOiAxMCxcbiAgcXVlcnk6IHtcbiAgICBib29sOiB7XG4gICAgICBtdXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgW0FEX0RPQ19GSUVMRFMuQU5PTUFMWV9HUkFERV06IHtcbiAgICAgICAgICAgICAgZ3Q6IDAuMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBtdXN0X25vdDogW1xuICAgICAgICB7XG4gICAgICAgICAgZXhpc3RzOiB7XG4gICAgICAgICAgICBmaWVsZDogQURfRE9DX0ZJRUxEUy5FUlJPUixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBzb3J0OiB7XG4gICAgW0FEX0RPQ19GSUVMRFMuREFUQV9TVEFSVF9USU1FXTogU09SVF9ESVJFQ1RJT04uREVTQyxcbiAgfSxcbiAgY29sbGFwc2U6IHtcbiAgICBmaWVsZDogQURfRE9DX0ZJRUxEUy5ERVRFQ1RPUl9JRCxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBHRVRfUkVDRU5UX0FOT01BTFlfUkVTVUxUX1FVRVJZID0ge1xuICByYW5nZToge1xuICAgIFtBRF9ET0NfRklFTERTLkRBVEFfU1RBUlRfVElNRV06IHtcbiAgICAgIGd0ZTogJ25vdy0zMG0nLFxuICAgIH0sXG4gIH0sXG4gIHNpemU6IDMwLFxuICBzb3J0RmllbGQ6IEFEX0RPQ19GSUVMRFMuREFUQV9TVEFSVF9USU1FLFxuICBmcm9tOiAwLFxuICBzb3J0RGlyZWN0aW9uOiBTT1JUX0RJUkVDVElPTi5ERVNDLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfTk9XX0xJTkVfU1RZTEUgPSB7XG4gIGxpbmU6IHtcbiAgICBzdHJva2VXaWR0aDogMSxcbiAgICBzdHJva2U6ICcjM0YzRjNGJyxcbiAgICBkYXNoOiBbMSwgMl0sXG4gICAgb3BhY2l0eTogMC44LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEdFVF9BTExfREVURUNUT1JTX1FVRVJZX1BBUkFNUyA9IHtcbiAgZnJvbTogMCxcbiAgc2VhcmNoOiAnJyxcbiAgaW5kaWNlczogJycsXG4gIHNpemU6IE1BWF9ERVRFQ1RPUlMsXG4gIHNvcnREaXJlY3Rpb246IFNPUlRfRElSRUNUSU9OLkFTQyxcbiAgc29ydEZpZWxkOiAnbmFtZScsXG59O1xuXG5leHBvcnQgY29uc3QgQUxMX0RFVEVDVE9SU19NRVNTQUdFID0gJ0FsbCBkZXRlY3RvcnMnO1xuZXhwb3J0IGNvbnN0IEFMTF9ERVRFQ1RPUl9TVEFURVNfTUVTU0FHRSA9ICdBbGwgZGV0ZWN0b3Igc3RhdGVzJztcbmV4cG9ydCBjb25zdCBBTExfSU5ESUNFU19NRVNTQUdFID0gJ0FsbCBpbmRpY2VzJztcblxuZXhwb3J0IGNvbnN0IFNIT1dfREVDSU1BTF9OVU1CRVJfVEhSRVNIT0xEID0gMC4wMTtcbiJdfQ==