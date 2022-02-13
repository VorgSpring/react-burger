import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SET_CURRENT_ORDER,
  REMOVE_CURRENT_ORDER,
} from '../actions/type';
import { OrderState } from './initialState';

export const orderReducer = (state = OrderState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isCreating: false,
        orders: [...state.orders, action.payload],
      };

    case CREATE_ORDER_ERROR:
      return {
        ...state,
        isCreating: false,
        error: action.payload,
      };

    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };

    case REMOVE_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: null,
        error: null,
      };

    default:
      return state;
  }
};
