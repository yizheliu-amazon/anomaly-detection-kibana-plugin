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
import { get, isEmpty } from 'lodash';
import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../redux/reducers';
import { getMappings } from '../../../redux/reducers/elasticsearch';
import { useFetchDetectorInfo } from '../hooks/useFetchDetectorInfo';
import { BREADCRUMBS } from '../../../utils/constants';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import {
  validateFeatures,
  getCategoryFields,
  getShingleSizeFromObject,
  focusOnFirstWrongFeature,
  modelConfigurationToFormik,
  focusOnCategoryField,
} from '../utils/helpers';
import { Features } from '../components/Features';
import { CategoryField } from '../components/CategoryField';
import { AdvancedSettings } from '../components/AdvancedSettings';
import { SampleAnomalies } from './SampleAnomalies';
import { CoreStart } from '../../../../../../src/core/public';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { ModelConfigurationFormikValues } from '../models/interfaces';
import { DETECTOR_STATE } from '../../../../server/utils/constants';

interface ConfigureModelRouterProps {
  detectorId?: string;
}

interface ConfigureModelProps
  extends RouteComponentProps<ConfigureModelRouterProps> {
  isEdit: boolean;
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
  initialValues?: ModelConfigurationFormikValues;
  setInitialValues?(initialValues: ModelConfigurationFormikValues): void;
}

export function ConfigureModel(props: ConfigureModelProps) {
  const core = React.useContext(CoreServicesContext) as CoreStart;
  const dispatch = useDispatch();
  useHideSideNavBar(true, false);
  const detectorId = get(props, 'match.params.detectorId', '');
  const { detector, hasError } = useFetchDetectorInfo(detectorId);
  const indexDataTypes = useSelector(
    (state: AppState) => state.elasticsearch.dataTypes
  );
  const [isHCDetector, setIsHCDetector] = useState<boolean>(false);
  const isLoading = useSelector(
    (state: AppState) => state.elasticsearch.requesting
  );
  const originalShingleSize = getShingleSizeFromObject(detector, isHCDetector);

  const setIsHCDetectorAndForm = (
    isHCDetector: boolean,
    formikProps: FormikProps<ModelConfigurationFormikValues>
  ) => {
    console.log(
      'setting isHCDetector and categoryFieldEnabled to ',
      isHCDetector
    );
    setIsHCDetector(isHCDetector);
    formikProps.setFieldValue('categoryFieldEnabled', isHCDetector);
  };

  // When detector is loaded: get any category fields (if applicable) and
  // get all index mappings based on detector's selected index
  useEffect(() => {
    if (detector && get(detector, 'categoryField', []).length > 0) {
      setIsHCDetector(true);
    }
    if (detector?.indices) {
      dispatch(getMappings(detector.indices[0]));
    }
  }, [detector]);

  useEffect(() => {
    if (props.isEdit) {
      core.chrome.setBreadcrumbs([
        BREADCRUMBS.ANOMALY_DETECTOR,
        BREADCRUMBS.DETECTORS,
        {
          text: detector && detector.name ? detector.name : '',
          href: `#/detectors/${detectorId}`,
        },
        BREADCRUMBS.EDIT_MODEL_CONFIGURATION,
      ]);
    } else {
      core.chrome.setBreadcrumbs([
        BREADCRUMBS.ANOMALY_DETECTOR,
        BREADCRUMBS.DETECTORS,
        BREADCRUMBS.CREATE_DETECTOR,
      ]);
    }
  }, [detector]);

  useEffect(() => {
    if (hasError) {
      props.history.push('/detectors');
    }
  }, [hasError]);

  const handleFormValidation = async (
    formikProps: FormikProps<ModelConfigurationFormikValues>
  ) => {
    try {
      if (props.isEdit && detector.curState === DETECTOR_STATE.RUNNING) {
        core.notifications.toasts.addDanger(
          'Detector cannot be updated while it is running'
        );
      } else {
        formikProps.setSubmitting(true);
        formikProps.setFieldTouched('featureList');
        formikProps.setFieldTouched('categoryFieldEnabled');
        formikProps.setFieldTouched('categoryField', isHCDetector);
        formikProps.setFieldTouched('shingleSize');
        formikProps.validateForm().then((errors) => {
          if (isEmpty(errors)) {
            if (props.isEdit) {
              // TODO: need to figure out logic for saving and starting the detector from here
              // const apiRequest = formikToDetector(formikProps.values, detector);
              // handleUpdate(apiRequest);
            } else {
              optionallySaveValues(formikProps.values);
              props.setStep(3);
            }
          } else {
            // TODO: can add focus to all components or possibly customize error message too
            if (get(errors, 'featureList')) {
              focusOnFirstWrongFeature(errors, formikProps.setFieldTouched);
            } else if (get(errors, 'categoryField')) {
              focusOnCategoryField();
            }

            core.notifications.toasts.addDanger(
              'One or more input fields is invalid'
            );
          }
        });
      }
    } catch (e) {
    } finally {
      formikProps.setSubmitting(false);
    }
  };

  const handleSubmit = async (
    values: ModelConfigurationFormikValues,
    formikProps: any
  ) => {
    try {
      if (props.isEdit) {
        // TODO: submit the update here
      }
    } catch (e) {
    } finally {
      formikProps.setSubmitting(false);
    }
  };

  const optionallySaveValues = (values: ModelConfigurationFormikValues) => {
    if (props.setInitialValues) {
      props.setInitialValues(values);
    }
  };

  return (
    <Formik
      initialValues={
        props.initialValues
          ? props.initialValues
          : modelConfigurationToFormik(detector)
      }
      onSubmit={handleSubmit}
      validateOnMount={props.isEdit ? false : true}
      validate={validateFeatures}
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
                    <h1>Configure model </h1>
                  </EuiTitle>
                </EuiPageHeaderSection>
              </EuiPageHeader>
              <Features detector={detector} formikProps={formikProps} />
              <EuiSpacer />
              <CategoryField
                isHCDetector={isHCDetector}
                categoryFieldOptions={getCategoryFields(indexDataTypes)}
                setIsHCDetector={setIsHCDetector}
                isLoading={isLoading}
                originalShingleSize={originalShingleSize}
                formikProps={formikProps}
              />
              <EuiSpacer />
              <AdvancedSettings />
              <EuiSpacer />
              {!isEmpty(detector) ? (
                <SampleAnomalies
                  detector={detector}
                  featureList={formikProps.values.featureList}
                  shingleSize={formikProps.values.shingleSize}
                  categoryFields={formikProps.values.categoryField}
                  errors={formikProps.errors}
                  setFieldTouched={formikProps.setFieldTouched}
                />
              ) : null}
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
                data-test-subj="configureModelPreviousButton"
                //isLoading={formikProps.isSubmitting}
                //@ts-ignore
                onClick={() => {
                  optionallySaveValues(formikProps.values);
                  props.setStep(1);
                }}
              >
                Previous
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                type="submit"
                iconSide="right"
                iconType="arrowRight"
                fill={true}
                data-test-subj="configureModelNextButton"
                //isLoading={formikProps.isSubmitting}
                //@ts-ignore
                onClick={() => {
                  handleFormValidation(formikProps);
                }}
              >
                Next
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </Fragment>
      )}
    </Formik>
  );
}
