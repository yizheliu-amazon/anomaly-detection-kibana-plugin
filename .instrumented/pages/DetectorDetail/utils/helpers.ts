function cov_1cua21xve() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorDetail/utils/helpers.ts";
  var hash = "d516c7201777583c963350dbe4c7da82602ab1a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/DetectorDetail/utils/helpers.ts",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 50
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 19,
          column: 62
        }
      },
      "2": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 35
        }
      },
      "4": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "5": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 52
        }
      },
      "6": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 50
          },
          end: {
            line: 18,
            column: 51
          }
        },
        loc: {
          start: {
            line: 18,
            column: 77
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 44
          },
          end: {
            line: 20,
            column: 45
          }
        },
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 35
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 23
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d516c7201777583c963350dbe4c7da82602ab1a8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1cua21xve = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1cua21xve();

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
import { DETECTOR_INIT_FAILURES } from './constants';
cov_1cua21xve().s[0]++;
export const getInitFailureMessageAndActionItem = (error: string): object => {
  cov_1cua21xve().f[0]++;
  const failureDetails = (cov_1cua21xve().s[1]++, Object.values(DETECTOR_INIT_FAILURES));
  const failureDetail = (cov_1cua21xve().s[2]++, failureDetails.find(failure => {
    cov_1cua21xve().f[1]++;
    cov_1cua21xve().s[3]++;
    return error.includes(failure.keyword);
  }));
  cov_1cua21xve().s[4]++;

  if (!failureDetail) {
    cov_1cua21xve().b[0][0]++;
    cov_1cua21xve().s[5]++;
    return DETECTOR_INIT_FAILURES.UNKNOWN_EXCEPTION;
  } else {
    cov_1cua21xve().b[0][1]++;
  }

  cov_1cua21xve().s[6]++;
  return failureDetail;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMudHMiXSwibmFtZXMiOlsiREVURUNUT1JfSU5JVF9GQUlMVVJFUyIsImdldEluaXRGYWlsdXJlTWVzc2FnZUFuZEFjdGlvbkl0ZW0iLCJlcnJvciIsImZhaWx1cmVEZXRhaWxzIiwiT2JqZWN0IiwidmFsdWVzIiwiZmFpbHVyZURldGFpbCIsImZpbmQiLCJmYWlsdXJlIiwiaW5jbHVkZXMiLCJrZXl3b3JkIiwiVU5LTk9XTl9FWENFUFRJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTQSxzQkFBVCxRQUF1QyxhQUF2Qzs7QUFFQSxPQUFPLE1BQU1DLGtDQUFrQyxHQUFHLENBQUNDLEtBQUssRUFBRSxNQUFSLENBQWUsRUFBRSxNQUFqQixJQUEyQjtBQUFBO0FBQzNFLFFBQU1DLGNBQWMsNEJBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxzQkFBZCxDQUFILENBQXBCO0FBQ0EsUUFBTU0sYUFBYSw0QkFBR0gsY0FBYyxDQUFDSSxJQUFmLENBQXFCQyxPQUFELElBQ3hDO0FBQUE7QUFBQTtBQUFBLFdBQUFOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxPQUFPLENBQUNFLE9BQXZCO0FBQStCLEdBRFgsQ0FBSCxDQUFuQjtBQUYyRTs7QUFLM0UsTUFBSSxDQUFDSixhQUFMLEVBQW9CO0FBQUE7QUFBQTtBQUNsQixXQUFPTixzQkFBc0IsQ0FBQ1csaUJBQTlCO0FBQ0QsR0FGRDtBQUFBO0FBQUE7O0FBTDJFO0FBUTNFLFNBQU9MLGFBQVA7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgREVURUNUT1JfSU5JVF9GQUlMVVJFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldEluaXRGYWlsdXJlTWVzc2FnZUFuZEFjdGlvbkl0ZW0gPSAoZXJyb3I6IHN0cmluZyk6IG9iamVjdCA9PiB7XG4gIGNvbnN0IGZhaWx1cmVEZXRhaWxzID0gT2JqZWN0LnZhbHVlcyhERVRFQ1RPUl9JTklUX0ZBSUxVUkVTKTtcbiAgY29uc3QgZmFpbHVyZURldGFpbCA9IGZhaWx1cmVEZXRhaWxzLmZpbmQoKGZhaWx1cmUpID0+XG4gICAgZXJyb3IuaW5jbHVkZXMoZmFpbHVyZS5rZXl3b3JkKVxuICApO1xuICBpZiAoIWZhaWx1cmVEZXRhaWwpIHtcbiAgICByZXR1cm4gREVURUNUT1JfSU5JVF9GQUlMVVJFUy5VTktOT1dOX0VYQ0VQVElPTjtcbiAgfVxuICByZXR1cm4gZmFpbHVyZURldGFpbDtcbn07XG4iXX0=