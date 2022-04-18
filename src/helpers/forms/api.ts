import { requestFormApi } from '../../api/form';
import { FormFieldTypes } from '../../constants/forms/types';
import { FormStoreNames } from '../../constants/forms/store';
import { FormActionTypes } from '../../services/actions/type';
import { formAtionsCreator } from './action';
import { TFormValues } from '../../types/form';

const getIncludedFields = (
  fields: TFormValues, excludedFields: Array<keyof TFormValues>,
): TFormValues => (
  Object.keys(fields)
    .filter((field) => !excludedFields.includes(field as keyof TFormValues))
    .reduce((acc, field) => {
      acc[field as keyof TFormValues] = fields[field as keyof TFormValues];
      return acc;
    }, {} as TFormValues)
);

export const formApiRequester = async (
  // @ts-ignore: В следующем спринте реализуется типизации хранилища.
  formType,
  // @ts-ignore: В следующем спринте реализуется типизации хранилища.
  dispatch,
  // @ts-ignore: В следующем спринте реализуется типизации хранилища.
  getState,
  options = {
    isAuthorization: false,
    excludedFields: [],
  },
) => {
  const {
    isAuthorization,
    excludedFields,
  } = options;

  dispatch(formAtionsCreator(formType, FormActionTypes.FORM_SUBMIT_REQUEST));

  try {
    const { forms } = getState();
    const storeName = FormStoreNames[formType as keyof typeof FormStoreNames];
    const fields = forms[storeName].values;
    const body = getIncludedFields(fields, excludedFields);

    const data = await requestFormApi(formType, body, isAuthorization);
    dispatch(formAtionsCreator(formType, FormActionTypes.FORM_SUBMIT_SUCCESS));

    return data;
  } catch (e) {
    const { message } = e as { message: string };

    dispatch(formAtionsCreator(formType, FormActionTypes.FORM_SET_ERROR, {
      field: FormFieldTypes.REQUEST_FIELD_TYPE,
      message,
    }));

    return { errorMessage: message };
  }
};
