import { formAtionsCreator } from '../actions/formActionCreator';
import { requestLoginApi } from '../../api/login';
import { LoginFieldNames, FormTypes } from '../../constants/forms';
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SET_ERROR,
} from '../actions/type';

export const requestLogin = () => async (dispatch, getState) => {
  dispatch(formAtionsCreator(FormTypes.LOGIN, FORM_SUBMIT_REQUEST));

  try {
    const { forms } = getState();
    const { email, password } = forms.login;

    await requestLoginApi({ email, password });
    dispatch(formAtionsCreator(FormTypes.LOGIN, FORM_SUBMIT_SUCCESS));
  } catch ({ message }) {
    dispatch(formAtionsCreator(FormTypes.LOGIN, FORM_SET_ERROR, {
      field: LoginFieldNames.REQUEST,
      message,
    }));
  }
};
