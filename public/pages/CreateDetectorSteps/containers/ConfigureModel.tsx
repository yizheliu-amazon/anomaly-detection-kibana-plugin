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
import { Form, Formik } from 'formik';
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
  generateInitialFeatures,
  validateFeatures,
  getCategoryFields,
  getShingleSizeFromObject,
} from '../utils/helpers';
import { Features } from '../components/Features';
import { CategoryField } from '../components/CategoryField';
import { AdvancedSettings } from '../components/AdvancedSettings';
import { SampleAnomalies } from './SampleAnomalies';
import { CoreStart } from '../../../../../../src/core/public';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';

interface ConfigureModelRouterProps {
  detectorId?: string;
}

interface ConfigureModelProps
  extends RouteComponentProps<ConfigureModelRouterProps> {
  isEdit: boolean;
  setStep(stepNumber: number): void;
  handleCancelClick(): void;
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

  const originalShingleSize = getShingleSizeFromObject(detector, isHCDetector);

  return (
    <Fragment>
      <Formik
        enableReinitialize
        initialValues={{
          featureList: generateInitialFeatures(detector),
          shingleSize: originalShingleSize,
          categoryField: get(detector, 'categoryField', []),
        }}
        onSubmit={() => {}}
        validate={validateFeatures}
      >
        {(formikProps) => (
          <Fragment>
            <Form>
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
            </Form>

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
                    props.setStep(1);
                  }}
                >
                  Previous
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton
                  iconSide="right"
                  iconType="arrowRight"
                  fill={true}
                  data-test-subj="configureModelNextButton"
                  //isLoading={formikProps.isSubmitting}
                  //@ts-ignore
                  onClick={() => {
                    props.setStep(3);
                  }}
                >
                  Next
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </Fragment>
        )}
      </Formik>
    </Fragment>
  );
}
