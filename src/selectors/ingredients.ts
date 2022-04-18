import { createSelector } from 'reselect';
import { getIngredientById } from '../helpers/ingredients';
import { TStore } from '../types/store';
import { TIngregient } from '../types/ingredient';

type TGetIngredientsSelector = (store: TStore) => TIngregient[] | null;
export const getIngredientsSelector: TGetIngredientsSelector = (store) => store.ingredients.items;

type TIsLoadingSelector = (store: TStore) => boolean;
export const isLoadingSelector: TIsLoadingSelector = (store) => store.ingredients.isLoading;

type TGetErrorSelector = (store: TStore) => string | null;
export const getErrorSelector: TGetErrorSelector = (store) => store.ingredients.error;

type TGetIngredientsIdSelector = (_: TStore, id: string | undefined) => string | null;
export const getIngredientIdSelector: TGetIngredientsIdSelector = (_, id) => id || null;

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

export const ingredientDetailsSelector = createSelector(
  getIngredientByIdSelector,
  isLoadingSelector,
  getErrorSelector,
  (ingredient, isLoading, error) => ({
    ingredient, isLoading, error,
  }),
);
