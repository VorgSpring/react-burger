import { reducerCreator } from '../../helpers/orders/reducer';
import { OrdersTypes } from '../../constants/orders/types';
import { OrderStoreNames } from '../../constants/orders/store';

export const ordersReducer = {
  [OrderStoreNames.ALL]: reducerCreator(OrdersTypes.ALL),
  [OrderStoreNames.MY]: reducerCreator(OrdersTypes.MY),
};
