import { OrderActionTypes } from '../../services/actions/type';

export type TCreateOrderRequest = {
  type: OrderActionTypes.CREATE_ORDER_REQUEST;
};

export type TCreateOrderCancel = {
  type: OrderActionTypes.CREATE_ORDER_CANCEL;
};

export type TCreateOrderSuccess = {
  type: OrderActionTypes.CREATE_ORDER_SUCCESS;
  payload: number;
};

export type TCreateOrderError = {
  type: OrderActionTypes.CREATE_ORDER_ERROR;
  payload: string;
};

export type TSetCurrentOrder = {
  type: OrderActionTypes.SET_CURRENT_ORDER;
  payload: number;
};

export type TRemoveCurrentOrder = {
  type: OrderActionTypes.REMOVE_CURRENT_ORDER;
};

export type TOrderActionTypes = TCreateOrderRequest
| TCreateOrderCancel
| TCreateOrderSuccess
| TCreateOrderError
| TSetCurrentOrder
| TRemoveCurrentOrder;
