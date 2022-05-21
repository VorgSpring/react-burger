import { OrdersTypes } from '../../constants/orders/types';
import { ordersMiddleware } from '../../helpers/orders/middleware';

export const ordersMiddlewares = Object.keys(OrdersTypes).map((orderType) => (
  ordersMiddleware(OrdersTypes[orderType as keyof typeof OrdersTypes])
));
