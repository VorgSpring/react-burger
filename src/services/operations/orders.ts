import { TAppThunk } from '../../types/store';
import { WebSocketTypes } from '../actions/type';
import { getTokenApi } from '../../api/token';
import { OrdersTypes } from '../../constants/orders/types';
import { ordersAtionsCreator } from '../../helpers/orders/action';

export const updateUserToken: TAppThunk = (wsType: OrdersTypes) => (
  async (dispatch) => {
    try {
      const callback = () => {
        dispatch(ordersAtionsCreator(wsType, WebSocketTypes.WS_CONNECTION_START));
      };

      dispatch(ordersAtionsCreator(wsType, WebSocketTypes.WS_CONNECTION_UPDATE_TOKEN));
      await getTokenApi(callback);
    } catch (tokenError) {
      const { message: tokenErrorMessage } = tokenError as { message: string };

      dispatch(ordersAtionsCreator(
        wsType,
        WebSocketTypes.WS_CONNECTION_ERROR,
        {
          error: tokenErrorMessage,
        },
      ));
    }
  }
);
