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
    const newErrors = { ...errors };
    delete newErrors[field];
    return newErrors;
  }

  return errors;
};

export const FormFieldsValidator = {
  [EMAIL_FIELD_NAME](email) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [PASSWORD_FIELD_NAME](password) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  },
};

export const clearValues = (values) => (
  Object.keys(values)
    .reduce((acc, field) => {
      acc[field] = '';
      return acc;
    }, {})
);
