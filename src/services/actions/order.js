import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SET_CURRENT_ORDER,
  REMOVE_CURRENT_ORDER,
} from './type';

export const createOrderRequest = () => ({
  type: CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = (orderNumber) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: orderNumber,
});

export const createOrderError = (error) => ({
  type: CREATE_ORDER_ERROR,
  payload: error,
});

export const setCurrentOrder = (orderNumber) => ({
  type: SET_CURRENT_ORDER,
  payload: orderNumber,
});

export const removeCurrentOrder = () => ({
  type: REMOVE_CURRENT_ORDER,
});
