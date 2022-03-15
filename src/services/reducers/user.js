import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  SET_USER,
  REMOVE_USER,
} from '../actions/type';
import { UserState } from './initialState';

export const userReducer = (state = UserState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isRequest: true,
        error: null,
      };

    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        isRequest: false,
      };

    case USER_REQUEST_ERROR:
      return {
        ...state,
        isRequest: false,
        error: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        error: null,
      };

    case REMOVE_USER:
      return UserState;

    default:
      return state;
  }
};
