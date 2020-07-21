function cov_21tbhvmmpo() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/middleware/types.ts";
  var hash = "6a292fc05010722981379e9aa96cced2099ca9b2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/redux/middleware/types.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6a292fc05010722981379e9aa96cced2099ca9b2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21tbhvmmpo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_21tbhvmmpo();

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
import { IHttpService, IHttpPromise, IHttpResponse } from 'angular';
import { Action, Dispatch } from 'redux';
import { AppState } from '../reducers';
interface APIAction extends Action {
  request: (client: IHttpService) => IHttpPromise<IHttpResponse<any>>;
  [key: string]: any;
}
interface APIResponseAction extends Action {
  result: any;
  [key: string]: any;
}
interface APIErrorAction extends Action {
  error: any;
  [key: string]: any;
}
type ThunkAction<State = AppState> = (dispatch: Dispatch, getState: () => State) => void;
export { IHttpPromise, IHttpResponse, IHttpService, APIAction, APIResponseAction, APIErrorAction, ThunkAction };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzLnRzIl0sIm5hbWVzIjpbIklIdHRwU2VydmljZSIsIklIdHRwUHJvbWlzZSIsIklIdHRwUmVzcG9uc2UiLCJBY3Rpb24iLCJEaXNwYXRjaCIsIkFwcFN0YXRlIiwiQVBJQWN0aW9uIiwicmVxdWVzdCIsImNsaWVudCIsImtleSIsIkFQSVJlc3BvbnNlQWN0aW9uIiwicmVzdWx0IiwiQVBJRXJyb3JBY3Rpb24iLCJlcnJvciIsIlRodW5rQWN0aW9uIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIlN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVNBLFlBQVQsRUFBdUJDLFlBQXZCLEVBQXFDQyxhQUFyQyxRQUEwRCxTQUExRDtBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLFFBQWpCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixhQUF6QjtBQUVBLFVBQVVDLFNBQVYsU0FBNEJILE1BQTVCLENBQW1DO0FBQ2pDSSxFQUFBQSxPQUFPLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFUixZQUFULEtBQTBCQyxZQUFZLENBQUNDLGFBQWEsQ0FBQyxHQUFELENBQWQsQ0FBeEM7QUFDUCxHQUFDTyxHQUFHLEVBQUUsTUFBTixDQUFhLEVBQUUsR0FBZjtBQUZpQztBQUtuQyxVQUFVQyxpQkFBVixTQUFvQ1AsTUFBcEMsQ0FBMkM7QUFDekNRLEVBQUFBLE1BQU0sRUFBRSxHQUFGO0FBQ04sR0FBQ0YsR0FBRyxFQUFFLE1BQU4sQ0FBYSxFQUFFLEdBQWY7QUFGeUM7QUFLM0MsVUFBVUcsY0FBVixTQUFpQ1QsTUFBakMsQ0FBd0M7QUFDdENVLEVBQUFBLEtBQUssRUFBRSxHQUFGO0FBQ0wsR0FBQ0osR0FBRyxFQUFFLE1BQU4sQ0FBYSxFQUFFLEdBQWY7QUFGc0M7QUFLeEMsS0FBS0ssV0FBVyxDQUFDLFFBQVFULFFBQVQsQ0FBaEIsR0FBcUMsQ0FDbkNVLFFBQVEsRUFBRVgsUUFEeUIsRUFFbkNZLFFBQVEsRUFBRSxNQUFNQyxLQUZtQixLQUdoQyxJQUhMO0FBS0EsU0FDRWhCLFlBREYsRUFFRUMsYUFGRixFQUdFRixZQUhGLEVBSUVNLFNBSkYsRUFLRUksaUJBTEYsRUFNRUUsY0FORixFQU9FRSxXQVBGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE5IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgSUh0dHBTZXJ2aWNlLCBJSHR0cFByb21pc2UsIElIdHRwUmVzcG9uc2UgfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IEFjdGlvbiwgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzJztcblxuaW50ZXJmYWNlIEFQSUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlcXVlc3Q6IChjbGllbnQ6IElIdHRwU2VydmljZSkgPT4gSUh0dHBQcm9taXNlPElIdHRwUmVzcG9uc2U8YW55Pj47XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIEFQSVJlc3BvbnNlQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgcmVzdWx0OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIEFQSUVycm9yQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgZXJyb3I6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG50eXBlIFRodW5rQWN0aW9uPFN0YXRlID0gQXBwU3RhdGU+ID0gKFxuICBkaXNwYXRjaDogRGlzcGF0Y2gsXG4gIGdldFN0YXRlOiAoKSA9PiBTdGF0ZVxuKSA9PiB2b2lkO1xuXG5leHBvcnQge1xuICBJSHR0cFByb21pc2UsXG4gIElIdHRwUmVzcG9uc2UsXG4gIElIdHRwU2VydmljZSxcbiAgQVBJQWN0aW9uLFxuICBBUElSZXNwb25zZUFjdGlvbixcbiAgQVBJRXJyb3JBY3Rpb24sXG4gIFRodW5rQWN0aW9uLFxufTtcbiJdfQ==