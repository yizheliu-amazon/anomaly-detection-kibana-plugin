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
import { EuiSteps, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Formik } from 'formik';
import { CoreStart } from '../../../../../../src/core/public';
import { APIAction } from '../../../redux/middleware/types';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import { STEP_STATUS, INITIAL_DETECTOR_VALUES } from '../utils/constants';
import { DefineDetector } from './DefineDetector';
import { ConfigureModel } from './ConfigureModel';
import { DetectorJobs } from './DetectorJobs';
import { ReviewAndCreate } from './ReviewAndCreate';
import { DetectorDefinitionFormikValues } from '../models/interfaces';

interface CreateDetectorRouterProps {
  detectorId?: string;
}

interface CreateDetectorStepsProps
  extends RouteComponentProps<CreateDetectorRouterProps> {
  isEdit: boolean;
}

export const CreateDetectorSteps = (props: CreateDetectorStepsProps) => {
  const core = React.useContext(CoreServicesContext) as CoreStart;
  useHideSideNavBar(true, false);
  const dispatch = useDispatch<Dispatch<APIAction>>();

  const [step1Status, setStep1Status] = useState<STEP_STATUS>(undefined);
  const [step2Status, setStep2Status] = useState<STEP_STATUS>('disabled');
  const [step3Status, setStep3Status] = useState<STEP_STATUS>('disabled');
  const [step4Status, setStep4Status] = useState<STEP_STATUS>('disabled');

  const [curStep, setCurStep] = useState<number>(1);

  const handleCancelClick = () => {
    props.history.push('/detectors');
  };

  const onCreate = () => {
    console.log('Placeholder for creating detector');
  };

  const renderStep1Body = (formikProps: any) => (
    <DefineDetector
      isEdit={false}
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      formikProps={formikProps}
      {...props}
    />
  );
  const step2Body = (
    <ConfigureModel
      isEdit={false}
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      {...props}
    />
  );
  const step3Body = (
    <DetectorJobs setStep={setCurStep} handleCancelClick={handleCancelClick} />
  );
  const step4Body = (
    <ReviewAndCreate
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      onCreate={onCreate}
    />
  );

  useEffect(() => {
    switch (curStep) {
      case 1:
        setStep1Status(undefined);
        setStep2Status('disabled');
        setStep3Status('disabled');
        setStep4Status('disabled');
        break;
      case 2:
        setStep1Status(undefined);
        setStep2Status(undefined);
        setStep3Status('disabled');
        setStep4Status('disabled');
        break;
      case 3:
        setStep1Status(undefined);
        setStep2Status(undefined);
        setStep3Status(undefined);
        setStep4Status('disabled');
        break;
      case 4:
        setStep1Status(undefined);
        setStep2Status(undefined);
        setStep3Status(undefined);
        setStep4Status(undefined);
        break;
    }
  }, [curStep]);

  const createSteps = [
    {
      title: 'Define detector',
      status: step1Status,
      children: undefined,
    },
    {
      title: 'Configure model',
      status: step2Status,
      children: undefined,
    },
    {
      title: 'Set up detector jobs',
      status: step3Status,
      children: undefined,
    },
    {
      title: 'Review and create',
      status: step4Status,
      children: undefined,
    },
  ];

  return (
    <Fragment>
      <Formik
        enableReinitialize={true}
        initialValues={INITIAL_DETECTOR_VALUES}
        onSubmit={() => {}}
        isInitialValid={false}
      >
        {(formikProps) => (
          <EuiFlexGroup direction="row">
            <EuiFlexItem grow={false}>
              <EuiSteps steps={createSteps} />
            </EuiFlexItem>
            <EuiFlexItem>
              {curStep === 1
                ? renderStep1Body(formikProps)
                : curStep === 2
                ? step2Body
                : curStep === 3
                ? step3Body
                : curStep === 4
                ? step4Body
                : null}
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
      </Formik>
    </Fragment>
  );
};
