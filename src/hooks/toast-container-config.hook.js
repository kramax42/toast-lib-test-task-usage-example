import React, { useReducer } from 'react';
import { createToast } from 'toast-lib-react-kra';

import { defaultToastConfig } from '@/constants/default-toast-config';

function reducer(state, action) {
  switch (action.type) {
    case 'message':
      return { ...state, message: action.payload };
    case 'theme':
      return { ...state, theme: action.payload };
    case 'variant':
      return { ...state, variant: action.payload };
    case 'animation':
      return { ...state, animation: action.payload };
    case 'duration':
      return { ...state, duration: action.payload };
    case 'indent':
      return { ...state, indent: action.payload };
    case 'toastsGap':
      return { ...state, toastsGap: action.payload };
    case 'isAutoClose':
      return { ...state, isAutoClose: action.payload };
    case 'backgroundColor':
      return {
        ...state,
        customColorConfig: {
          ...state.customColorConfig,
          background: action.payload,
        },
      };
    case 'textColor':
      return {
        ...state,
        customColorConfig: {
          ...state.customColorConfig,
          text: action.payload,
        },
      };
    case 'iconColor':
      return {
        ...state,
        customColorConfig: {
          ...state.customColorConfig,
          icon: action.payload,
        },
      };
    case 'progressBarColor':
      return {
        ...state,
        customColorConfig: {
          ...state.customColorConfig,
          progressBar: action.payload,
        },
      };
    default:
      return state;
  }
}

export function useToastsContainerConfig(position) {
  const [toastConfig, dispatch] = useReducer(reducer, defaultToastConfig);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  const onChangeAutoClose = (event) => {
    dispatch({ type: 'isAutoClose', payload: event.target.checked });
  };

  const onClickMakeToast = () => {
    createToast({
      position,
      message: toastConfig.message,
      theme: toastConfig.theme,
      variant: toastConfig.variant,
      animation: toastConfig.animation,
      duration: toastConfig.duration,
      isAutoClose: toastConfig.isAutoClose,
      customColorConfig: toastConfig.customColorConfig,
    });
  };

  return { toastConfig, onClickMakeToast, onChangeAutoClose, onChangeHandler };
}
