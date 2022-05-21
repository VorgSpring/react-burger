import { WebSocketTypes } from '../../services/actions/type';
import { InitialState } from '../../constants/orders/state';
import { OrdersTypes } from '../../constants/orders/types';
import { TOrderAtionsCreator, TOrdersState } from '../../types/order';

export type TOrdersReducer = (state: TOrdersState, action: TOrderAtionsCreator) => TOrdersState;
export const reducerCreator = (ordersType: keyof typeof OrdersTypes): TOrdersReducer => (
  (state = InitialState, action) => {
    const { type, payload } = action;

    const orders = payload?.orders || null;
    const total = payload?.total || null;
    const totalToday = payload?.totalToday || null;
    const error = payload?.error || null;

    switch (type) {
      case `${ordersType}_${WebSocketTypes.WS_CONNECTION_START}`:
        return {
          ...state,
          isUpdating: false,
          isConnecting: true,
          error: null,
        };

      case `${ordersType}_${WebSocketTypes.WS_CONNECTION_SUCCESS}`:
        return {
          ...state,
          isOpen: true,
          isConnecting: false,
          isClosed: false,
        };

      case `${ordersType}_${WebSocketTypes.WS_CONNECTION_ERROR}`:
        return {
          ...state,
          isConnecting: false,
          error,
        };

      case `${ordersType}_${WebSocketTypes.WS_CONNECTION_UPDATE_TOKEN}`:
        return {
          ...state,
          isUpdating: true,
        };

      case `${ordersType}_${WebSocketTypes.WS_CONNECTION_CLOSE}`:
        return {
          ...state,
          isOpen: false,
        };

      case `${ordersType}_${WebSocketTypes.WS_CONNECTION_CLOSED}`:
        return {
          ...state,
          isClosed: true,
        };

      case `${ordersType}_${WebSocketTypes.WS_GET_MESSAGE}`:
        return {
          ...state,
          orders,
          total,
          totalToday,
        };

      default:
        return state;
    }
  }
);
