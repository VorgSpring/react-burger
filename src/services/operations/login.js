import {
  loginFormSubmitRequest,
  loginFormSubmitSuccess,
  loginFormSubmitError,
} from '../actions/forms/login';
import { requestLoginApi } from '../../api/login';
import { LoginFieldTypes } from '../../constants/forms';

export const requestLogin = ({ email, password }) => async (dispatch) => {
  dispatch(loginFormSubmitRequest());

  try {
    await requestLoginApi({ email, password });
    dispatch(loginFormSubmitSuccess());
  } catch ({ message }) {
    dispatch(loginFormSubmitError({
      field: LoginFieldTypes.REQUEST,
      message,
    }));
  }
};
