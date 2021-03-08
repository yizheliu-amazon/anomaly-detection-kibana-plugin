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

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiFlexItem,
  EuiFlexGroup,
  EuiPage,
  EuiButton,
  EuiTitle,
  EuiButtonEmpty,
  EuiSpacer,
} from '@elastic/eui';
import { createDetector, getDetectorCount } from '../../../redux/reducers/ad';
import { Formik, FormikHelpers } from 'formik';
import { get } from 'lodash';
import React, { Fragment, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { BREADCRUMBS, MAX_DETECTORS } from '../../../utils/constants';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import { CoreStart } from '../../../../../../src/core/public';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { CreateDetectorFormikValues } from '../models/interfaces';
import { DetectorDefinitionFields } from '../components/DetectorDefinitionFields';
import { ModelConfigurationFields } from '../components/ModelConfigurationFields';
import { formikToDetector } from '../utils/helpers';
import { getErrorMessage } from '../../../utils/utils';
import { prettifyErrorMessage } from '../../../../server/utils/helpers';
import { DetectorScheduleFields } from '../components/DetectorScheduleFields';

interface ReviewAndCreateProps extends RouteComponentProps {
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
  values: CreateDetectorFormikValues;
}

export function ReviewAndCreate(props: ReviewAndCreateProps) {
  const core = React.useContext(CoreServicesContext) as CoreStart;
  const dispatch = useDispatch();
  useHideSideNavBar(true, false);

  useEffect(() => {
    core.chrome.setBreadcrumbs([
      BREADCRUMBS.ANOMALY_DETECTOR,
      BREADCRUMBS.DETECTORS,
      BREADCRUMBS.CREATE_DETECTOR,
    ]);
  }, []);

  const handleSubmit = async (
    values: CreateDetectorFormikValues,
    formikHelpers: FormikHelpers<CreateDetectorFormikValues>
  ) => {
    try {
      formikHelpers.setSubmitting(true);
      const detectorToCreate = formikToDetector(values);
      dispatch(createDetector(detectorToCreate))
        .then((response: any) => {
          core.notifications.toasts.addSuccess(
            `Detector created: ${detectorToCreate.name}`
          );
          props.history.push(
            `/detectors/${response.response.id}/configurations/`
          );
        })
        .catch((err: any) => {
          dispatch(getDetectorCount()).then((response: any) => {
            const totalDetectors = get(response, 'response.count', 0);
            if (totalDetectors === MAX_DETECTORS) {
              core.notifications.toasts.addDanger(
                'Cannot create detector - limit of ' +
                  MAX_DETECTORS +
                  ' detectors reached'
              );
            } else {
              core.notifications.toasts.addDanger(
                prettifyErrorMessage(
                  getErrorMessage(
                    err,
                    'There was a problem creating the detector'
                  )
                )
              );
            }
          });
        });
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  // Converting to detector for passing to the fields
  const detectorToCreate = formikToDetector(props.values);

  return (
    <Formik
      initialValues={props.values}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      {(formikProps) => (
        <Fragment>
          <EuiPage
            style={{
              marginTop: '-24px',
            }}
          >
            <EuiPageBody>
              <EuiPageHeader>
                <EuiPageHeaderSection>
                  <EuiTitle size="l">
                    <h1>Review and create </h1>
                  </EuiTitle>
                </EuiPageHeaderSection>
              </EuiPageHeader>
              <DetectorDefinitionFields
                onEditDetectorDefinition={() => props.setStep(1)}
                detector={detectorToCreate}
                isCreate={true}
              />
              <EuiSpacer />
              <ModelConfigurationFields
                onEditModelConfiguration={() => props.setStep(2)}
                detector={detectorToCreate}
              />
              <EuiSpacer />
              <DetectorScheduleFields
                onEditDetectorSchedule={() => props.setStep(3)}
                values={props.values}
              />
            </EuiPageBody>
          </EuiPage>

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
                iconSide="left"
                iconType="arrowLeft"
                fill={false}
                data-test-subj="reviewAndCreatePreviousButton"
                //@ts-ignore
                onClick={() => {
                  props.setStep(3);
                }}
              >
                Previous
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                type="submit"
                fill={true}
                data-test-subj="createDetectorButton"
                isLoading={formikProps.isSubmitting}
                //@ts-ignore
                onClick={formikProps.handleSubmit}
              >
                Create detector
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </Fragment>
      )}
    </Formik>
  );
}
