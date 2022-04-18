import { FormFieldTypes } from './types';
import { TFormStates } from '../../types/store';
import { FormStoreNames } from './store';

const CommonState = {
  isRequest: false,
  errors: {},
};

export const InitialStates: TFormStates = {
  [FormStoreNames.LOGIN]: {
    ...CommonState,
    values: {
      [FormFieldTypes.EMAIL_FIELD_TYPE]: '',
      [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
    },
  },

  [FormStoreNames.REGISTER]: {
    ...CommonState,
    values: {
      [FormFieldTypes.NAME_FIELD_TYPE]: '',
      [FormFieldTypes.EMAIL_FIELD_TYPE]: '',
      [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
    },
  },

  [FormStoreNames.FORGOT_PASSWORD]: {
    ...CommonState,
    values: {
      [FormFieldTypes.EMAIL_FIELD_TYPE]: '',
    },
  },

  [FormStoreNames.RESET_PASSWORD]: {
    ...CommonState,
    values: {
      [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
      [FormFieldTypes.CODE_FIELD_TYPE]: '',
    },
  },

  [FormStoreNames.PROFILE]: {
    ...CommonState,
    values: {
      [FormFieldTypes.NAME_FIELD_TYPE]: '',
      [FormFieldTypes.EMAIL_FIELD_TYPE]: '',
      [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
    },
  },
};
