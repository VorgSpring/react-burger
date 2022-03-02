import { createSelector } from 'reselect';
import { getIngredientsSelector, getIngredientByIdSelector } from './ingredients';
import { getIngredientById, getCountIngredientInBurger } from '../helpers/ingredients';

export const getBurgerSelector = (store) => store.burger;
export const getBurgerngredientsSelector = (store) => store.burger.ingredients;
export const getBunIdSelector = (store) => store.burger.bun;

export const getBunSelector = createSelector(
  getIngredientsSelector,
  getBunIdSelector,
  getIngredientById,
);

export const getCountIngredientInBurgerSelector = createSelector(
  getBurgerSelector,
  getIngredientByIdSelector,
  getCountIngredientInBurger,
);
