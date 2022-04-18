import { FormFieldTypes } from '../../constants/forms/types';
import { TFormValues } from '../../types/form';
import { TUser } from '../../types/user';

type TGetExcludedFieldsForProfileForm = (
  userValues: TUser | null,
  formValues: TFormValues,
) => FormFieldTypes[] | [];
export const getExcludedFieldsForProfileForm: TGetExcludedFieldsForProfileForm = (
  userValues, formValues,
) => {
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
    excludedFields.push(FormFieldTypes.EMAIL_FIELD_TYPE);
  }

  if (nameForm === nameUser) {
    excludedFields.push(FormFieldTypes.NAME_FIELD_TYPE);
  }

  if (newPassword === '') {
    excludedFields.push(FormFieldTypes.PASSWORD_FIELD_TYPE);
  }

  return excludedFields;
};

type TIsShowProfileButtons = (
  userValues: TUser | null,
  formValues: TFormValues,
) => boolean;
export const isShowProfileButtons: TIsShowProfileButtons = (userValues, formValues) => {
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
