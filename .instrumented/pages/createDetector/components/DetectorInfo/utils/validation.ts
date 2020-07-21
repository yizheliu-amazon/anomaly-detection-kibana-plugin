function cov_2d0lnugy6m() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/components/DetectorInfo/utils/validation.ts";
  var hash = "07a691901f1de0ed67160bb28feba7207f48b179";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/components/DetectorInfo/utils/validation.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 36
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "2": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 57
        }
      },
      "3": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 36
          },
          end: {
            line: 19,
            column: 37
          }
        },
        loc: {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        }, {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "07a691901f1de0ed67160bb28feba7207f48b179"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2d0lnugy6m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2d0lnugy6m();

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
import { isEmpty } from 'lodash'; //TODO:: Check Length, allowed characters.

cov_2d0lnugy6m().s[0]++;
export const validateDetectorDesc = (description: string): Error | undefined => {
  cov_2d0lnugy6m().f[0]++;
  cov_2d0lnugy6m().s[1]++;

  if (description.length > 400) {
    cov_2d0lnugy6m().b[0][0]++;
    cov_2d0lnugy6m().s[2]++;
    throw 'Description Should not exceed 400 characters';
  } else {
    cov_2d0lnugy6m().b[0][1]++;
  }

  cov_2d0lnugy6m().s[3]++;
  return undefined;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24udHMiXSwibmFtZXMiOlsiaXNFbXB0eSIsInZhbGlkYXRlRGV0ZWN0b3JEZXNjIiwiZGVzY3JpcHRpb24iLCJFcnJvciIsImxlbmd0aCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU0EsT0FBVCxRQUF3QixRQUF4QixDLENBRUE7OztBQUNBLE9BQU8sTUFBTUMsb0JBQW9CLEdBQUcsQ0FDbENDLFdBQVcsRUFBRSxNQURxQixDQUVuQyxFQUFFQyxLQUFLLEdBQUcsU0FGeUIsSUFFWjtBQUFBO0FBQUE7O0FBQ3RCLE1BQUlELFdBQVcsQ0FBQ0UsTUFBWixHQUFxQixHQUF6QixFQUE4QjtBQUFBO0FBQUE7QUFDNUIsVUFBTSw4Q0FBTjtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQURzQjtBQUl0QixTQUFPQyxTQUFQO0FBQ0QsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuXG4vL1RPRE86OiBDaGVjayBMZW5ndGgsIGFsbG93ZWQgY2hhcmFjdGVycy5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZURldGVjdG9yRGVzYyA9IChcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuKTogRXJyb3IgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID4gNDAwKSB7XG4gICAgdGhyb3cgJ0Rlc2NyaXB0aW9uIFNob3VsZCBub3QgZXhjZWVkIDQwMCBjaGFyYWN0ZXJzJztcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbiJdfQ==