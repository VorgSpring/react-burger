import {
  GET_MAIN_BURGER,
} from '../actions/type';
import { burgerState } from './initialState';

export const burgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case GET_MAIN_BURGER:
      return { ...action.payload };

    default:
      return state;
  }
};
