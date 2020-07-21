function cov_20tenrxa6l() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorDetail/utils/constants.ts";
  var hash = "addf655cea090192b0a2608ac0de015f7d2cc988";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorDetail/utils/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 28
        },
        end: {
          line: 21,
          column: 65
        }
      },
      "1": {
        start: {
          line: 24,
          column: 38
        },
        end: {
          line: 76,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "addf655cea090192b0a2608ac0de015f7d2cc988"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20tenrxa6l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20tenrxa6l();

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
export enum DETECTOR_DETAIL_TABS {
  RESULTS = 'results',
  CONFIGURATIONS = 'configurations',
}
const DEFAULT_ACTION_ITEM = (cov_20tenrxa6l().s[0]++, 'Restart the detector and try again.'); // Known causes:
// https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L174-L185

export const DETECTOR_INIT_FAILURES = (cov_20tenrxa6l().s[1]++, Object.freeze({
  NO_TRAINING_DATA: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L801
    keyword: 'Cannot get training data',
    cause: 'no sufficient data is ingested',
    actionItem: 'Make sure your data is ingested correctly. If your data source has infrequent ingestion, increase the detector time interval and try again.'
  },
  COLD_START_ERROR: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L811
    keyword: 'Error while cold start',
    cause: 'of an error during model training',
    actionItem: DEFAULT_ACTION_ITEM
  },
  AD_MODEL_MEMORY_REACH_LIMIT: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/ml/ModelManager.java#L272
    keyword: 'AD models memory usage exceeds our limit',
    cause: 'of lack of memory for the detector models',
    actionItem: 'Reduce the number of features and try again.'
  },
  DETECTOR_MEMORY_REACH_LIMIT: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/ml/ModelManager.java#L783
    keyword: 'Exceeded memory limit',
    cause: 'of lack of memory for the detector',
    actionItem: "Remove or stop other detectors that you don't actively use, increase your cluster size, reduce the number of features, or scale up with an instance type of more memory and try again."
  },
  DATA_INDEX_NOT_FOUND: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L366
    keyword: 'Having trouble querying data: ',
    cause: 'the data index is not found',
    actionItem: 'Make sure your index exists and try again.'
  },
  ALL_FEATURES_DISABLED: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L368
    keyword: 'Having trouble querying data because all of your features have been disabled',
    cause: 'all detector features are disabled',
    actionItem: 'Enable one or more features and try again.'
  },
  DETECTOR_UNDEFINED: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L230
    keyword: 'AnomalyDetector is not available',
    cause: 'the detector is not defined',
    actionItem: 'Define your detector and try again.'
  },
  UNKNOWN_EXCEPTION: {
    //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/development/src/main/java/com/amazon/opendistroforelasticsearch/ad/transport/AnomalyResultTransportAction.java#L438
    keyword: 'We might have bugs',
    cause: 'of unknown error',
    actionItem: DEFAULT_ACTION_ITEM
  }
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJERVRFQ1RPUl9ERVRBSUxfVEFCUyIsIlJFU1VMVFMiLCJDT05GSUdVUkFUSU9OUyIsIkRFRkFVTFRfQUNUSU9OX0lURU0iLCJERVRFQ1RPUl9JTklUX0ZBSUxVUkVTIiwiT2JqZWN0IiwiZnJlZXplIiwiTk9fVFJBSU5JTkdfREFUQSIsImtleXdvcmQiLCJjYXVzZSIsImFjdGlvbkl0ZW0iLCJDT0xEX1NUQVJUX0VSUk9SIiwiQURfTU9ERUxfTUVNT1JZX1JFQUNIX0xJTUlUIiwiREVURUNUT1JfTUVNT1JZX1JFQUNIX0xJTUlUIiwiREFUQV9JTkRFWF9OT1RfRk9VTkQiLCJBTExfRkVBVFVSRVNfRElTQUJMRUQiLCJERVRFQ1RPUl9VTkRFRklORUQiLCJVTktOT1dOX0VYQ0VQVElPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLEtBQUtBLG9CQUFMO0FBQ0xDLEVBQUFBLE9BQU8sR0FBRyxTQUFIO0FBQ1BDLEVBQUFBLGNBQWMsR0FBRyxnQkFBSDtBQUZUO0FBS1AsTUFBTUMsbUJBQW1CLDZCQUFHLHFDQUFILENBQXpCLEMsQ0FDQTtBQUNBOztBQUNBLE9BQU8sTUFBTUMsc0JBQXNCLDZCQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNsREMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFDaEI7QUFDQUMsSUFBQUEsT0FBTyxFQUFFLDBCQUZPO0FBR2hCQyxJQUFBQSxLQUFLLEVBQUUsZ0NBSFM7QUFJaEJDLElBQUFBLFVBQVUsRUFDUjtBQUxjLEdBRGdDO0FBUWxEQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQjtBQUNBSCxJQUFBQSxPQUFPLEVBQUUsd0JBRk87QUFHaEJDLElBQUFBLEtBQUssRUFBRSxtQ0FIUztBQUloQkMsSUFBQUEsVUFBVSxFQUFFUDtBQUpJLEdBUmdDO0FBY2xEUyxFQUFBQSwyQkFBMkIsRUFBRTtBQUMzQjtBQUNBSixJQUFBQSxPQUFPLEVBQUUsMENBRmtCO0FBRzNCQyxJQUFBQSxLQUFLLEVBQUUsMkNBSG9CO0FBSTNCQyxJQUFBQSxVQUFVLEVBQUU7QUFKZSxHQWRxQjtBQW9CbERHLEVBQUFBLDJCQUEyQixFQUFFO0FBQzNCO0FBQ0FMLElBQUFBLE9BQU8sRUFBRSx1QkFGa0I7QUFHM0JDLElBQUFBLEtBQUssRUFBRSxvQ0FIb0I7QUFJM0JDLElBQUFBLFVBQVUsRUFDUjtBQUx5QixHQXBCcUI7QUEyQmxESSxFQUFBQSxvQkFBb0IsRUFBRTtBQUNwQjtBQUNBTixJQUFBQSxPQUFPLEVBQUUsZ0NBRlc7QUFHcEJDLElBQUFBLEtBQUssRUFBRSw2QkFIYTtBQUlwQkMsSUFBQUEsVUFBVSxFQUFFO0FBSlEsR0EzQjRCO0FBaUNsREssRUFBQUEscUJBQXFCLEVBQUU7QUFDckI7QUFDQVAsSUFBQUEsT0FBTyxFQUNMLDhFQUhtQjtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFLG9DQUpjO0FBS3JCQyxJQUFBQSxVQUFVLEVBQUU7QUFMUyxHQWpDMkI7QUF3Q2xETSxFQUFBQSxrQkFBa0IsRUFBRTtBQUNsQjtBQUNBUixJQUFBQSxPQUFPLEVBQUUsa0NBRlM7QUFHbEJDLElBQUFBLEtBQUssRUFBRSw2QkFIVztBQUlsQkMsSUFBQUEsVUFBVSxFQUFFO0FBSk0sR0F4QzhCO0FBOENsRE8sRUFBQUEsaUJBQWlCLEVBQUU7QUFDakI7QUFDQVQsSUFBQUEsT0FBTyxFQUFFLG9CQUZRO0FBR2pCQyxJQUFBQSxLQUFLLEVBQUUsa0JBSFU7QUFJakJDLElBQUFBLFVBQVUsRUFBRVA7QUFKSztBQTlDK0IsQ0FBZCxDQUFILENBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGVudW0gREVURUNUT1JfREVUQUlMX1RBQlMge1xuICBSRVNVTFRTID0gJ3Jlc3VsdHMnLFxuICBDT05GSUdVUkFUSU9OUyA9ICdjb25maWd1cmF0aW9ucycsXG59XG5cbmNvbnN0IERFRkFVTFRfQUNUSU9OX0lURU0gPSAnUmVzdGFydCB0aGUgZGV0ZWN0b3IgYW5kIHRyeSBhZ2Fpbi4nO1xuLy8gS25vd24gY2F1c2VzOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL29wZW5kaXN0cm8tZm9yLWVsYXN0aWNzZWFyY2gvYW5vbWFseS1kZXRlY3Rpb24vYmxvYi9kZXZlbG9wbWVudC9zcmMvbWFpbi9qYXZhL2NvbS9hbWF6b24vb3BlbmRpc3Ryb2ZvcmVsYXN0aWNzZWFyY2gvYWQvdHJhbnNwb3J0L0Fub21hbHlSZXN1bHRUcmFuc3BvcnRBY3Rpb24uamF2YSNMMTc0LUwxODVcbmV4cG9ydCBjb25zdCBERVRFQ1RPUl9JTklUX0ZBSUxVUkVTID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE5PX1RSQUlOSU5HX0RBVEE6IHtcbiAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9vcGVuZGlzdHJvLWZvci1lbGFzdGljc2VhcmNoL2Fub21hbHktZGV0ZWN0aW9uL2Jsb2IvZGV2ZWxvcG1lbnQvc3JjL21haW4vamF2YS9jb20vYW1hem9uL29wZW5kaXN0cm9mb3JlbGFzdGljc2VhcmNoL2FkL3RyYW5zcG9ydC9Bbm9tYWx5UmVzdWx0VHJhbnNwb3J0QWN0aW9uLmphdmEjTDgwMVxuICAgIGtleXdvcmQ6ICdDYW5ub3QgZ2V0IHRyYWluaW5nIGRhdGEnLFxuICAgIGNhdXNlOiAnbm8gc3VmZmljaWVudCBkYXRhIGlzIGluZ2VzdGVkJyxcbiAgICBhY3Rpb25JdGVtOlxuICAgICAgJ01ha2Ugc3VyZSB5b3VyIGRhdGEgaXMgaW5nZXN0ZWQgY29ycmVjdGx5LiBJZiB5b3VyIGRhdGEgc291cmNlIGhhcyBpbmZyZXF1ZW50IGluZ2VzdGlvbiwgaW5jcmVhc2UgdGhlIGRldGVjdG9yIHRpbWUgaW50ZXJ2YWwgYW5kIHRyeSBhZ2Fpbi4nLFxuICB9LFxuICBDT0xEX1NUQVJUX0VSUk9SOiB7XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20vb3BlbmRpc3Ryby1mb3ItZWxhc3RpY3NlYXJjaC9hbm9tYWx5LWRldGVjdGlvbi9ibG9iL2RldmVsb3BtZW50L3NyYy9tYWluL2phdmEvY29tL2FtYXpvbi9vcGVuZGlzdHJvZm9yZWxhc3RpY3NlYXJjaC9hZC90cmFuc3BvcnQvQW5vbWFseVJlc3VsdFRyYW5zcG9ydEFjdGlvbi5qYXZhI0w4MTFcbiAgICBrZXl3b3JkOiAnRXJyb3Igd2hpbGUgY29sZCBzdGFydCcsXG4gICAgY2F1c2U6ICdvZiBhbiBlcnJvciBkdXJpbmcgbW9kZWwgdHJhaW5pbmcnLFxuICAgIGFjdGlvbkl0ZW06IERFRkFVTFRfQUNUSU9OX0lURU0sXG4gIH0sXG4gIEFEX01PREVMX01FTU9SWV9SRUFDSF9MSU1JVDoge1xuICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL29wZW5kaXN0cm8tZm9yLWVsYXN0aWNzZWFyY2gvYW5vbWFseS1kZXRlY3Rpb24vYmxvYi9kZXZlbG9wbWVudC9zcmMvbWFpbi9qYXZhL2NvbS9hbWF6b24vb3BlbmRpc3Ryb2ZvcmVsYXN0aWNzZWFyY2gvYWQvbWwvTW9kZWxNYW5hZ2VyLmphdmEjTDI3MlxuICAgIGtleXdvcmQ6ICdBRCBtb2RlbHMgbWVtb3J5IHVzYWdlIGV4Y2VlZHMgb3VyIGxpbWl0JyxcbiAgICBjYXVzZTogJ29mIGxhY2sgb2YgbWVtb3J5IGZvciB0aGUgZGV0ZWN0b3IgbW9kZWxzJyxcbiAgICBhY3Rpb25JdGVtOiAnUmVkdWNlIHRoZSBudW1iZXIgb2YgZmVhdHVyZXMgYW5kIHRyeSBhZ2Fpbi4nLFxuICB9LFxuICBERVRFQ1RPUl9NRU1PUllfUkVBQ0hfTElNSVQ6IHtcbiAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9vcGVuZGlzdHJvLWZvci1lbGFzdGljc2VhcmNoL2Fub21hbHktZGV0ZWN0aW9uL2Jsb2IvZGV2ZWxvcG1lbnQvc3JjL21haW4vamF2YS9jb20vYW1hem9uL29wZW5kaXN0cm9mb3JlbGFzdGljc2VhcmNoL2FkL21sL01vZGVsTWFuYWdlci5qYXZhI0w3ODNcbiAgICBrZXl3b3JkOiAnRXhjZWVkZWQgbWVtb3J5IGxpbWl0JyxcbiAgICBjYXVzZTogJ29mIGxhY2sgb2YgbWVtb3J5IGZvciB0aGUgZGV0ZWN0b3InLFxuICAgIGFjdGlvbkl0ZW06XG4gICAgICBcIlJlbW92ZSBvciBzdG9wIG90aGVyIGRldGVjdG9ycyB0aGF0IHlvdSBkb24ndCBhY3RpdmVseSB1c2UsIGluY3JlYXNlIHlvdXIgY2x1c3RlciBzaXplLCByZWR1Y2UgdGhlIG51bWJlciBvZiBmZWF0dXJlcywgb3Igc2NhbGUgdXAgd2l0aCBhbiBpbnN0YW5jZSB0eXBlIG9mIG1vcmUgbWVtb3J5IGFuZCB0cnkgYWdhaW4uXCIsXG4gIH0sXG4gIERBVEFfSU5ERVhfTk9UX0ZPVU5EOiB7XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20vb3BlbmRpc3Ryby1mb3ItZWxhc3RpY3NlYXJjaC9hbm9tYWx5LWRldGVjdGlvbi9ibG9iL2RldmVsb3BtZW50L3NyYy9tYWluL2phdmEvY29tL2FtYXpvbi9vcGVuZGlzdHJvZm9yZWxhc3RpY3NlYXJjaC9hZC90cmFuc3BvcnQvQW5vbWFseVJlc3VsdFRyYW5zcG9ydEFjdGlvbi5qYXZhI0wzNjZcbiAgICBrZXl3b3JkOiAnSGF2aW5nIHRyb3VibGUgcXVlcnlpbmcgZGF0YTogJyxcbiAgICBjYXVzZTogJ3RoZSBkYXRhIGluZGV4IGlzIG5vdCBmb3VuZCcsXG4gICAgYWN0aW9uSXRlbTogJ01ha2Ugc3VyZSB5b3VyIGluZGV4IGV4aXN0cyBhbmQgdHJ5IGFnYWluLicsXG4gIH0sXG4gIEFMTF9GRUFUVVJFU19ESVNBQkxFRDoge1xuICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL29wZW5kaXN0cm8tZm9yLWVsYXN0aWNzZWFyY2gvYW5vbWFseS1kZXRlY3Rpb24vYmxvYi9kZXZlbG9wbWVudC9zcmMvbWFpbi9qYXZhL2NvbS9hbWF6b24vb3BlbmRpc3Ryb2ZvcmVsYXN0aWNzZWFyY2gvYWQvdHJhbnNwb3J0L0Fub21hbHlSZXN1bHRUcmFuc3BvcnRBY3Rpb24uamF2YSNMMzY4XG4gICAga2V5d29yZDpcbiAgICAgICdIYXZpbmcgdHJvdWJsZSBxdWVyeWluZyBkYXRhIGJlY2F1c2UgYWxsIG9mIHlvdXIgZmVhdHVyZXMgaGF2ZSBiZWVuIGRpc2FibGVkJyxcbiAgICBjYXVzZTogJ2FsbCBkZXRlY3RvciBmZWF0dXJlcyBhcmUgZGlzYWJsZWQnLFxuICAgIGFjdGlvbkl0ZW06ICdFbmFibGUgb25lIG9yIG1vcmUgZmVhdHVyZXMgYW5kIHRyeSBhZ2Fpbi4nLFxuICB9LFxuICBERVRFQ1RPUl9VTkRFRklORUQ6IHtcbiAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9vcGVuZGlzdHJvLWZvci1lbGFzdGljc2VhcmNoL2Fub21hbHktZGV0ZWN0aW9uL2Jsb2IvZGV2ZWxvcG1lbnQvc3JjL21haW4vamF2YS9jb20vYW1hem9uL29wZW5kaXN0cm9mb3JlbGFzdGljc2VhcmNoL2FkL3RyYW5zcG9ydC9Bbm9tYWx5UmVzdWx0VHJhbnNwb3J0QWN0aW9uLmphdmEjTDIzMFxuICAgIGtleXdvcmQ6ICdBbm9tYWx5RGV0ZWN0b3IgaXMgbm90IGF2YWlsYWJsZScsXG4gICAgY2F1c2U6ICd0aGUgZGV0ZWN0b3IgaXMgbm90IGRlZmluZWQnLFxuICAgIGFjdGlvbkl0ZW06ICdEZWZpbmUgeW91ciBkZXRlY3RvciBhbmQgdHJ5IGFnYWluLicsXG4gIH0sXG4gIFVOS05PV05fRVhDRVBUSU9OOiB7XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20vb3BlbmRpc3Ryby1mb3ItZWxhc3RpY3NlYXJjaC9hbm9tYWx5LWRldGVjdGlvbi9ibG9iL2RldmVsb3BtZW50L3NyYy9tYWluL2phdmEvY29tL2FtYXpvbi9vcGVuZGlzdHJvZm9yZWxhc3RpY3NlYXJjaC9hZC90cmFuc3BvcnQvQW5vbWFseVJlc3VsdFRyYW5zcG9ydEFjdGlvbi5qYXZhI0w0MzhcbiAgICBrZXl3b3JkOiAnV2UgbWlnaHQgaGF2ZSBidWdzJyxcbiAgICBjYXVzZTogJ29mIHVua25vd24gZXJyb3InLFxuICAgIGFjdGlvbkl0ZW06IERFRkFVTFRfQUNUSU9OX0lURU0sXG4gIH0sXG59KTtcbiJdfQ==