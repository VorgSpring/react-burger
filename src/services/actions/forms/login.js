import {
  LOGIN_FORM_SET_VALUE,
  LOGIN_FORM_SUBMIT_REQUEST,
  LOGIN_FORM_SUBMIT_SUCCESS,
  LOGIN_FORM_SET_ERROR,
} from '../type';

export const loginFormSetValue = ({ field, value }) => ({
  type: LOGIN_FORM_SET_VALUE,
  payload: { field, value },
});

export const loginFormSubmitRequest = () => ({
  type: LOGIN_FORM_SUBMIT_REQUEST,
});

export const loginFormSubmitSuccess = () => ({
  type: LOGIN_FORM_SUBMIT_SUCCESS,
});

export const loginFormSubmitError = ({ field, message }) => ({
  type: LOGIN_FORM_SET_ERROR,
  payload: { field, message },
});
