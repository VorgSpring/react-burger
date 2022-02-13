import {
  EMAIL_FIELD_NAME,
  PASSWORD_FIELD_NAME,
} from '../constants/forms';
import {
  REG_EXP_FOR_CHECK_EMAIL,
  REG_EXP_FOR_CHECK_PASSWORD,
} from '../constants/regexp';

export const resetError = (field, errors) => {
  if (errors[field]) {
    const { ...newErrors } = errors;
    newErrors.delete(field);
    return newErrors;
  }

  return errors;
};

export const ValidateFormFields = {
  [EMAIL_FIELD_NAME](email) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [PASSWORD_FIELD_NAME](password) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  },
};
