function cov_lej97b24y() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/utils/kibanaUtils.ts";
  var hash = "bd5595deee99c7825c1f59f4fb2329a755828c09";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/utils/kibanaUtils.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 31
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 32
          }
        },
        loc: {
          start: {
            line: 19,
            column: 46
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 68
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 59
          }
        }, {
          start: {
            line: 20,
            column: 63
          },
          end: {
            line: 20,
            column: 68
          }
        }],
        line: 20
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bd5595deee99c7825c1f59f4fb2329a755828c09"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lej97b24y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_lej97b24y();

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
//@ts-ignore
import chrome from 'ui/chrome';
cov_lej97b24y().s[0]++;
export const darkModeEnabled = (): boolean => {
  cov_lej97b24y().f[0]++;
  cov_lej97b24y().s[1]++;
  return (cov_lej97b24y().b[0][0]++, chrome.getUiSettingsClient().get('theme:darkMode')) || (cov_lej97b24y().b[0][1]++, false);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpYmFuYVV0aWxzLnRzIl0sIm5hbWVzIjpbImNocm9tZSIsImRhcmtNb2RlRW5hYmxlZCIsImdldFVpU2V0dGluZ3NDbGllbnQiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQSxPQUFPQSxNQUFQLE1BQW1CLFdBQW5COztBQUVBLE9BQU8sTUFBTUMsZUFBZSxHQUFHLEVBQUUsRUFBRSxPQUFKLElBQWU7QUFBQTtBQUFBO0FBQzVDLFNBQU8sNEJBQUFELE1BQU0sQ0FBQ0UsbUJBQVAsR0FBNkJDLEdBQTdCLENBQWlDLGdCQUFqQyxrQ0FBc0QsS0FBdEQsQ0FBUDtBQUNELENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTkgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLlxuICogWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBvciBpbiB0aGUgXCJsaWNlbnNlXCIgZmlsZSBhY2NvbXBhbnlpbmcgdGhpcyBmaWxlLiBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWRcbiAqIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAqIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBjaHJvbWUgZnJvbSAndWkvY2hyb21lJztcblxuZXhwb3J0IGNvbnN0IGRhcmtNb2RlRW5hYmxlZCA9ICgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGNocm9tZS5nZXRVaVNldHRpbmdzQ2xpZW50KCkuZ2V0KCd0aGVtZTpkYXJrTW9kZScpIHx8IGZhbHNlO1xufTtcbiJdfQ==