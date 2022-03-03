import {
  REG_EXP_FOR_CHECK_EMAIL,
  REG_EXP_FOR_CHECK_PASSWORD,
} from '../../constants/regexp';
import {
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  NAME_FIELD_TYPE,
  CODE_FIELD_TYPE,
} from '../../constants/forms/types';

export const FormFieldsValidator = {
  [EMAIL_FIELD_TYPE](email) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [PASSWORD_FIELD_TYPE](password) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  },

  [NAME_FIELD_TYPE](name) {
    return name.length < 100;
  },

  [CODE_FIELD_TYPE](code) {
    return code.length < 10;
  },
};
