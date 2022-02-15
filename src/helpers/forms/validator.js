import {
  REG_EXP_FOR_CHECK_EMAIL,
  REG_EXP_FOR_CHECK_PASSWORD,
} from '../../constants/regexp';
import {
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
} from '../../constants/forms/types';

export const FormFieldsValidator = {
  [EMAIL_FIELD_TYPE](email) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [PASSWORD_FIELD_TYPE](password) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  },
};
