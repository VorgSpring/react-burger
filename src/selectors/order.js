import { createSelector } from 'reselect';
import { getIngredientsSelector } from './ingredients';
import { getBunIdSelector, getBurgerSelector, getBurgerngredientsSelector } from './burger';
import { getSummaryCost } from '../helpers/burger';

export const isOrderCreatingSelector = (store) => store.order.isCreating;

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
