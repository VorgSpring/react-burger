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
import { TAppThunk } from '../../types/store';
import { ResponceStatuses } from '../../constants/responce';
import { FormFieldTypes, FormTypes } from '../../constants/forms/types';
import { FormActionTypes } from '../actions/type';
import { formAtionsCreator } from '../../helpers/forms/action';
import { changeProfile } from './profile';
import { getTokenApi } from '../../api/token';

export const createOrder: TAppThunk = () => (
  async (dispatch, getState) => {
    dispatch(createOrderRequest());

    const { burger, user } = createOrderSelector(getState());

    try {
      if (!user) {
        const data = await dispatch(getUserRequest());
        const { errorMessage } = data as { errorMessage: string };

        if (errorMessage) {
          dispatch(createOrderCancel());
          return;
        }
      }

      const { order } = await createOrderApi(burger);
      const { number } = order;

      dispatch(createOrderSuccess());
      dispatch(setCurrentOrder(number));
      dispatch(removeBurger());
    } catch (orderError) {
      const { message: orderErrorMessage } = orderError as { message: string };

      if (orderErrorMessage === ResponceStatuses.FORBIDDEN) {
        try {
          const callback = () => {
            dispatch(changeProfile());
          };

          await getTokenApi(callback);
        } catch (tokenError) {
          const { message: tokenErrorMessage } = tokenError as { message: string };

          dispatch(formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_ERROR, {
            field: FormFieldTypes.REQUEST_FIELD_TYPE,
            message: tokenErrorMessage,
          }));
        }
      } else {
        dispatch(createOrderError(orderErrorMessage));
      }
    }
  }
);
