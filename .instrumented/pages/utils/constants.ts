function cov_enwyfwxqo() {
  var path = "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/utils/constants.ts";
  var hash = "8a36028aa8557572f730fb3ba07c20747a518dde";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/yizheliu/casesafe/workspace/kibana-780/kibana/plugins/anomaly-detection-kibana-plugin/public/pages/utils/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 34
        },
        end: {
          line: 19,
          column: 43
        }
      },
      "1": {
        start: {
          line: 20,
          column: 34
        },
        end: {
          line: 20,
          column: 43
        }
      },
      "2": {
        start: {
          line: 21,
          column: 34
        },
        end: {
          line: 21,
          column: 43
        }
      },
      "3": {
        start: {
          line: 22,
          column: 33
        },
        end: {
          line: 22,
          column: 39
        }
      },
      "4": {
        start: {
          line: 33,
          column: 31
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "5": {
        start: {
          line: 44,
          column: 35
        },
        end: {
          line: 44,
          column: 37
        }
      },
      "6": {
        start: {
          line: 45,
          column: 27
        },
        end: {
          line: 45,
          column: 29
        }
      },
      "7": {
        start: {
          line: 46,
          column: 29
        },
        end: {
          line: 46,
          column: 33
        }
      },
      "8": {
        start: {
          line: 47,
          column: 36
        },
        end: {
          line: 47,
          column: 38
        }
      },
      "9": {
        start: {
          line: 49,
          column: 36
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "10": {
        start: {
          line: 58,
          column: 46
        },
        end: {
          line: 65,
          column: 1
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
      "10": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8a36028aa8557572f730fb3ba07c20747a518dde"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_enwyfwxqo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_enwyfwxqo();

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
import { SORT_DIRECTION } from '../../../server/utils/constants';
import { DETECTOR_STATE } from '../../utils/constants';
export const customSubduedColor = (cov_enwyfwxqo().s[0]++, '#98A2B3');
export const customSuccessColor = (cov_enwyfwxqo().s[1]++, '#7DE2D1');
export const customWarningColor = (cov_enwyfwxqo().s[2]++, '#FFCE7A');
export const customDangerColor = (cov_enwyfwxqo().s[3]++, '#F66');
export enum DETECTOR_STATE_COLOR {
  DISABLED = '#98A2B3',
  INIT = 'primary',
  RUNNING = '#7DE2D1',
  FEATURE_REQUIRED = '#98A2B3',
  INIT_FAILURE = '#F66',
  UNEXPECTED_FAILURE = '#F66',
}
export const stateToColorMap = (cov_enwyfwxqo().s[4]++, new Map<DETECTOR_STATE, DETECTOR_STATE_COLOR>().set(DETECTOR_STATE.DISABLED, DETECTOR_STATE_COLOR.DISABLED).set(DETECTOR_STATE.INIT, DETECTOR_STATE_COLOR.INIT).set(DETECTOR_STATE.RUNNING, DETECTOR_STATE_COLOR.RUNNING).set(DETECTOR_STATE.FEATURE_REQUIRED, DETECTOR_STATE_COLOR.FEATURE_REQUIRED).set(DETECTOR_STATE.INIT_FAILURE, DETECTOR_STATE_COLOR.INIT_FAILURE).set(DETECTOR_STATE.UNEXPECTED_FAILURE, DETECTOR_STATE_COLOR.UNEXPECTED_FAILURE));
export const ALL_DETECTOR_STATES = (cov_enwyfwxqo().s[5]++, []);
export const ALL_INDICES = (cov_enwyfwxqo().s[6]++, []);
export const MAX_DETECTORS = (cov_enwyfwxqo().s[7]++, 1000);
export const MAX_SELECTED_INDICES = (cov_enwyfwxqo().s[8]++, 10);
export const DEFAULT_QUERY_PARAMS = (cov_enwyfwxqo().s[9]++, {
  from: 0,
  search: '',
  indices: '',
  size: 20,
  sortDirection: SORT_DIRECTION.ASC,
  sortField: 'name'
});
export const GET_ALL_DETECTORS_QUERY_PARAMS = (cov_enwyfwxqo().s[10]++, {
  from: 0,
  search: '',
  indices: '',
  size: MAX_DETECTORS,
  sortDirection: SORT_DIRECTION.ASC,
  sortField: 'name'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJTT1JUX0RJUkVDVElPTiIsIkRFVEVDVE9SX1NUQVRFIiwiY3VzdG9tU3ViZHVlZENvbG9yIiwiY3VzdG9tU3VjY2Vzc0NvbG9yIiwiY3VzdG9tV2FybmluZ0NvbG9yIiwiY3VzdG9tRGFuZ2VyQ29sb3IiLCJERVRFQ1RPUl9TVEFURV9DT0xPUiIsIkRJU0FCTEVEIiwiSU5JVCIsIlJVTk5JTkciLCJGRUFUVVJFX1JFUVVJUkVEIiwiSU5JVF9GQUlMVVJFIiwiVU5FWFBFQ1RFRF9GQUlMVVJFIiwic3RhdGVUb0NvbG9yTWFwIiwiTWFwIiwic2V0IiwiQUxMX0RFVEVDVE9SX1NUQVRFUyIsIkFMTF9JTkRJQ0VTIiwiTUFYX0RFVEVDVE9SUyIsIk1BWF9TRUxFQ1RFRF9JTkRJQ0VTIiwiREVGQVVMVF9RVUVSWV9QQVJBTVMiLCJmcm9tIiwic2VhcmNoIiwiaW5kaWNlcyIsInNpemUiLCJzb3J0RGlyZWN0aW9uIiwiQVNDIiwic29ydEZpZWxkIiwiR0VUX0FMTF9ERVRFQ1RPUlNfUVVFUllfUEFSQU1TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaOzs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVNBLGNBQVQsUUFBK0IsaUNBQS9CO0FBQ0EsU0FBU0MsY0FBVCxRQUErQix1QkFBL0I7QUFFQSxPQUFPLE1BQU1DLGtCQUFrQiw0QkFBRyxTQUFILENBQXhCO0FBQ1AsT0FBTyxNQUFNQyxrQkFBa0IsNEJBQUcsU0FBSCxDQUF4QjtBQUNQLE9BQU8sTUFBTUMsa0JBQWtCLDRCQUFHLFNBQUgsQ0FBeEI7QUFDUCxPQUFPLE1BQU1DLGlCQUFpQiw0QkFBRyxNQUFILENBQXZCO0FBRVAsT0FBTyxLQUFLQyxvQkFBTDtBQUNMQyxFQUFBQSxRQUFRLEdBQUcsU0FBSDtBQUNSQyxFQUFBQSxJQUFJLEdBQUcsU0FBSDtBQUNKQyxFQUFBQSxPQUFPLEdBQUcsU0FBSDtBQUNQQyxFQUFBQSxnQkFBZ0IsR0FBRyxTQUFIO0FBQ2hCQyxFQUFBQSxZQUFZLEdBQUcsTUFBSDtBQUNaQyxFQUFBQSxrQkFBa0IsR0FBRyxNQUFIO0FBTmI7QUFTUCxPQUFPLE1BQU1DLGVBQWUsNEJBQUcsSUFBSUMsR0FBRyxDQUFDYixjQUFELEVBQWlCSyxvQkFBakIsQ0FBUCxHQUM1QlMsR0FENEIsQ0FDeEJkLGNBQWMsQ0FBQ00sUUFEUyxFQUNDRCxvQkFBb0IsQ0FBQ0MsUUFEdEIsRUFFNUJRLEdBRjRCLENBRXhCZCxjQUFjLENBQUNPLElBRlMsRUFFSEYsb0JBQW9CLENBQUNFLElBRmxCLEVBRzVCTyxHQUg0QixDQUd4QmQsY0FBYyxDQUFDUSxPQUhTLEVBR0FILG9CQUFvQixDQUFDRyxPQUhyQixFQUk1Qk0sR0FKNEIsQ0FJeEJkLGNBQWMsQ0FBQ1MsZ0JBSlMsRUFJU0osb0JBQW9CLENBQUNJLGdCQUo5QixFQUs1QkssR0FMNEIsQ0FLeEJkLGNBQWMsQ0FBQ1UsWUFMUyxFQUtLTCxvQkFBb0IsQ0FBQ0ssWUFMMUIsRUFNNUJJLEdBTjRCLENBTzNCZCxjQUFjLENBQUNXLGtCQVBZLEVBUTNCTixvQkFBb0IsQ0FBQ00sa0JBUk0sQ0FBSCxDQUFyQjtBQVdQLE9BQU8sTUFBTUksbUJBQW1CLDRCQUFHLEVBQUgsQ0FBekI7QUFDUCxPQUFPLE1BQU1DLFdBQVcsNEJBQUcsRUFBSCxDQUFqQjtBQUNQLE9BQU8sTUFBTUMsYUFBYSw0QkFBRyxJQUFILENBQW5CO0FBQ1AsT0FBTyxNQUFNQyxvQkFBb0IsNEJBQUcsRUFBSCxDQUExQjtBQUVQLE9BQU8sTUFBTUMsb0JBQW9CLDRCQUFHO0FBQ2xDQyxFQUFBQSxJQUFJLEVBQUUsQ0FENEI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxFQUYwQjtBQUdsQ0MsRUFBQUEsT0FBTyxFQUFFLEVBSHlCO0FBSWxDQyxFQUFBQSxJQUFJLEVBQUUsRUFKNEI7QUFLbENDLEVBQUFBLGFBQWEsRUFBRXpCLGNBQWMsQ0FBQzBCLEdBTEk7QUFNbENDLEVBQUFBLFNBQVMsRUFBRTtBQU51QixDQUFILENBQTFCO0FBU1AsT0FBTyxNQUFNQyw4QkFBOEIsNkJBQUc7QUFDNUNQLEVBQUFBLElBQUksRUFBRSxDQURzQztBQUU1Q0MsRUFBQUEsTUFBTSxFQUFFLEVBRm9DO0FBRzVDQyxFQUFBQSxPQUFPLEVBQUUsRUFIbUM7QUFJNUNDLEVBQUFBLElBQUksRUFBRU4sYUFKc0M7QUFLNUNPLEVBQUFBLGFBQWEsRUFBRXpCLGNBQWMsQ0FBQzBCLEdBTGM7QUFNNUNDLEVBQUFBLFNBQVMsRUFBRTtBQU5pQyxDQUFILENBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIwIEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS5cbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgU09SVF9ESVJFQ1RJT04gfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IERFVEVDVE9SX1NUQVRFIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGN1c3RvbVN1YmR1ZWRDb2xvciA9ICcjOThBMkIzJztcbmV4cG9ydCBjb25zdCBjdXN0b21TdWNjZXNzQ29sb3IgPSAnIzdERTJEMSc7XG5leHBvcnQgY29uc3QgY3VzdG9tV2FybmluZ0NvbG9yID0gJyNGRkNFN0EnO1xuZXhwb3J0IGNvbnN0IGN1c3RvbURhbmdlckNvbG9yID0gJyNGNjYnO1xuXG5leHBvcnQgZW51bSBERVRFQ1RPUl9TVEFURV9DT0xPUiB7XG4gIERJU0FCTEVEID0gJyM5OEEyQjMnLFxuICBJTklUID0gJ3ByaW1hcnknLFxuICBSVU5OSU5HID0gJyM3REUyRDEnLFxuICBGRUFUVVJFX1JFUVVJUkVEID0gJyM5OEEyQjMnLFxuICBJTklUX0ZBSUxVUkUgPSAnI0Y2NicsXG4gIFVORVhQRUNURURfRkFJTFVSRSA9ICcjRjY2Jyxcbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlVG9Db2xvck1hcCA9IG5ldyBNYXA8REVURUNUT1JfU1RBVEUsIERFVEVDVE9SX1NUQVRFX0NPTE9SPigpXG4gIC5zZXQoREVURUNUT1JfU1RBVEUuRElTQUJMRUQsIERFVEVDVE9SX1NUQVRFX0NPTE9SLkRJU0FCTEVEKVxuICAuc2V0KERFVEVDVE9SX1NUQVRFLklOSVQsIERFVEVDVE9SX1NUQVRFX0NPTE9SLklOSVQpXG4gIC5zZXQoREVURUNUT1JfU1RBVEUuUlVOTklORywgREVURUNUT1JfU1RBVEVfQ09MT1IuUlVOTklORylcbiAgLnNldChERVRFQ1RPUl9TVEFURS5GRUFUVVJFX1JFUVVJUkVELCBERVRFQ1RPUl9TVEFURV9DT0xPUi5GRUFUVVJFX1JFUVVJUkVEKVxuICAuc2V0KERFVEVDVE9SX1NUQVRFLklOSVRfRkFJTFVSRSwgREVURUNUT1JfU1RBVEVfQ09MT1IuSU5JVF9GQUlMVVJFKVxuICAuc2V0KFxuICAgIERFVEVDVE9SX1NUQVRFLlVORVhQRUNURURfRkFJTFVSRSxcbiAgICBERVRFQ1RPUl9TVEFURV9DT0xPUi5VTkVYUEVDVEVEX0ZBSUxVUkVcbiAgKTtcblxuZXhwb3J0IGNvbnN0IEFMTF9ERVRFQ1RPUl9TVEFURVMgPSBbXTtcbmV4cG9ydCBjb25zdCBBTExfSU5ESUNFUyA9IFtdO1xuZXhwb3J0IGNvbnN0IE1BWF9ERVRFQ1RPUlMgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IE1BWF9TRUxFQ1RFRF9JTkRJQ0VTID0gMTA7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1FVRVJZX1BBUkFNUyA9IHtcbiAgZnJvbTogMCxcbiAgc2VhcmNoOiAnJyxcbiAgaW5kaWNlczogJycsXG4gIHNpemU6IDIwLFxuICBzb3J0RGlyZWN0aW9uOiBTT1JUX0RJUkVDVElPTi5BU0MsXG4gIHNvcnRGaWVsZDogJ25hbWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IEdFVF9BTExfREVURUNUT1JTX1FVRVJZX1BBUkFNUyA9IHtcbiAgZnJvbTogMCxcbiAgc2VhcmNoOiAnJyxcbiAgaW5kaWNlczogJycsXG4gIHNpemU6IE1BWF9ERVRFQ1RPUlMsXG4gIHNvcnREaXJlY3Rpb246IFNPUlRfRElSRUNUSU9OLkFTQyxcbiAgc29ydEZpZWxkOiAnbmFtZScsXG59O1xuIl19