import { createSelector } from 'reselect';
import { getIngredientsSelector, getIngredientByIdSelector } from './ingredients';
import { getIngredientById, getCountIngredientInBurger } from '../helpers/ingredients';
import { TRootState } from '../types/store';
import { TBurger, TBurgerBun, TBurgerIngredients } from '../types/burger';

type TGetBurgerSelector = (store: TRootState) => TBurger;
export const getBurgerSelector: TGetBurgerSelector = (store) => store.burger;

type TGetBurgerngredientsSelector = (store: TRootState) => TBurgerIngredients;
export const getBurgerngredientsSelector: TGetBurgerngredientsSelector = (store) => (
  store.burger.ingredients
);

type TGetBunIdSelector = (store: TRootState) => TBurgerBun;
export const getBunIdSelector: TGetBunIdSelector = (store) => store.burger.bun;

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
