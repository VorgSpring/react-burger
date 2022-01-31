import {
  GET_MAIN_BURGER,
  ADD_INGREDIENT_IN_BURGER,
  MOVE_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from './type';

export const getMainBurger = (burger) => ({
  type: GET_MAIN_BURGER,
  payload: burger,
});

export const addIngredientInBurger = (type, id, key) => ({
  type: ADD_INGREDIENT_IN_BURGER,
  payload: { type, id, key },
});

export const moveIngredientInBurger = (currentIndex, moveIndex) => ({
  type: MOVE_INGREDIENT_IN_BURGER,
  payload: { currentIndex, moveIndex },
});

export const removeIngredientInBurger = (type, index) => ({
  type: REMOVE_INGREDIENT_IN_BURGER,
  payload: { type, index },
});
