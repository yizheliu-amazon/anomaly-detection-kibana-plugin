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
import { CoreStart } from '../../../../../../src/core/public';
import { APIAction } from '../../../redux/middleware/types';
import { CoreServicesContext } from '../../../components/CoreServices/CoreServices';
import { useHideSideNavBar } from '../../main/hooks/useHideSideNavBar';
import {
  STEP_STATUS,
  INITIAL_DETECTOR_VALUES,
  INITIAL_DETECTOR_DEFINITION_VALUES,
  INITIAL_MODEL_CONFIGURATION_VALUES,
  INITIAL_DETECTOR_JOB_VALUES,
} from '../utils/constants';
import { DefineDetector } from './DefineDetector';
import { ConfigureModel } from './ConfigureModel';
import { DetectorJobs } from './DetectorJobs';
import { ReviewAndCreate } from './ReviewAndCreate';
import {
  DetectorDefinitionFormikValues,
  ModelConfigurationFormikValues,
  DetectorJobsFormikValues,
  CreateDetectorFormikValues,
} from '../models/interfaces';

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

  const [step1Fields, setStep1Fields] = useState<
    DetectorDefinitionFormikValues
  >(INITIAL_DETECTOR_DEFINITION_VALUES);
  const [step2Fields, setStep2Fields] = useState<
    ModelConfigurationFormikValues
  >(INITIAL_MODEL_CONFIGURATION_VALUES);
  const [step3Fields, setStep3Fields] = useState<DetectorJobsFormikValues>(
    INITIAL_DETECTOR_JOB_VALUES
  );
  const [step4Fields, setStep4Fields] = useState<CreateDetectorFormikValues>({
    ...step1Fields,
    ...step2Fields,
    ...step3Fields,
  });

  const [curStep, setCurStep] = useState<number>(1);

  const handleCancelClick = () => {
    props.history.push('/detectors');
  };

  const onCreate = () => {
    console.log('Placeholder for creating detector');
  };

  const step1Body = (
    <DefineDetector
      isEdit={false}
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      initialValues={step1Fields}
      setInitialValues={setStep1Fields}
      {...props}
    />
  );
  const step2Body = (
    <ConfigureModel
      isEdit={false}
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      initialValues={step2Fields}
      setInitialValues={setStep2Fields}
      {...props}
    />
  );
  const step3Body = (
    <DetectorJobs
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      initialValues={step3Fields}
      setInitialValues={setStep3Fields}
    />
  );
  const step4Body = (
    <ReviewAndCreate
      setStep={setCurStep}
      handleCancelClick={handleCancelClick}
      initialValues={step4Fields}
    />
  );

  // Hook to update the field values needed for the review step
  useEffect(() => {
    setStep4Fields({
      ...step1Fields,
      ...step2Fields,
      ...step3Fields,
    });
  }, [step1Fields, step2Fields, step3Fields]);

  // Hook to update the progress of the steps - undefined = blue, disabled = grey
  useEffect(() => {
    switch (curStep) {
      case 1:
      default:
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
      <EuiFlexGroup direction="row">
        <EuiFlexItem grow={false}>
          <EuiSteps steps={createSteps} />
        </EuiFlexItem>
        <EuiFlexItem>
          {curStep === 1
            ? step1Body
            : curStep === 2
            ? step2Body
            : curStep === 3
            ? step3Body
            : curStep === 4
            ? step4Body
            : null}
        </EuiFlexItem>
      </EuiFlexGroup>
    </Fragment>
  );
};
