import { createSelector } from 'reselect';
import { getIngredientsSelector, getIngredientByIdSelector } from './ingredients';
import { getIngredientById, getCountIngredientInBurger } from '../helpers/ingredients';
import { TStore } from '../types/store';
import { TBurger, TBurgerBun, TBurgerIngredients } from '../types/burger';

type TGetBurgerSelector = (store: TStore) => TBurger;
export const getBurgerSelector: TGetBurgerSelector = (store) => store.burger;

type TGetBurgerngredientsSelector = (store: TStore) => TBurgerIngredients;
export const getBurgerngredientsSelector: TGetBurgerngredientsSelector = (store) => (
  store.burger.ingredients
);

type TGetBunIdSelector = (store: TStore) => TBurgerBun;
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
