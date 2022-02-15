import {
  NAME_FIELD_TYPE,
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  CODE_FIELD_TYPE,
  FormTypes,
} from './types';

const CommonState = {
  isRequest: false,
  errors: {},
};

export const InitialStates = {
  [FormTypes.LOGIN]: {
    ...CommonState,
    values: {
      [EMAIL_FIELD_TYPE]: '',
      [PASSWORD_FIELD_TYPE]: '',
    },
  },

  [FormTypes.REGISTER]: {
    ...CommonState,
    values: {
      [NAME_FIELD_TYPE]: '',
      [EMAIL_FIELD_TYPE]: '',
      [PASSWORD_FIELD_TYPE]: '',
    },
  },

  [FormTypes.FORGOT_PASSWORD]: {
    ...CommonState,
    values: {
      [EMAIL_FIELD_TYPE]: '',
    },
  },

  [FormTypes.RESET_PASSWORD]: {
    ...CommonState,
    values: {
      [PASSWORD_FIELD_TYPE]: '',
      [CODE_FIELD_TYPE]: '',
    },
  },

  [FormTypes.PROFILE]: {
    ...CommonState,
    values: {
      [NAME_FIELD_TYPE]: '',
      [EMAIL_FIELD_TYPE]: '',
      [PASSWORD_FIELD_TYPE]: '',
    },
  },
};
