import {
  EMAIL_FIELD_TYPE,
  NAME_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
} from '../../constants/forms/types';

export const getExcludedFieldsForProfileForm = (userValues, formValues) => {
  if (userValues === null) {
    return [];
  }

  const {
    email: emailUser,
    name: nameUser,
  } = userValues;

  const {
    email: emailForm,
    name: nameForm,
    password: newPassword,
  } = formValues;

  const excludedFields = [];

  if (emailForm === emailUser) {
    excludedFields.push(EMAIL_FIELD_TYPE);
  }

  if (nameForm === nameUser) {
    excludedFields.push(NAME_FIELD_TYPE);
  }

  if (newPassword === '') {
    excludedFields.push(PASSWORD_FIELD_TYPE);
  }

  return excludedFields;
};

export const isShowProfileButtons = (userValues, formValues) => {
  if (userValues === null) {
    return false;
  }

  const {
    email: emailUser,
    name: nameUser,
  } = userValues;

  const {
    email: emailForm,
    name: nameForm,
    password: newPassword,
  } = formValues;

  return (
    emailForm !== emailUser
    || nameForm !== nameUser
    || newPassword !== ''
  );
};
