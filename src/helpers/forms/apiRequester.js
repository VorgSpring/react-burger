import { requestFormApi } from '../../api/form';
import {
  REQUEST_FIELD_TYPE,
} from '../../constants/forms/types';
import { FormStoreNames } from '../../constants/forms/store';
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SET_ERROR,
} from '../../services/actions/type';
import { formAtionsCreator } from './actionCreator';

const getIncludedFields = (fields, excludedFields) => (
  Object.keys(fields)
    .filter((field) => !excludedFields.includes(field))
    .reduce((acc, field) => {
      acc[field] = fields[field];
      return acc;
    }, {})
);

export const formApiRequester = async (formType, dispatch, getState, options = {}) => {
  const {
    isAuthorization = false,
    excludedFields = [],
  } = options;

  dispatch(formAtionsCreator(formType, FORM_SUBMIT_REQUEST));

  try {
    const { forms } = getState();
    const storeName = FormStoreNames[formType];
    const fields = forms[storeName].values;
    const body = getIncludedFields(fields, excludedFields);

    const data = await requestFormApi(formType, body, isAuthorization);
    dispatch(formAtionsCreator(formType, FORM_SUBMIT_SUCCESS));

    return data;
  } catch ({ message }) {
    dispatch(formAtionsCreator(formType, FORM_SET_ERROR, {
      field: REQUEST_FIELD_TYPE,
      message,
    }));

    return { errorMessage: message };
  }
};
