import {
  GET_USER_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_USER_ERROR,
  SET_USER,
  REMOVE_USER,
} from '../actions/type';
import { UserState } from './initialState';

export const userReducer = (state = UserState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isRequest: true,
        error: null,
      };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isRequest: false,
      };

    case GET_USER_ERROR:
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
      };

    case REMOVE_USER:
      return {
        ...state,
        email: null,
        name: null,
      };

    default:
      return state;
  }
};
