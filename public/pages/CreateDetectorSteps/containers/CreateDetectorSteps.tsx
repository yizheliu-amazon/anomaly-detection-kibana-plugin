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
import {
  EuiSteps,
  EuiSpacer,
  EuiText
} from '@elastic/eui';


interface CreateRouterProps {
    detectorId?: string;
  }
  
  interface CreateDetectorStepsProps extends RouteComponentProps<CreateRouterProps> {
    isEdit: boolean;
  }

export const CreateDetectorSteps = (
  props: CreateDetectorStepsProps
) => {
    const [status, setStatus] = useState<"incomplete" | "complete" | "warning" | "danger" | "disabled" | undefined>('incomplete');
    const firstSetOfSteps = [
        {
          title: 'Normal step',
          children: <p>Do this first</p>,
        },
        {
          title: 'Push the button to complete this final step',
          children: (
            <Fragment>
              <p>We are fancy buttons just waiting to be pushed!</p>
              <EuiSpacer />
              <EuiText>Hello</EuiText>>
            </Fragment>
          ),
          status: status,
        },
      ];

  return (
    <React.Fragment>
      <EuiSteps steps={firstSetOfSteps} />
    </React.Fragment>
  );
};
