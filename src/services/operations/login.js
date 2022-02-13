import {
  loginFormSubmitRequest,
  loginFormSubmitSuccess,
  loginFormSetError,
} from '../actions/forms/login';
import { requestLoginApi } from '../../api/login';
import { LoginFieldNames } from '../../constants/forms';

export const requestLogin = () => async (dispatch, getState) => {
  dispatch(loginFormSubmitRequest());

  try {
    const { forms } = getState();
    const { email, password } = forms.login;

    await requestLoginApi({ email, password });
    dispatch(loginFormSubmitSuccess());
  } catch ({ message }) {
    dispatch(loginFormSetError({
      field: LoginFieldNames.REQUEST,
      message,
    }));
  }
};
