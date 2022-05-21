import type { Middleware } from 'redux';
import { SOMETHING_WRONG_ERROR } from '../../constants/errors';
import { OrdersTypes } from '../../constants/orders/types';
import { WSResponceStatuses } from '../../constants/responce';
import { WebSocketTypes } from '../../services/actions/type';
import { updateUserToken } from '../../services/operations/orders';
import { TAppDispatch } from '../../types/operation';
import { TStore } from '../../types/store';
import { ordersAtionsCreator } from './action';
import { getPreparedOrdersData, getWsUrl } from './util';

export const ordersMiddleware = (
  wsType: OrdersTypes,
): Middleware<TAppDispatch, TStore> => ((
  store,
) => {
  let socket: WebSocket | null = null;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;

    if (type === `${wsType}_${WebSocketTypes.WS_CONNECTION_START}`) {
      if (socket) {
        return;
      }

      socket = new WebSocket(getWsUrl(wsType));

      timeout = setTimeout(() => {
        dispatch(ordersAtionsCreator(
          wsType,
          WebSocketTypes.WS_CONNECTION_ERROR,
          {
            error: SOMETHING_WRONG_ERROR,
          },
        ));

        socket?.close();
      }, 10000);
    }

    if (type === `${wsType}_${WebSocketTypes.WS_CONNECTION_CLOSE}` && socket) {
      socket.close();
    }

    if (socket) {
      socket.onopen = () => {
        dispatch(ordersAtionsCreator(wsType, WebSocketTypes.WS_CONNECTION_SUCCESS));

        if (timeout !== null) {
          clearTimeout(timeout);
          timeout = null;
        }
      };

      socket.onerror = () => {
        dispatch(ordersAtionsCreator(
          wsType,
          WebSocketTypes.WS_CONNECTION_ERROR,
          {
            error: SOMETHING_WRONG_ERROR,
          },
        ));
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const { success, message } = data;

        if (!success) {
          if (message === WSResponceStatuses.FORBIDDEN) {
            // @ts-ignore: Ошибка библиотеки
            // ThunkAction is not assignable to parameter of type 'AnyAction'.
            dispatch(updateUserToken(wsType));
            return;
          }

          dispatch(ordersAtionsCreator(
            wsType,
            WebSocketTypes.WS_CONNECTION_ERROR,
            {
              error: message,
            },
          ));
          return;
        }

        const { orders, total, totalToday } = data;

        dispatch(ordersAtionsCreator(
          wsType,
          WebSocketTypes.WS_GET_MESSAGE,
          { orders: getPreparedOrdersData(orders, type === OrdersTypes.MY), total, totalToday },
        ));
      };

      socket.onclose = () => {
        dispatch(ordersAtionsCreator(wsType, WebSocketTypes.WS_CONNECTION_CLOSED));
        socket = null;
      };
    }

    next(action);
  };
}) as Middleware;
