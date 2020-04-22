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

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiFlexItem,
  EuiFlexGroup,
  EuiText,
  EuiLink,
  EuiPage,
  EuiButton,
  EuiTitle,
  EuiCallOut,
  EuiOverlayMask,
  EuiButtonEmpty,
  EuiIcon,
} from '@elastic/eui';
import { FieldArray, FieldArrayRenderProps, Form, Formik } from 'formik';
import { get } from 'lodash';
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import ContentPanel from '../../../components/ContentPanel/ContentPanel';
// @ts-ignore
import { toastNotifications } from 'ui/notify';
import { updateDetector, startDetector } from '../../../redux/reducers/ad';
import { getErrorMessage } from '../../../utils/utils';
import { prepareDetector } from './utils/formikToFeatures';
import { useFetchDetectorInfo } from '../../createDetector/hooks/useFetchDetectorInfo';
//@ts-ignore
import chrome from 'ui/chrome';
import { BREADCRUMBS, MAX_FEATURE_NUM } from '../../../utils/constants';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import { FeatureAccordion } from '../components/FeatureAccordion/FeatureAccordion';
import { SaveFeaturesConfirmModal } from '../components/ConfirmModal/SaveFeaturesConfirmModal';
import { SAVE_FEATURE_OPTIONS } from '../utils/constants';
import {
  initialize_feature,
  generateInitialFeatures,
  validateFeatures,
} from '../utils/helpers';
import { SampleAnomalies } from './SampleAnomalies';

interface FeaturesRouterProps {
  detectorId?: string;
}

interface EditFeaturesProps extends RouteComponentProps<FeaturesRouterProps> {}

export function EditFeatures(props: EditFeaturesProps) {
  const dispatch = useDispatch();
  useHideSideNavBar(true, false);
  const detectorId = get(props, 'match.params.detectorId', '');
  const { detector, hasError } = useFetchDetectorInfo(detectorId);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState<boolean>(
    false
  );
  const [saveFeatureOption, setSaveFeatureOption] = useState<
    SAVE_FEATURE_OPTIONS
  >(SAVE_FEATURE_OPTIONS.START_AD_JOB);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [readyToStartAdJob, setReadyToStartAdJob] = useState<boolean>(true);

  useEffect(() => {
    chrome.breadcrumbs.set([
      BREADCRUMBS.ANOMALY_DETECTOR,
      BREADCRUMBS.DETECTORS,
      {
        text: detector && detector.name ? detector.name : '',
        href: `#/detectors/${detectorId}`,
      },
      BREADCRUMBS.EDIT_FEATURES,
    ]);
  }, [detector]);

  useEffect(() => {
    if (hasError) {
      props.history.push('/detectors');
    }
  }, [hasError]);

  const featureDescription = () => (
    <EuiText size="s">
      <p className="content-panel-subtitle">
        Specify an index field that you want to find anomalies for by defining
        features. An detector can discover anomalies across up to 5 features.{' '}
        <EuiLink
          href="https://opendistro.github.io/for-elasticsearch-docs/docs/ad/"
          target="_blank"
        >
          Learn more <EuiIcon size="s" type="popout" />
        </EuiLink>
      </p>
    </EuiText>
  );

  const renderFeatures = (handleChange: any) => {
    return (
      <FieldArray name="featureList" validateOnChange={true}>
        {({ push, remove, form: { values } }: FieldArrayRenderProps) => {
          // @ts-ignore
          if (firstLoad && values.featureList.length === 0) {
            push(initialize_feature());
          }
          setFirstLoad(false);
          return (
            <Fragment>
              {values.featureList.map((feature: any, index: number) => (
                <FeatureAccordion
                  onDelete={() => {
                    remove(index);
                  }}
                  index={index}
                  feature={feature}
                  handleChange={handleChange}
                />
              ))}

              <EuiFlexGroup
                alignItems="center"
                style={{ padding: '12px 24px' }}
              >
                <EuiFlexItem grow={false}>
                  <EuiButton
                    data-test-subj="addFeature"
                    isDisabled={values.featureList.length >= MAX_FEATURE_NUM}
                    onClick={() => push(initialize_feature())}
                  >
                    Add another feature
                  </EuiButton>
                  <EuiText size="s">
                    You can add{' '}
                    {Math.max(MAX_FEATURE_NUM - values.featureList.length, 0)}{' '}
                    more features
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </Fragment>
          );
        }}
      </FieldArray>
    );
  };

  const handleStartAdJob = async (detectorId: string) => {
    try {
      await dispatch(startDetector(detectorId));
      toastNotifications.addSuccess(
        `Detector job has been started successfully`
      );
    } catch (err) {
      toastNotifications.addDanger(
        getErrorMessage(err, 'There was a problem starting detector job')
      );
    }
  };

  const handleSaveFeatureOptionChange = useCallback((id: string) => {
    setSaveFeatureOption(id as SAVE_FEATURE_OPTIONS);
  }, []);

  const handleSubmit = async (values: any, setSubmitting: any) => {
    setSubmitting(true);
    try {
      const requestBody = prepareDetector(
        get(values, 'featureList', []),
        detector
      );
      await dispatch(updateDetector(detector.id, requestBody));
      toastNotifications.addSuccess('Feature updated');
      if (saveFeatureOption === 'start_ad_job') {
        handleStartAdJob(detector.id);
      }
      setSubmitting(false);
      props.history.push(`/detectors/${detectorId}`);
    } catch (err) {
      toastNotifications.addDanger(
        getErrorMessage(err, 'There was a problem updating feature')
      );
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <Formik
        enableReinitialize
        initialValues={{ featureList: generateInitialFeatures(detector) }}
        onSubmit={(values, actions) =>
          handleSubmit(values, actions.setSubmitting)
        }
        validate={validateFeatures}
      >
        {({
          values,
          isSubmitting,
          dirty,
          setSubmitting,
          handleChange,
          errors,
        }) => (
          <Form>
            <EuiPage>
              <EuiPageBody>
                <EuiPageHeader>
                  <EuiPageHeaderSection>
                    <EuiTitle size="l">
                      <h1>Edit features </h1>
                    </EuiTitle>
                  </EuiPageHeaderSection>
                </EuiPageHeader>
                <ContentPanel title="Features" subTitle={featureDescription()}>
                  {renderFeatures(handleChange)}
                </ContentPanel>
              </EuiPageBody>
            </EuiPage>

            {detector && detector.id ? (
              <SampleAnomalies
                detector={detector}
                featureList={values.featureList}
                errors={errors}
              />
            ) : null}

            <EuiPage>
              <EuiPageBody>
                {detector.enabled ? (
                  <EuiCallOut
                    title="Can't save feature changes as detector is running."
                    color="warning"
                    iconType="alert"
                  ></EuiCallOut>
                ) : null}

                {!!get(errors, 'featureList', []).filter(
                  featureError => featureError
                ).length ? (
                  <EuiCallOut
                    title="Can't save feature changes as there are errors"
                    color="warning"
                    iconType="alert"
                  ></EuiCallOut>
                ) : null}

                <EuiFlexGroup alignItems="center" justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty
                      onClick={() =>
                        props.history.push(`/detectors/${detectorId}`)
                      }
                    >
                      Cancel
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButton
                      fill
                      type="button"
                      data-test-subj="updateAdjustModel"
                      isLoading={isSubmitting}
                      disabled={
                        detector.enabled ||
                        isSubmitting ||
                        !!get(errors, 'featureList', []).filter(
                          featureError => featureError
                        ).length
                      }
                      onClick={() => {
                        if (values.featureList.length == 0) {
                          setSaveFeatureOption(
                            SAVE_FEATURE_OPTIONS.KEEP_AD_JOB_STOPPED
                          );
                        } else {
                          setSaveFeatureOption(
                            SAVE_FEATURE_OPTIONS.START_AD_JOB
                          );
                        }
                        setReadyToStartAdJob(values.featureList.length > 0);
                        if (values.featureList.length > 0) {
                          setShowSaveConfirmation(true);
                        } else {
                          setSaveFeatureOption(
                            SAVE_FEATURE_OPTIONS.KEEP_AD_JOB_STOPPED
                          );
                          handleSubmit(values, setSubmitting);
                        }
                      }}
                    >
                      Save changes
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiPageBody>
            </EuiPage>
            {showSaveConfirmation ? (
              <EuiOverlayMask>
                <SaveFeaturesConfirmModal
                  readyToStartAdJob={readyToStartAdJob}
                  saveFeatureOption={saveFeatureOption}
                  onClose={() => setShowSaveConfirmation(false)}
                  onCancel={() => setShowSaveConfirmation(false)}
                  onConfirm={() => {
                    handleSubmit(values, setSubmitting);
                    setShowSaveConfirmation(false);
                  }}
                  onOptionChange={handleSaveFeatureOptionChange}
                />
              </EuiOverlayMask>
            ) : null}
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}
