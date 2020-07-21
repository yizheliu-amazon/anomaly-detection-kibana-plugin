function cov_a91akhhuy() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorResults/utils/constants.ts";
  var hash = "04184e5283a3e4a55641ba9fdce6e23bbf60c8da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorResults/utils/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 36
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "1": {
        start: {
          line: 35,
          column: 40
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "2": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 47
        }
      },
      "3": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 39
        }
      },
      "4": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 51,
          column: 131
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
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "04184e5283a3e4a55641ba9fdce6e23bbf60c8da"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_a91akhhuy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_a91akhhuy();

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
import { SORT_DIRECTION, AD_DOC_FIELDS } from '../../../../server/utils/constants';
import { CHART_COLORS } from '../../AnomalyCharts/utils/constants';
export const DEFAULT_QUERY_PARAMS = (cov_a91akhhuy().s[0]++, {
  from: 0,
  search: '',
  size: 20,
  sortDirection: SORT_DIRECTION.ASC,
  sortField: AD_DOC_FIELDS.DATA_START_TIME
});
export enum ANOMALY_HISTORY_TABS {
  FEATURE_BREAKDOWN = 'featureBreakdown',
  ANOMALY_OCCURRENCE = 'anomalyOccurrence',
}
export const LIVE_ANOMALY_CHART_THEME = (cov_a91akhhuy().s[1]++, [{
  colors: {
    vizColors: [CHART_COLORS.ANOMALY_GRADE_COLOR]
  }
}]); //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/master/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L307

export const NO_FULL_SHINGLE_ERROR_MESSAGE = (cov_a91akhhuy().s[2]++, 'No full shingle in current detection window'); //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/master/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L295

export const NO_DATA_IN_WINDOW_ERROR_MESSAGE = (cov_a91akhhuy().s[3]++, 'No data in current detection window'); //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/master/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L81

export const NO_RCF_MODEL_ERROR_MESSAGE = (cov_a91akhhuy().s[4]++, 'No RCF models are available either because RCF models are not ready or all nodes are unresponsive or the system might have bugs');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJTT1JUX0RJUkVDVElPTiIsIkFEX0RPQ19GSUVMRFMiLCJDSEFSVF9DT0xPUlMiLCJERUZBVUxUX1FVRVJZX1BBUkFNUyIsImZyb20iLCJzZWFyY2giLCJzaXplIiwic29ydERpcmVjdGlvbiIsIkFTQyIsInNvcnRGaWVsZCIsIkRBVEFfU1RBUlRfVElNRSIsIkFOT01BTFlfSElTVE9SWV9UQUJTIiwiRkVBVFVSRV9CUkVBS0RPV04iLCJBTk9NQUxZX09DQ1VSUkVOQ0UiLCJMSVZFX0FOT01BTFlfQ0hBUlRfVEhFTUUiLCJjb2xvcnMiLCJ2aXpDb2xvcnMiLCJBTk9NQUxZX0dSQURFX0NPTE9SIiwiTk9fRlVMTF9TSElOR0xFX0VSUk9SX01FU1NBR0UiLCJOT19EQVRBX0lOX1dJTkRPV19FUlJPUl9NRVNTQUdFIiwiTk9fUkNGX01PREVMX0VSUk9SX01FU1NBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FDRUEsY0FERixFQUVFQyxhQUZGLFFBR08sb0NBSFA7QUFJQSxTQUFTQyxZQUFULFFBQTZCLHFDQUE3QjtBQUVBLE9BQU8sTUFBTUMsb0JBQW9CLDRCQUFHO0FBQ2xDQyxFQUFBQSxJQUFJLEVBQUUsQ0FENEI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxFQUYwQjtBQUdsQ0MsRUFBQUEsSUFBSSxFQUFFLEVBSDRCO0FBSWxDQyxFQUFBQSxhQUFhLEVBQUVQLGNBQWMsQ0FBQ1EsR0FKSTtBQUtsQ0MsRUFBQUEsU0FBUyxFQUFFUixhQUFhLENBQUNTO0FBTFMsQ0FBSCxDQUExQjtBQVFQLE9BQU8sS0FBS0Msb0JBQUw7QUFDTEMsRUFBQUEsaUJBQWlCLEdBQUcsa0JBQUg7QUFDakJDLEVBQUFBLGtCQUFrQixHQUFHLG1CQUFIO0FBRmI7QUFLUCxPQUFPLE1BQU1DLHdCQUF3Qiw0QkFBRyxDQUN0QztBQUNFQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFLENBQUNkLFlBQVksQ0FBQ2UsbUJBQWQ7QUFETDtBQURWLENBRHNDLENBQUgsQ0FBOUIsQyxDQVFQOztBQUNBLE9BQU8sTUFBTUMsNkJBQTZCLDRCQUN4Qyw2Q0FEd0MsQ0FBbkMsQyxDQUVQOztBQUNBLE9BQU8sTUFBTUMsK0JBQStCLDRCQUMxQyxxQ0FEMEMsQ0FBckMsQyxDQUVQOztBQUNBLE9BQU8sTUFBTUMsMEJBQTBCLDRCQUNyQyxpSUFEcUMsQ0FBaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTkgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBTT1JUX0RJUkVDVElPTixcbiAgQURfRE9DX0ZJRUxEUyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmVyL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDSEFSVF9DT0xPUlMgfSBmcm9tICcuLi8uLi9Bbm9tYWx5Q2hhcnRzL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1FVRVJZX1BBUkFNUyA9IHtcbiAgZnJvbTogMCxcbiAgc2VhcmNoOiAnJyxcbiAgc2l6ZTogMjAsXG4gIHNvcnREaXJlY3Rpb246IFNPUlRfRElSRUNUSU9OLkFTQyxcbiAgc29ydEZpZWxkOiBBRF9ET0NfRklFTERTLkRBVEFfU1RBUlRfVElNRSxcbn07XG5cbmV4cG9ydCBlbnVtIEFOT01BTFlfSElTVE9SWV9UQUJTIHtcbiAgRkVBVFVSRV9CUkVBS0RPV04gPSAnZmVhdHVyZUJyZWFrZG93bicsXG4gIEFOT01BTFlfT0NDVVJSRU5DRSA9ICdhbm9tYWx5T2NjdXJyZW5jZScsXG59XG5cbmV4cG9ydCBjb25zdCBMSVZFX0FOT01BTFlfQ0hBUlRfVEhFTUUgPSBbXG4gIHtcbiAgICBjb2xvcnM6IHtcbiAgICAgIHZpekNvbG9yczogW0NIQVJUX0NPTE9SUy5BTk9NQUxZX0dSQURFX0NPTE9SXSxcbiAgICB9LFxuICB9LFxuXTtcblxuLy9odHRwczovL2dpdGh1Yi5jb20vb3BlbmRpc3Ryby1mb3ItZWxhc3RpY3NlYXJjaC9hbm9tYWx5LWRldGVjdGlvbi9ibG9iL21hc3Rlci9zcmMvbWFpbi9qYXZhL2NvbS9hbWF6b24vb3BlbmRpc3Ryb2ZvcmVsYXN0aWNzZWFyY2gvYWQvdHJhbnNwb3J0L0Fub21hbHlSZXN1bHRUcmFuc3BvcnRBY3Rpb24uamF2YSNMMzA3XG5leHBvcnQgY29uc3QgTk9fRlVMTF9TSElOR0xFX0VSUk9SX01FU1NBR0UgPVxuICAnTm8gZnVsbCBzaGluZ2xlIGluIGN1cnJlbnQgZGV0ZWN0aW9uIHdpbmRvdyc7XG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9vcGVuZGlzdHJvLWZvci1lbGFzdGljc2VhcmNoL2Fub21hbHktZGV0ZWN0aW9uL2Jsb2IvbWFzdGVyL3NyYy9tYWluL2phdmEvY29tL2FtYXpvbi9vcGVuZGlzdHJvZm9yZWxhc3RpY3NlYXJjaC9hZC90cmFuc3BvcnQvQW5vbWFseVJlc3VsdFRyYW5zcG9ydEFjdGlvbi5qYXZhI0wyOTVcbmV4cG9ydCBjb25zdCBOT19EQVRBX0lOX1dJTkRPV19FUlJPUl9NRVNTQUdFID1cbiAgJ05vIGRhdGEgaW4gY3VycmVudCBkZXRlY3Rpb24gd2luZG93Jztcbi8vaHR0cHM6Ly9naXRodWIuY29tL29wZW5kaXN0cm8tZm9yLWVsYXN0aWNzZWFyY2gvYW5vbWFseS1kZXRlY3Rpb24vYmxvYi9tYXN0ZXIvc3JjL21haW4vamF2YS9jb20vYW1hem9uL29wZW5kaXN0cm9mb3JlbGFzdGljc2VhcmNoL2FkL3RyYW5zcG9ydC9Bbm9tYWx5UmVzdWx0VHJhbnNwb3J0QWN0aW9uLmphdmEjTDgxXG5leHBvcnQgY29uc3QgTk9fUkNGX01PREVMX0VSUk9SX01FU1NBR0UgPVxuICAnTm8gUkNGIG1vZGVscyBhcmUgYXZhaWxhYmxlIGVpdGhlciBiZWNhdXNlIFJDRiBtb2RlbHMgYXJlIG5vdCByZWFkeSBvciBhbGwgbm9kZXMgYXJlIHVucmVzcG9uc2l2ZSBvciB0aGUgc3lzdGVtIG1pZ2h0IGhhdmUgYnVncyc7XG4iXX0=