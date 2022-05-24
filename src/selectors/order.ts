import { createSelector } from 'reselect';
import { getErrorAndEmptySelector, getIngredientsSelector } from './ingredients';
import { getUserSelector } from './user';
import {
  getBunIdSelector,
  getBurgerSelector,
  getBurgerngredientsSelector,
} from './burger';
import { getSummaryCost } from '../helpers/burger';
import { TRootState } from '../types/store';
import { OrdersTypes } from '../constants/orders/types';
import { TOrders, TOrdersState } from '../types/order';
import { OrderStoreNames } from '../constants/orders/store';
import { getOrdersFeed } from '../helpers/orders/util';

type TIsOrderCreatingSelector = (store: TRootState) => boolean;
export const isOrderCreatingSelector: TIsOrderCreatingSelector = (store) => store.order.isCreating;

type TOrdersStoreSelector = (store: TRootState, type: OrdersTypes) => TOrdersState;
export const getOrdersStoreSelector: TOrdersStoreSelector = (store, type) => {
  const orderStoreName = OrderStoreNames[type];
  return store[orderStoreName];
};

type TGetOrdersSelector = (store: TRootState, type?: OrdersTypes) => TOrders[] | null;
export const getOrdersSelector: TGetOrdersSelector = (store, type) => {
  if (!type) {
    return null;
  }

  const orderStoreName = OrderStoreNames[type];
  return store[orderStoreName].orders;
};

type TGetAllOrdersSelector = (store: TRootState, type?: OrdersTypes) => TOrders[] | null;
export const getAllOrdersSelector: TGetAllOrdersSelector = (store) => (
  store[OrderStoreNames.ALL].orders
);

type TOrderNumberSelector =
  (store: TRootState, type?: OrdersTypes, number?: string) => number | null;
export const getOrderNumberSelector: TOrderNumberSelector = (store, type, number) => {
  if (!number) {
    return null;
  }

  const preparedNumber = parseInt(number, 10);

  return Number.isNaN(preparedNumber) ? null : preparedNumber;
};

export const isEmptyOrderSelector = createSelector(
  getBunIdSelector,
  getBurgerngredientsSelector,
  (bun, ingredients) => !bun || !ingredients.length,
);

export const getOrederSummurySelector = createSelector(
  getBurgerSelector,
  getIngredientsSelector,
  getSummaryCost,
);

export const orderCreatorSelector = createSelector(
  isEmptyOrderSelector,
  getOrederSummurySelector,
  isOrderCreatingSelector,
  (isEmpty, summaryCost, isCreating) => ({ isEmpty, summaryCost, isCreating }),
);

export const createOrderSelector = createSelector(
  getBurgerSelector,
  getUserSelector,
  (burger, user) => ({ burger, user }),
);

export const getOrderSelector = createSelector(
  getOrdersSelector,
  getOrderNumberSelector,
  (orders, number) => {
    if (orders === null || number === null) {
      return null;
    }

    const order = orders.find((item) => item.number === number);

    return order || null;
  },
);

export const getOrderHistorySelector = createSelector(
  getOrdersStoreSelector,
  getErrorAndEmptySelector,
  (ordersState, ingredientsState) => ({
    ...ordersState,
    isEmpty: ingredientsState.isEmpty,
  }),
);

export const getOrderFeedSelector = createSelector(
  getAllOrdersSelector,
  getOrdersFeed,
);
