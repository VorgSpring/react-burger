import { RouteNames, RoutePaths } from '../routes';
import { OrdersTypes } from './types';

type TOrdersPaths = { [K in OrdersTypes]: string };
export const OrdersPaths: TOrdersPaths = {
  [OrdersTypes.ALL]: RoutePaths[RouteNames.FEED],
  [OrdersTypes.MY]: RoutePaths[RouteNames.ORDERS],
};
