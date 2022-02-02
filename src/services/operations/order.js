import {
  createOrderRequest,
  createOrderSuccess,
  createOrderError,
  setCurrentOrder,
} from '../actions/order';
import { createOrderApi } from '../../api/order';

export const createOrder = () => async (dispatch, getState) => {
  dispatch(createOrderRequest());

  try {
    const { burger } = getState();
    const { order } = await createOrderApi(burger);
    const { number } = order;

    dispatch(createOrderSuccess(number));
    dispatch(setCurrentOrder(number));
  } catch ({ message }) {
    dispatch(createOrderError(message));
  }
};
