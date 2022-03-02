import { createSelector } from 'reselect';
import { getIngredientById } from '../helpers/ingredients';

export const getIngredientsSelector = (store) => store.ingredients.items;
export const isLoadingSelector = (store) => store.ingredients.isLoading;
export const getErrorSelector = (store) => store.ingredients.isLoading;
export const getIngredientIdSelector = (_, id) => id;

export const getIngredientByIdSelector = createSelector(
  getIngredientsSelector,
  getIngredientIdSelector,
  getIngredientById,
);

export const getIngredientsAndLoadingSelector = createSelector(
  getIngredientsSelector,
  isLoadingSelector,
  (ingredients, isLoading) => ({ ingredients, isLoading }),
);

export const getErrorAndEmptySelector = createSelector(
  getIngredientsSelector,
  getErrorSelector,
  (ingredients, error) => ({
    isEmpty: ingredients === null,
    error,
  }),
);
