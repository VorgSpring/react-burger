import {
  GET_MAIN_BURGER,
  ADD_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from './type';

export const getMainnBurger = (burger) => ({
  type: GET_MAIN_BURGER,
  payload: burger,
});

export const addIngredientInBurger = (ingredient) => ({
  type: ADD_INGREDIENT_IN_BURGER,
  payload: ingredient,
});

export const removeIngredientInnBurger = (ingredient) => ({
  type: REMOVE_INGREDIENT_IN_BURGER,
  payload: ingredient,
});
