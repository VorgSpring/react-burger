import {
  createOrderRequest,
  createOrderCancel,
  createOrderSuccess,
  createOrderError,
  setCurrentOrder,
} from '../actions/order';
import { requestUser } from './user';
import { createOrderApi } from '../../api/order';
import { createOrderSelector } from '../../selectors/order';

export const createOrder = () => async (dispatch, getState) => {
  dispatch(createOrderRequest());

  const { burger, user } = createOrderSelector(getState());

  try {
    if (!user) {
      const { errorMessage } = await dispatch(requestUser());

      if (errorMessage) {
        dispatch(createOrderCancel());
        return;
      }
    }

    const { order } = await createOrderApi(burger);
    const { number } = order;

    dispatch(createOrderSuccess(number));
    dispatch(setCurrentOrder(number));
  } catch ({ message }) {
    dispatch(createOrderError(message));
  }
};
