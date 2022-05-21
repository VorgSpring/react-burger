import { OrdersTypes } from '../../constants/orders/types';
import { WebSocketTypes } from '../../services/actions/type';
import { TOrderAtionsCreator, TOrderAtionsPayloads } from '../../types/order';

export const ordersAtionsCreator = (
  type: OrdersTypes, action: WebSocketTypes, payload?: TOrderAtionsPayloads,
): TOrderAtionsCreator => ({
  type: `${type}_${action}`,
  payload,
});
