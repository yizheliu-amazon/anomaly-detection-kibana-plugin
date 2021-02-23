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
import { FormikProps, Formik } from 'formik';
import { isEmpty } from 'lodash';
import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BREADCRUMBS } from '../../../utils/constants';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import { CoreStart } from '../../../../../../src/core/public';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { CreateDetectorFormikValues } from '../models/interfaces';
import { DetectorDefinitionFields } from '../components/DetectorDefinitionFields';

interface ReviewAndCreateProps {
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
  initialValues: CreateDetectorFormikValues;
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

  const handleFormValidation = async (
    formikProps: FormikProps<CreateDetectorFormikValues>
  ) => {
    try {
      formikProps.setSubmitting(true);

      // TODO: do the submission here - look at existing create logic for doing this
    } catch (e) {
    } finally {
      formikProps.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={() => {}}
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
                fields={props.initialValues}
                isCreate={true}
              />
              <EuiSpacer />
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
                //isLoading={formikProps.isSubmitting}
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
                onClick={() => {
                  console.log('Placeholder for creating');
                }}
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
