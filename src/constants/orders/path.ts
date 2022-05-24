import { RoutePaths } from '../routes';
import { OrdersTypes } from './types';

type TOrdersPaths = { [K in OrdersTypes]: string };
export const OrdersPaths: TOrdersPaths = {
  [OrdersTypes.ALL]: RoutePaths.FEED,
  [OrdersTypes.MY]: RoutePaths.ORDERS,
};
