import { reducerCreator, TOrdersReducer } from '../../helpers/orders/reducer';
import { OrdersTypes } from '../../constants/orders/types';
import { OrderStoreNames } from '../../constants/orders/store';

export const ordersReducer = Object.keys(OrdersTypes).reduce((acc, type) => {
  const orderType = type as keyof typeof OrdersTypes;
  const storeName = OrderStoreNames[orderType];

  acc[storeName] = reducerCreator(orderType);
  return acc;
}, {} as {
  [K in OrderStoreNames]: TOrdersReducer;
});
