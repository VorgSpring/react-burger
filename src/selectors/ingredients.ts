import { createSelector } from 'reselect';
import {
  getIngredientById,
  getIngredientPriceByIds,
} from '../helpers/ingredients';
import { TRootState } from '../types/store';
import { TIngregient } from '../types/ingredient';

type TGetIngredientsSelector = (store: TRootState) => TIngregient[] | null;
export const getIngredientsSelector: TGetIngredientsSelector = (store) => store.ingredients.items;

type TIsLoadingSelector = (store: TRootState) => boolean;
export const isLoadingSelector: TIsLoadingSelector = (store) => store.ingredients.isLoading;

type TGetErrorSelector = (store: TRootState) => string | null;
export const getErrorSelector: TGetErrorSelector = (store) => store.ingredients.error;

type TGetIngredientsIdSelector = (_: TRootState, id: string | undefined) => string | null;
export const getIngredientIdSelector: TGetIngredientsIdSelector = (_, id) => id || null;

type TGetIngredientsIdsSelector = (_: TRootState, ids?: string[]) => string[] | null;
export const getIngredientIdsSelector: TGetIngredientsIdsSelector = (_, ids) => ids || null;

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

export const getIngredientPriceByIdsSelector = createSelector(
  getIngredientIdsSelector,
  getIngredientsSelector,
  isLoadingSelector,
  getErrorSelector,
  (ids, ingredients, isLoading, error) => (
    {
      price: getIngredientPriceByIds(ids, ingredients),
      isLoading,
      error,
    }
  ),
);
