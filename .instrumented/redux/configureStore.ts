function cov_1xk8vrmhbl() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/configureStore.ts";
  var hash = "6b4cf96beff43ea6f76bdcaf1ef5084cf79eaf07";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/configureStore.ts",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 22,
          column: 62
        }
      },
      "1": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 23,
          column: 69
        }
      },
      "2": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "configureStore",
        decl: {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 21,
            column: 23
          }
        },
        loc: {
          start: {
            line: 21,
            column: 50
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6b4cf96beff43ea6f76bdcaf1ef5084cf79eaf07"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xk8vrmhbl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1xk8vrmhbl();

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
import { createStore, applyMiddleware, compose } from 'redux';
import clientMiddleware from './middleware/clientMiddleware';
import { IHttpService } from './middleware/types';
import reducers, { AppState } from './reducers';

function configureStore(httpClient: IHttpService) {
  cov_1xk8vrmhbl().f[0]++;
  const middleWares = (cov_1xk8vrmhbl().s[0]++, [clientMiddleware<AppState>(httpClient)]);
  const store = (cov_1xk8vrmhbl().s[1]++, compose(applyMiddleware(...middleWares))(createStore)); //@ts-ignore

  cov_1xk8vrmhbl().s[2]++;
  return store(reducers);
}

export default configureStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyZVN0b3JlLnRzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNsaWVudE1pZGRsZXdhcmUiLCJJSHR0cFNlcnZpY2UiLCJyZWR1Y2VycyIsIkFwcFN0YXRlIiwiY29uZmlndXJlU3RvcmUiLCJodHRwQ2xpZW50IiwibWlkZGxlV2FyZXMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVNBLFdBQVQsRUFBc0JDLGVBQXRCLEVBQXVDQyxPQUF2QyxRQUFzRCxPQUF0RDtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLCtCQUE3QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsUUFBUCxJQUFtQkMsUUFBbkIsUUFBbUMsWUFBbkM7O0FBRUEsU0FBU0MsY0FBVCxDQUF3QkMsVUFBVSxFQUFFSixZQUFwQyxFQUFrRDtBQUFBO0FBQ2hELFFBQU1LLFdBQVcsNkJBQUcsQ0FBQ04sZ0JBQWdCLENBQUNHLFFBQUQsRUFBV0UsVUFBWCxDQUFqQixDQUFILENBQWpCO0FBQ0EsUUFBTUUsS0FBSyw2QkFBR1IsT0FBTyxDQUFDRCxlQUFlLENBQUMsR0FBR1EsV0FBSixDQUFoQixDQUFQLENBQXlDVCxXQUF6QyxDQUFILENBQVgsQ0FGZ0QsQ0FHaEQ7O0FBSGdEO0FBSWhELFNBQU9VLEtBQUssQ0FBQ0wsUUFBRCxDQUFaO0FBQ0Q7O0FBRUQsZUFBZUUsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY2xpZW50TWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvY2xpZW50TWlkZGxld2FyZSc7XG5pbXBvcnQgeyBJSHR0cFNlcnZpY2UgfSBmcm9tICcuL21pZGRsZXdhcmUvdHlwZXMnO1xuaW1wb3J0IHJlZHVjZXJzLCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGh0dHBDbGllbnQ6IElIdHRwU2VydmljZSkge1xuICBjb25zdCBtaWRkbGVXYXJlcyA9IFtjbGllbnRNaWRkbGV3YXJlPEFwcFN0YXRlPihodHRwQ2xpZW50KV07XG4gIGNvbnN0IHN0b3JlID0gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxlV2FyZXMpKShjcmVhdGVTdG9yZSk7XG4gIC8vQHRzLWlnbm9yZVxuICByZXR1cm4gc3RvcmUocmVkdWNlcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiJdfQ==