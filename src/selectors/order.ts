import { createSelector } from 'reselect';
import { getIngredientsSelector } from './ingredients';
import { getUserSelector } from './user';
import {
  getBunIdSelector,
  getBurgerSelector,
  getBurgerngredientsSelector,
} from './burger';
import { getSummaryCost } from '../helpers/burger';
import { TStore } from '../types/store';

type TIsOrderCreatingSelector = (store: TStore) => boolean;
export const isOrderCreatingSelector: TIsOrderCreatingSelector = (store) => store.order.isCreating;

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
