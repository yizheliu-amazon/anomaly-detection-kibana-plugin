/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import React, { Fragment, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Formik } from 'formik';
import { get, isEmpty } from 'lodash';
import {
  EuiSpacer,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonEmpty,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import { useFetchDetectorInfo } from '../hooks/useFetchDetectorInfo';
import { CoreStart } from '../../../../../../src/core/public';
import { APIAction } from '../../../redux/middleware/types';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { BREADCRUMBS } from '../../../utils/constants';
import { getErrorMessage, validateDetectorName } from '../../../utils/utils';
import { matchDetector } from '../../../redux/reducers/ad';
import { DetectorInfo } from '../components/DetectorInfo';
import { DataSource } from './DataSource';
import { Settings } from '../components/Settings/Settings';
import { detectorToFormik } from './utils/detectorToFormik';
import { formikToDetector } from './utils/formikToDetector';

interface DefineDetectorRouterProps {
  detectorId?: string;
}

interface DefineDetectorProps
  extends RouteComponentProps<DefineDetectorRouterProps> {
  isEdit: boolean;
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
}

export const DefineDetector = (props: DefineDetectorProps) => {
  const core = React.useContext(CoreServicesContext) as CoreStart;
  const dispatch = useDispatch<Dispatch<APIAction>>();
  useHideSideNavBar(true, false);
  const detectorId: string = get(props, 'match.params.detectorId', '');
  const { detector, hasError } = useFetchDetectorInfo(detectorId);
  const [newIndexSelected, setNewIndexSelected] = useState<boolean>(false);

  // Set breadcrumbs based on create / update
  useEffect(() => {
    const createOrEditBreadcrumb = props.isEdit
      ? BREADCRUMBS.EDIT_DETECTOR
      : BREADCRUMBS.CREATE_DETECTOR;
    let breadCrumbs = [
      BREADCRUMBS.ANOMALY_DETECTOR,
      BREADCRUMBS.DETECTORS,
      createOrEditBreadcrumb,
    ];
    if (detector && detector.name) {
      breadCrumbs.splice(2, 0, {
        text: detector.name,
        //@ts-ignore
        href: `#/detectors/${detectorId}`,
      });
    }
    core.chrome.setBreadcrumbs(breadCrumbs);
  });

  // If no detector found with ID, redirect it to list
  useEffect(() => {
    if (props.isEdit && hasError) {
      core.notifications.toasts.addDanger(
        'Unable to find the detector for editing'
      );
      props.history.push(`/detectors`);
    }
  }, [props.isEdit]);

  const handleValidateName = async (detectorName: string) => {
    if (isEmpty(detectorName)) {
      return 'Detector name cannot be empty';
    } else {
      const error = validateDetectorName(detectorName);
      if (error) {
        return error;
      }
      //TODO::Avoid making call if value is same
      const resp = await dispatch(matchDetector(detectorName));
      const match = get(resp, 'response.match', false);
      if (!match) {
        return undefined;
      }
      //If more than one detectors found, duplicate exists.
      if (!props.isEdit && match) {
        return 'Duplicate detector name';
      }
      // if it is in edit mode
      if (props.isEdit && detectorName !== detector?.name) {
        return 'Duplicate detector name';
      }
    }
  };

  return (
    <React.Fragment>
      <EuiPage
        style={{
          marginTop: '-24px',
        }}
      >
        <EuiPageBody>
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <EuiTitle size="l">
                <h1>{props.isEdit ? 'Edit detector' : 'Define detector'} </h1>
              </EuiTitle>
            </EuiPageHeaderSection>
          </EuiPageHeader>
          <Formik
            enableReinitialize={true}
            initialValues={detectorToFormik(detector)}
            onSubmit={() => {}}
          >
            {(formikProps) => (
              <Fragment>
                <DetectorInfo onValidateDetectorName={handleValidateName} />
                <EuiSpacer />
                <DataSource
                  formikProps={formikProps}
                  origIndex={
                    props.isEdit ? get(detector, 'indices.0', '') : null
                  }
                  setNewIndexSelected={setNewIndexSelected}
                  isEdit={props.isEdit}
                />
                <EuiSpacer />
                <Settings />
              </Fragment>
            )}
          </Formik>
        </EuiPageBody>
      </EuiPage>

      <EuiSpacer size="xs" />
      <EuiFlexGroup
        alignItems="center"
        justifyContent="flexEnd"
        gutterSize="s"
        style={{ marginRight: '12px' }}
      >
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty onClick={props.handleCancelClick}>
            Cancel
          </EuiButtonEmpty>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            iconSide="right"
            iconType="arrowRight"
            fill={true}
            data-test-subj="defineDetectorNextButton"
            //isLoading={formikProps.isSubmitting}
            //@ts-ignore
            onClick={() => {
              props.setStep(2);
            }}
          >
            Next
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </React.Fragment>
  );
};
