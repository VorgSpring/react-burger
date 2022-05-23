import { TOrderState } from '../../types/state';
import { TOrderActionTypes } from '../../types/actions/order';
import { OrderActionTypes } from '../actions/type';
import { OrderState } from './initialState';

export const orderReducer = (
  state = OrderState,
  action: TOrderActionTypes,
): TOrderState => {
  switch (action.type) {
    case OrderActionTypes.CREATE_ORDER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case OrderActionTypes.CREATE_ORDER_CANCEL:
      return {
        ...state,
        isCreating: false,
      };

    case OrderActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isCreating: false,
        orders: [...state.orders, action.payload],
      };

    case OrderActionTypes.CREATE_ORDER_ERROR:
      return {
        ...state,
        isCreating: false,
        error: action.payload,
      };

    case OrderActionTypes.SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };

    case OrderActionTypes.REMOVE_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: null,
        error: null,
      };

    default:
      return state;
  }
};
