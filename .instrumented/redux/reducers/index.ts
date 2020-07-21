function cov_16psbjecpi() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/index.ts";
  var hash = "8716602751db721435299fb6d6d596c8505c1793";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/reducers/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 20
        },
        end: {
          line: 33,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8716602751db721435299fb6d6d596c8505c1793"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16psbjecpi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16psbjecpi();

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
import { combineReducers } from 'redux';
import indicesReducer from './elasticsearch';
import adReducer from './ad';
import anomalies from './anomalies';
import anomalyResults from './anomalyResults';
import liveAnomalyResults from './liveAnomalyResults';
import adAppReducer from './adAppReducer';
import alertingReducer from './alerting';
const rootReducer = (cov_16psbjecpi().s[0]++, combineReducers({
  elasticsearch: indicesReducer,
  anomalies: anomalies,
  anomalyResults: anomalyResults,
  liveAnomalyResults: liveAnomalyResults,
  ad: adReducer,
  adApp: adAppReducer,
  alerting: alertingReducer
}));
export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImluZGljZXNSZWR1Y2VyIiwiYWRSZWR1Y2VyIiwiYW5vbWFsaWVzIiwiYW5vbWFseVJlc3VsdHMiLCJsaXZlQW5vbWFseVJlc3VsdHMiLCJhZEFwcFJlZHVjZXIiLCJhbGVydGluZ1JlZHVjZXIiLCJyb290UmVkdWNlciIsImVsYXN0aWNzZWFyY2giLCJhZCIsImFkQXBwIiwiYWxlcnRpbmciLCJBcHBTdGF0ZSIsIlJldHVyblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVNBLGVBQVQsUUFBZ0MsT0FBaEM7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLGlCQUEzQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsTUFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixzQkFBL0I7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGdCQUF6QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsWUFBNUI7QUFFQSxNQUFNQyxXQUFXLDZCQUFHUixlQUFlLENBQUM7QUFDbENTLEVBQUFBLGFBQWEsRUFBRVIsY0FEbUI7QUFFbENFLEVBQUFBLFNBQVMsRUFBRUEsU0FGdUI7QUFHbENDLEVBQUFBLGNBQWMsRUFBRUEsY0FIa0I7QUFJbENDLEVBQUFBLGtCQUFrQixFQUFFQSxrQkFKYztBQUtsQ0ssRUFBQUEsRUFBRSxFQUFFUixTQUw4QjtBQU1sQ1MsRUFBQUEsS0FBSyxFQUFFTCxZQU4yQjtBQU9sQ00sRUFBQUEsUUFBUSxFQUFFTDtBQVB3QixDQUFELENBQWxCLENBQWpCO0FBVUEsZUFBZUMsV0FBZjtBQUVBLE9BQU8sS0FBS0ssUUFBTCxHQUFnQkMsVUFBVSxDQUFDLE9BQU9OLFdBQVIsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTkgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgaW5kaWNlc1JlZHVjZXIgZnJvbSAnLi9lbGFzdGljc2VhcmNoJztcbmltcG9ydCBhZFJlZHVjZXIgZnJvbSAnLi9hZCc7XG5pbXBvcnQgYW5vbWFsaWVzIGZyb20gJy4vYW5vbWFsaWVzJztcbmltcG9ydCBhbm9tYWx5UmVzdWx0cyBmcm9tICcuL2Fub21hbHlSZXN1bHRzJztcbmltcG9ydCBsaXZlQW5vbWFseVJlc3VsdHMgZnJvbSAnLi9saXZlQW5vbWFseVJlc3VsdHMnO1xuaW1wb3J0IGFkQXBwUmVkdWNlciBmcm9tICcuL2FkQXBwUmVkdWNlcic7XG5pbXBvcnQgYWxlcnRpbmdSZWR1Y2VyIGZyb20gJy4vYWxlcnRpbmcnO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGVsYXN0aWNzZWFyY2g6IGluZGljZXNSZWR1Y2VyLFxuICBhbm9tYWxpZXM6IGFub21hbGllcyxcbiAgYW5vbWFseVJlc3VsdHM6IGFub21hbHlSZXN1bHRzLFxuICBsaXZlQW5vbWFseVJlc3VsdHM6IGxpdmVBbm9tYWx5UmVzdWx0cyxcbiAgYWQ6IGFkUmVkdWNlcixcbiAgYWRBcHA6IGFkQXBwUmVkdWNlcixcbiAgYWxlcnRpbmc6IGFsZXJ0aW5nUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG4iXX0=