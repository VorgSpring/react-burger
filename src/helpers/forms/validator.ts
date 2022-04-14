import {
  REG_EXP_FOR_CHECK_EMAIL,
  REG_EXP_FOR_CHECK_PASSWORD,
} from '../../constants/regexp';
import { FormFieldTypes } from '../../constants/forms/types';

export const FormFieldsValidator = {
  [FormFieldTypes.EMAIL_FIELD_TYPE](email: string) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [FormFieldTypes.PASSWORD_FIELD_TYPE](password: string) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  },

  [FormFieldTypes.NAME_FIELD_TYPE](name: string) {
    return name.length < 100;
  },

  [FormFieldTypes.CODE_FIELD_TYPE](code: string) {
    return code.length === 36;
  },
};
