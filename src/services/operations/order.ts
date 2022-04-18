import {
  createOrderRequest,
  createOrderCancel,
  createOrderSuccess,
  createOrderError,
  setCurrentOrder,
} from '../actions/order';
import { removeBurger } from '../actions/burger';
import { getUserRequest } from './user';
import { createOrderApi } from '../../api/order';
import { createOrderSelector } from '../../selectors/order';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const createOrder = () => async (dispatch, getState) => {
  dispatch(createOrderRequest());

  const { burger, user } = createOrderSelector(getState());

  try {
    if (!user) {
      const { errorMessage } = await dispatch(getUserRequest());

      if (errorMessage) {
        dispatch(createOrderCancel());
        return;
      }
    }

    const { order } = await createOrderApi(burger);
    const { number } = order;

    dispatch(createOrderSuccess(number));
    dispatch(setCurrentOrder(number));
    dispatch(removeBurger());
  } catch (e) {
    const { message } = e as { message: string };

    dispatch(createOrderError(message));
  }
};
