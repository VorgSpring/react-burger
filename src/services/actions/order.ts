import { OrderActionTypes } from './type';
import {
  TCreateOrderRequest,
  TCreateOrderCancel,
  TCreateOrderSuccess,
  TCreateOrderError,
  TSetCurrentOrder,
  TRemoveCurrentOrder,
} from '../../types/actions/order';

export const createOrderRequest = (): TCreateOrderRequest => ({
  type: OrderActionTypes.CREATE_ORDER_REQUEST,
});

export const createOrderCancel = (): TCreateOrderCancel => ({
  type: OrderActionTypes.CREATE_ORDER_CANCEL,
});

export const createOrderSuccess = (): TCreateOrderSuccess => ({
  type: OrderActionTypes.CREATE_ORDER_SUCCESS,
});

export const createOrderError = (error: string): TCreateOrderError => ({
  type: OrderActionTypes.CREATE_ORDER_ERROR,
  payload: error,
});

export const setCurrentOrder = (orderNumber: number): TSetCurrentOrder => ({
  type: OrderActionTypes.SET_CURRENT_ORDER,
  payload: orderNumber,
});

export const removeCurrentOrder = (): TRemoveCurrentOrder => ({
  type: OrderActionTypes.REMOVE_CURRENT_ORDER,
});
