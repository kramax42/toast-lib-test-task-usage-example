import {
  ANIMATION_VARIANTS,
  THEME_VARIANTS,
  TOAST_VARIANTS,
} from 'toast-lib-react-kra';

export const defaultToastConfig = {
  message: 'Hello, world!',
  theme: THEME_VARIANTS.dark,
  variant: TOAST_VARIANTS.info,
  animation: ANIMATION_VARIANTS.slide,
  duration: 5000,
  isAutoClose: true,
  toastsGap: 20,
  indent: 30,
  customColorConfig: {
    background: null,
    text: null,
    icon: null,
    progressBar: null,
  },
};
