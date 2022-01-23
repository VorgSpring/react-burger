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
    const {
      success, message, order,
    } = await createOrderApi(burger);

    if (!success) {
      dispatch(createOrderError(message));
      return;
    }

    const { number } = order;

    dispatch(createOrderSuccess(number));
    dispatch(setCurrentOrder(number));
  } catch (error) {
    dispatch(createOrderError(error));
  }
};
