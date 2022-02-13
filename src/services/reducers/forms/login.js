import {
  LOGIN_FORM_SET_VALUE,
  LOGIN_FORM_SUBMIT_REQUEST,
  LOGIN_FORM_SUBMIT_SUCCESS,
  LOGIN_FORM_SET_ERROR,
} from '../../actions/type';
import { LoginState } from './initialState';
import { resetError } from '../../../helpers/forms';

export const loginFormReducer = (state = LoginState, action) => {
  switch (action.type) {
    case LOGIN_FORM_SET_VALUE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        errors: resetError(action.payload.field, state.errors),
      };

    case LOGIN_FORM_SUBMIT_REQUEST:
      return {
        ...state,
        isRequest: true,
        errors: {},
      };

    case LOGIN_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isRequest: false,
      };

    case LOGIN_FORM_SET_ERROR:
      return {
        ...state,
        isRequest: false,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.message,
        },
      };

    default:
      return state;
  }
};
