import React from 'react';
import PropTypes from 'prop-types';
import {
  ANIMATION_VARIANTS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
  ToastsContainer,
} from 'toast-lib-react-kra';

import { useToastsContainerConfig } from '@/hooks/toast-container-config.hook';

import {
  Button,
  CheckBox,
  ColorInput,
  Content,
  Input,
  Label,
  Option,
  Select,
  Title,
} from './styled';

export function ToastsContainerConfig({ id, position, onChangePosition }) {
  const { toastConfig, onClickMakeToast, onChangeAutoClose, onChangeHandler } =
    useToastsContainerConfig(position);

  const {
    message,
    variant,
    duration,
    animation,
    isAutoClose,
    indent,
    toastsGap,
    customColorConfig,
  } = toastConfig;

  return (
    <>
      <ToastsContainer
        position={position}
        indent={indent}
        toastsGap={toastsGap}
      />
      <Content>
        <Title>Toasts container {id}</Title>
        <Button data-test={`create-toast-btn-${id}`} onClick={onClickMakeToast}>
          Create Toast
        </Button>
        <Label>
          {'auto close? '}
          <CheckBox checked={isAutoClose} onChange={onChangeAutoClose} />
        </Label>
        <Label>
          toast message:
          <Input name="message" value={message} onChange={onChangeHandler} />
        </Label>
        <Label>
          duration:
          <Input
            data-test={`duration-input-${id}`}
            disabled={!isAutoClose}
            type="number"
            name="duration"
            value={duration}
            onChange={onChangeHandler}
          />
        </Label>
        <Label>
          container indent:
          <Input
            type="number"
            name="indent"
            value={indent}
            onChange={onChangeHandler}
          />
        </Label>

        <Label>
          toasts gap:
          <Input
            type="number"
            name="toastsGap"
            value={toastsGap}
            onChange={onChangeHandler}
          />
        </Label>
        <Label>
          toast variant:
          <Select name="variant" value={variant} onChange={onChangeHandler}>
            {Object.values(TOAST_VARIANTS).map((variant) => {
              return (
                <Option key={variant} value={variant}>
                  {variant}
                </Option>
              );
            })}
          </Select>
        </Label>
        <Label>
          toast position:
          <Select name="position" value={position} onChange={onChangePosition}>
            {Object.values(TOAST_POSITIONS).map((position) => {
              return (
                <Option key={position} value={position}>
                  {position}
                </Option>
              );
            })}
          </Select>
        </Label>
        <Label>
          animation variant:
          <Select name="animation" value={animation} onChange={onChangeHandler}>
            {Object.values(ANIMATION_VARIANTS).map((animationVariant) => {
              return (
                <Option key={animationVariant} value={animationVariant}>
                  {animationVariant}
                </Option>
              );
            })}
          </Select>
        </Label>
        <Label>
          {'background color: '}
          <ColorInput
            name="backgroundColor"
            value={customColorConfig.background}
            onChange={onChangeHandler}
          />
        </Label>
        <Label>
          {'text color: '}
          <ColorInput
            name="textColor"
            value={customColorConfig.text}
            onChange={onChangeHandler}
          />
        </Label>
        <Label>
          {'icon color: '}
          <ColorInput
            name="iconColor"
            value={customColorConfig.icon}
            onChange={onChangeHandler}
          />
        </Label>
        <Label>
          {'progressbar color: '}
          <ColorInput
            name="progressBarColor"
            value={customColorConfig.progressBar}
            onChange={onChangeHandler}
          />
        </Label>
      </Content>
    </>
  );
}

ToastsContainerConfig.propTypes = {
  id: PropTypes.number.isRequired,
  position: PropTypes.oneOf(Object.values(TOAST_POSITIONS)).isRequired,
  onChangePosition: PropTypes.func.isRequired,
};
