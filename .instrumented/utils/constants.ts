function cov_2l5hogcsch() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/utils/constants.ts";
  var hash = "0b66ae27e2bbb0a96aede355ad7fc183c1ceac8b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/utils/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 27
        },
        end: {
          line: 31,
          column: 2
        }
      },
      "1": {
        start: {
          line: 33,
          column: 24
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "2": {
        start: {
          line: 41,
          column: 27
        },
        end: {
          line: 41,
          column: 64
        }
      },
      "3": {
        start: {
          line: 43,
          column: 36
        },
        end: {
          line: 43,
          column: 57
        }
      },
      "4": {
        start: {
          line: 45,
          column: 36
        },
        end: {
          line: 45,
          column: 65
        }
      },
      "5": {
        start: {
          line: 47,
          column: 29
        },
        end: {
          line: 47,
          column: 33
        }
      },
      "6": {
        start: {
          line: 49,
          column: 29
        },
        end: {
          line: 49,
          column: 34
        }
      },
      "7": {
        start: {
          line: 60,
          column: 31
        },
        end: {
          line: 60,
          column: 32
        }
      },
      "8": {
        start: {
          line: 62,
          column: 37
        },
        end: {
          line: 62,
          column: 39
        }
      },
      "9": {
        start: {
          line: 64,
          column: 26
        },
        end: {
          line: 64,
          column: 53
        }
      },
      "10": {
        start: {
          line: 67,
          column: 28
        },
        end: {
          line: 67,
          column: 29
        }
      },
      "11": {
        start: {
          line: 69,
          column: 42
        },
        end: {
          line: 69,
          column: 43
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0b66ae27e2bbb0a96aede355ad7fc183c1ceac8b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2l5hogcsch = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2l5hogcsch();

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
export enum DATA_TYPES {
  NUMBER = 'number',
  TEXT = 'text',
  BOOLEAN = 'boolean',
  KEYWORD = 'keyword',
  DATE = 'date',
}
export const BREADCRUMBS = (cov_2l5hogcsch().s[0]++, Object.freeze({
  ANOMALY_DETECTOR: {
    text: 'Anomaly detection',
    href: '#/'
  },
  DETECTORS: {
    text: 'Detectors',
    href: '#/detectors'
  },
  CREATE_DETECTOR: {
    text: 'Create detector'
  },
  EDIT_DETECTOR: {
    text: 'Edit detector'
  },
  DASHBOARD: {
    text: 'Dashboard',
    href: '#/'
  },
  EDIT_FEATURES: {
    text: 'Edit features'
  }
}));
export const APP_PATH = (cov_2l5hogcsch().s[1]++, {
  DASHBOARD: '/dashboard',
  LIST_DETECTORS: '/detectors',
  CREATE_DETECTOR: '/create-ad/',
  EDIT_DETECTOR: '/detectors/:detectorId/edit',
  EDIT_FEATURES: '/detectors/:detectorId/features/',
  DETECTOR_DETAIL: '/detectors/:detectorId/'
});
export const PLUGIN_NAME = (cov_2l5hogcsch().s[2]++, 'opendistro-anomaly-detection-kibana');
export const ALERTING_PLUGIN_NAME = (cov_2l5hogcsch().s[3]++, 'opendistro-alerting');
export const ANOMALY_RESULT_INDEX = (cov_2l5hogcsch().s[4]++, '.opendistro-anomaly-results');
export const MAX_DETECTORS = (cov_2l5hogcsch().s[5]++, 1000);
export const MAX_ANOMALIES = (cov_2l5hogcsch().s[6]++, 10000);
export enum DETECTOR_STATE {
  DISABLED = 'Stopped',
  INIT = 'Initializing',
  RUNNING = 'Running',
  FEATURE_REQUIRED = 'Feature required',
  INIT_FAILURE = 'Initialization failure',
  UNEXPECTED_FAILURE = 'Unexpected failure',
}
export const MAX_FEATURE_NUM = (cov_2l5hogcsch().s[7]++, 5);
export const MAX_FEATURE_NAME_SIZE = (cov_2l5hogcsch().s[8]++, 64);
export const NAME_REGEX = (cov_2l5hogcsch().s[9]++, RegExp('^[a-zA-Z0-9._-]+$')); //https://github.com/opendistro-for-elasticsearch/anomaly-detection/blob/master/src/main/java/com/amazon/opendistroforelasticsearch/ad/settings/AnomalyDetectorSettings.java#L186

export const SHINGLE_SIZE = (cov_2l5hogcsch().s[10]++, 8);
export const FEATURE_DATA_POINTS_WINDOW = (cov_2l5hogcsch().s[11]++, 3);
export enum MISSING_FEATURE_DATA_SEVERITY {
  // user attention not needed
  GREEN = '0',
  // needs user attention
  YELLOW = '1',
  // needs user attention and action
  RED = '2',
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJEQVRBX1RZUEVTIiwiTlVNQkVSIiwiVEVYVCIsIkJPT0xFQU4iLCJLRVlXT1JEIiwiREFURSIsIkJSRUFEQ1JVTUJTIiwiT2JqZWN0IiwiZnJlZXplIiwiQU5PTUFMWV9ERVRFQ1RPUiIsInRleHQiLCJocmVmIiwiREVURUNUT1JTIiwiQ1JFQVRFX0RFVEVDVE9SIiwiRURJVF9ERVRFQ1RPUiIsIkRBU0hCT0FSRCIsIkVESVRfRkVBVFVSRVMiLCJBUFBfUEFUSCIsIkxJU1RfREVURUNUT1JTIiwiREVURUNUT1JfREVUQUlMIiwiUExVR0lOX05BTUUiLCJBTEVSVElOR19QTFVHSU5fTkFNRSIsIkFOT01BTFlfUkVTVUxUX0lOREVYIiwiTUFYX0RFVEVDVE9SUyIsIk1BWF9BTk9NQUxJRVMiLCJERVRFQ1RPUl9TVEFURSIsIkRJU0FCTEVEIiwiSU5JVCIsIlJVTk5JTkciLCJGRUFUVVJFX1JFUVVJUkVEIiwiSU5JVF9GQUlMVVJFIiwiVU5FWFBFQ1RFRF9GQUlMVVJFIiwiTUFYX0ZFQVRVUkVfTlVNIiwiTUFYX0ZFQVRVUkVfTkFNRV9TSVpFIiwiTkFNRV9SRUdFWCIsIlJlZ0V4cCIsIlNISU5HTEVfU0laRSIsIkZFQVRVUkVfREFUQV9QT0lOVFNfV0lORE9XIiwiTUlTU0lOR19GRUFUVVJFX0RBVEFfU0VWRVJJVFkiLCJHUkVFTiIsIllFTExPVyIsIlJFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLE9BQU8sS0FBS0EsVUFBTDtBQUNMQyxFQUFBQSxNQUFNLEdBQUcsUUFBSDtBQUNOQyxFQUFBQSxJQUFJLEdBQUcsTUFBSDtBQUNKQyxFQUFBQSxPQUFPLEdBQUcsU0FBSDtBQUNQQyxFQUFBQSxPQUFPLEdBQUcsU0FBSDtBQUNQQyxFQUFBQSxJQUFJLEdBQUcsTUFBSDtBQUxDO0FBUVAsT0FBTyxNQUFNQyxXQUFXLDZCQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN2Q0MsRUFBQUEsZ0JBQWdCLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLG1CQUFSO0FBQTZCQyxJQUFBQSxJQUFJLEVBQUU7QUFBbkMsR0FEcUI7QUFFdkNDLEVBQUFBLFNBQVMsRUFBRTtBQUFFRixJQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQkMsSUFBQUEsSUFBSSxFQUFFO0FBQTNCLEdBRjRCO0FBR3ZDRSxFQUFBQSxlQUFlLEVBQUU7QUFBRUgsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FIc0I7QUFJdkNJLEVBQUFBLGFBQWEsRUFBRTtBQUFFSixJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUp3QjtBQUt2Q0ssRUFBQUEsU0FBUyxFQUFFO0FBQUVMLElBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCQyxJQUFBQSxJQUFJLEVBQUU7QUFBM0IsR0FMNEI7QUFNdkNLLEVBQUFBLGFBQWEsRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUU7QUFBUjtBQU53QixDQUFkLENBQUgsQ0FBakI7QUFTUCxPQUFPLE1BQU1PLFFBQVEsNkJBQUc7QUFDdEJGLEVBQUFBLFNBQVMsRUFBRSxZQURXO0FBRXRCRyxFQUFBQSxjQUFjLEVBQUUsWUFGTTtBQUd0QkwsRUFBQUEsZUFBZSxFQUFFLGFBSEs7QUFJdEJDLEVBQUFBLGFBQWEsRUFBRSw2QkFKTztBQUt0QkUsRUFBQUEsYUFBYSxFQUFFLGtDQUxPO0FBTXRCRyxFQUFBQSxlQUFlLEVBQUU7QUFOSyxDQUFILENBQWQ7QUFRUCxPQUFPLE1BQU1DLFdBQVcsNkJBQUcscUNBQUgsQ0FBakI7QUFFUCxPQUFPLE1BQU1DLG9CQUFvQiw2QkFBRyxxQkFBSCxDQUExQjtBQUVQLE9BQU8sTUFBTUMsb0JBQW9CLDZCQUFHLDZCQUFILENBQTFCO0FBRVAsT0FBTyxNQUFNQyxhQUFhLDZCQUFHLElBQUgsQ0FBbkI7QUFFUCxPQUFPLE1BQU1DLGFBQWEsNkJBQUcsS0FBSCxDQUFuQjtBQUVQLE9BQU8sS0FBS0MsY0FBTDtBQUNMQyxFQUFBQSxRQUFRLEdBQUcsU0FBSDtBQUNSQyxFQUFBQSxJQUFJLEdBQUcsY0FBSDtBQUNKQyxFQUFBQSxPQUFPLEdBQUcsU0FBSDtBQUNQQyxFQUFBQSxnQkFBZ0IsR0FBRyxrQkFBSDtBQUNoQkMsRUFBQUEsWUFBWSxHQUFHLHdCQUFIO0FBQ1pDLEVBQUFBLGtCQUFrQixHQUFHLG9CQUFIO0FBTmI7QUFTUCxPQUFPLE1BQU1DLGVBQWUsNkJBQUcsQ0FBSCxDQUFyQjtBQUVQLE9BQU8sTUFBTUMscUJBQXFCLDZCQUFHLEVBQUgsQ0FBM0I7QUFFUCxPQUFPLE1BQU1DLFVBQVUsNkJBQUdDLE1BQU0sQ0FBQyxtQkFBRCxDQUFULENBQWhCLEMsQ0FFUDs7QUFDQSxPQUFPLE1BQU1DLFlBQVksOEJBQUcsQ0FBSCxDQUFsQjtBQUVQLE9BQU8sTUFBTUMsMEJBQTBCLDhCQUFHLENBQUgsQ0FBaEM7QUFFUCxPQUFPLEtBQUtDLDZCQUFMO0FBQ0w7QUFDQUMsRUFBQUEsS0FBSyxHQUFHLEdBQUg7QUFDTDtBQUNBQyxFQUFBQSxNQUFNLEdBQUcsR0FBSDtBQUNOO0FBQ0FDLEVBQUFBLEdBQUcsR0FBRyxHQUFIO0FBTkUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTkgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZW51bSBEQVRBX1RZUEVTIHtcbiAgTlVNQkVSID0gJ251bWJlcicsXG4gIFRFWFQgPSAndGV4dCcsXG4gIEJPT0xFQU4gPSAnYm9vbGVhbicsXG4gIEtFWVdPUkQgPSAna2V5d29yZCcsXG4gIERBVEUgPSAnZGF0ZScsXG59XG5cbmV4cG9ydCBjb25zdCBCUkVBRENSVU1CUyA9IE9iamVjdC5mcmVlemUoe1xuICBBTk9NQUxZX0RFVEVDVE9SOiB7IHRleHQ6ICdBbm9tYWx5IGRldGVjdGlvbicsIGhyZWY6ICcjLycgfSxcbiAgREVURUNUT1JTOiB7IHRleHQ6ICdEZXRlY3RvcnMnLCBocmVmOiAnIy9kZXRlY3RvcnMnIH0sXG4gIENSRUFURV9ERVRFQ1RPUjogeyB0ZXh0OiAnQ3JlYXRlIGRldGVjdG9yJyB9LFxuICBFRElUX0RFVEVDVE9SOiB7IHRleHQ6ICdFZGl0IGRldGVjdG9yJyB9LFxuICBEQVNIQk9BUkQ6IHsgdGV4dDogJ0Rhc2hib2FyZCcsIGhyZWY6ICcjLycgfSxcbiAgRURJVF9GRUFUVVJFUzogeyB0ZXh0OiAnRWRpdCBmZWF0dXJlcycgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQVBQX1BBVEggPSB7XG4gIERBU0hCT0FSRDogJy9kYXNoYm9hcmQnLFxuICBMSVNUX0RFVEVDVE9SUzogJy9kZXRlY3RvcnMnLFxuICBDUkVBVEVfREVURUNUT1I6ICcvY3JlYXRlLWFkLycsXG4gIEVESVRfREVURUNUT1I6ICcvZGV0ZWN0b3JzLzpkZXRlY3RvcklkL2VkaXQnLFxuICBFRElUX0ZFQVRVUkVTOiAnL2RldGVjdG9ycy86ZGV0ZWN0b3JJZC9mZWF0dXJlcy8nLFxuICBERVRFQ1RPUl9ERVRBSUw6ICcvZGV0ZWN0b3JzLzpkZXRlY3RvcklkLycsXG59O1xuZXhwb3J0IGNvbnN0IFBMVUdJTl9OQU1FID0gJ29wZW5kaXN0cm8tYW5vbWFseS1kZXRlY3Rpb24ta2liYW5hJztcblxuZXhwb3J0IGNvbnN0IEFMRVJUSU5HX1BMVUdJTl9OQU1FID0gJ29wZW5kaXN0cm8tYWxlcnRpbmcnO1xuXG5leHBvcnQgY29uc3QgQU5PTUFMWV9SRVNVTFRfSU5ERVggPSAnLm9wZW5kaXN0cm8tYW5vbWFseS1yZXN1bHRzJztcblxuZXhwb3J0IGNvbnN0IE1BWF9ERVRFQ1RPUlMgPSAxMDAwO1xuXG5leHBvcnQgY29uc3QgTUFYX0FOT01BTElFUyA9IDEwMDAwO1xuXG5leHBvcnQgZW51bSBERVRFQ1RPUl9TVEFURSB7XG4gIERJU0FCTEVEID0gJ1N0b3BwZWQnLFxuICBJTklUID0gJ0luaXRpYWxpemluZycsXG4gIFJVTk5JTkcgPSAnUnVubmluZycsXG4gIEZFQVRVUkVfUkVRVUlSRUQgPSAnRmVhdHVyZSByZXF1aXJlZCcsXG4gIElOSVRfRkFJTFVSRSA9ICdJbml0aWFsaXphdGlvbiBmYWlsdXJlJyxcbiAgVU5FWFBFQ1RFRF9GQUlMVVJFID0gJ1VuZXhwZWN0ZWQgZmFpbHVyZScsXG59XG5cbmV4cG9ydCBjb25zdCBNQVhfRkVBVFVSRV9OVU0gPSA1O1xuXG5leHBvcnQgY29uc3QgTUFYX0ZFQVRVUkVfTkFNRV9TSVpFID0gNjQ7XG5cbmV4cG9ydCBjb25zdCBOQU1FX1JFR0VYID0gUmVnRXhwKCdeW2EtekEtWjAtOS5fLV0rJCcpO1xuXG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9vcGVuZGlzdHJvLWZvci1lbGFzdGljc2VhcmNoL2Fub21hbHktZGV0ZWN0aW9uL2Jsb2IvbWFzdGVyL3NyYy9tYWluL2phdmEvY29tL2FtYXpvbi9vcGVuZGlzdHJvZm9yZWxhc3RpY3NlYXJjaC9hZC9zZXR0aW5ncy9Bbm9tYWx5RGV0ZWN0b3JTZXR0aW5ncy5qYXZhI0wxODZcbmV4cG9ydCBjb25zdCBTSElOR0xFX1NJWkUgPSA4O1xuXG5leHBvcnQgY29uc3QgRkVBVFVSRV9EQVRBX1BPSU5UU19XSU5ET1cgPSAzO1xuXG5leHBvcnQgZW51bSBNSVNTSU5HX0ZFQVRVUkVfREFUQV9TRVZFUklUWSB7XG4gIC8vIHVzZXIgYXR0ZW50aW9uIG5vdCBuZWVkZWRcbiAgR1JFRU4gPSAnMCcsXG4gIC8vIG5lZWRzIHVzZXIgYXR0ZW50aW9uXG4gIFlFTExPVyA9ICcxJyxcbiAgLy8gbmVlZHMgdXNlciBhdHRlbnRpb24gYW5kIGFjdGlvblxuICBSRUQgPSAnMicsXG59XG4iXX0=