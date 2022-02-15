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

export const formApiRequester = async (formType, dispatch, getState) => {
  dispatch(formAtionsCreator(formType, FORM_SUBMIT_REQUEST));
  let data = null;

  try {
    const { forms } = getState();
    const storeName = FormStoreNames[formType];
    const body = forms[storeName];

    data = await requestFormApi(formType, body);
    dispatch(formAtionsCreator(formType, FORM_SUBMIT_SUCCESS));

    return data;
  } catch ({ message }) {
    dispatch(formAtionsCreator(formType, FORM_SET_ERROR, {
      field: REQUEST_FIELD_TYPE,
      message,
    }));
  }

  return data;
};
