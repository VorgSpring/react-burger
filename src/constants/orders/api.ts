import { BASE_SOCKET_URL } from '../api';
import { OrdersTypes } from './types';

export const OrdersSoketUrls: { [K in OrdersTypes]: string } = {
  [OrdersTypes.ALL]: `${BASE_SOCKET_URL}/orders/all`,
  [OrdersTypes.MY]: `${BASE_SOCKET_URL}/orders`,
};
