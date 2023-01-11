import React, { useState } from 'react';
import { TOAST_POSITIONS } from 'toast-lib-react-kra';

import { ToastsContainerConfig } from '@/components/ToastsContainerConfig';

import { Wrapper } from './styled';

export function ToastContainers() {
  const [position1, setPosition1] = useState(TOAST_POSITIONS.topRight);
  const [position2, setPosition2] = useState(TOAST_POSITIONS.bottomLeft);

  const onChangePosition1 = (event) => {
    const newPosition = event.target.value;
    if (newPosition !== position2) {
      setPosition1(newPosition);
    }
  };

  const onChangePosition2 = (event) => {
    const newPosition = event.target.value;
    if (newPosition !== position1) {
      setPosition2(newPosition);
    }
  };

  return (
    <Wrapper>
      <ToastsContainerConfig
        id={1}
        onChangePosition={onChangePosition1}
        position={position1}
      />
      <ToastsContainerConfig
        id={2}
        onChangePosition={onChangePosition2}
        position={position2}
      />
    </Wrapper>
  );
}
