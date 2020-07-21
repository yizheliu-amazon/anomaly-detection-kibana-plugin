function cov_pudbpoylg() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/containers/models/interfaces.ts";
  var hash = "be9a5d56e8238be113dd06747f812eb0e9a1e552";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/createDetector/containers/models/interfaces.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "be9a5d56e8238be113dd06747f812eb0e9a1e552"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pudbpoylg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_pudbpoylg();

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
import { UIFilter, FILTER_TYPES } from '../../../../models/interfaces';
export interface ADFormikValues {
  detectorName: string;
  timeField: string;
  detectorDescription: string;
  index: {
    label: string;
  }[];
  filters: UIFilter[];
  filterType: FILTER_TYPES;
  filterQuery: string;
  detectionInterval: number;
  windowDelay: number;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMudHMiXSwibmFtZXMiOlsiVUlGaWx0ZXIiLCJGSUxURVJfVFlQRVMiLCJBREZvcm1pa1ZhbHVlcyIsImRldGVjdG9yTmFtZSIsInRpbWVGaWVsZCIsImRldGVjdG9yRGVzY3JpcHRpb24iLCJpbmRleCIsImxhYmVsIiwiZmlsdGVycyIsImZpbHRlclR5cGUiLCJmaWx0ZXJRdWVyeSIsImRldGVjdGlvbkludGVydmFsIiwid2luZG93RGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU0EsUUFBVCxFQUFtQkMsWUFBbkIsUUFBdUMsK0JBQXZDO0FBRUEsT0FBTyxVQUFVQyxjQUFWLENBQXlCO0FBQzlCQyxFQUFBQSxZQUFZLEVBQUUsTUFBRjtBQUNaQyxFQUFBQSxTQUFTLEVBQUUsTUFBRjtBQUNUQyxFQUFBQSxtQkFBbUIsRUFBRSxNQUFGO0FBQ25CQyxFQUFBQSxLQUFLLEVBQUU7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLE1BQUY7QUFBUCxLQUFGO0FBQ0xDLEVBQUFBLE9BQU8sRUFBRVIsUUFBUSxFQUFWO0FBQ1BTLEVBQUFBLFVBQVUsRUFBRVIsWUFBRjtBQUNWUyxFQUFBQSxXQUFXLEVBQUUsTUFBRjtBQUNYQyxFQUFBQSxpQkFBaUIsRUFBRSxNQUFGO0FBQ2pCQyxFQUFBQSxXQUFXLEVBQUUsTUFBRjtBQVRtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIG9yIGluIHRoZSBcImxpY2Vuc2VcIiBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZFxuICogb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICogcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFVJRmlsdGVyLCBGSUxURVJfVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQURGb3JtaWtWYWx1ZXMge1xuICBkZXRlY3Rvck5hbWU6IHN0cmluZztcbiAgdGltZUZpZWxkOiBzdHJpbmc7XG4gIGRldGVjdG9yRGVzY3JpcHRpb246IHN0cmluZztcbiAgaW5kZXg6IHsgbGFiZWw6IHN0cmluZyB9W107XG4gIGZpbHRlcnM6IFVJRmlsdGVyW107XG4gIGZpbHRlclR5cGU6IEZJTFRFUl9UWVBFUztcbiAgZmlsdGVyUXVlcnk6IHN0cmluZztcbiAgZGV0ZWN0aW9uSW50ZXJ2YWw6IG51bWJlcjtcbiAgd2luZG93RGVsYXk6IG51bWJlcjtcbn1cbiJdfQ==