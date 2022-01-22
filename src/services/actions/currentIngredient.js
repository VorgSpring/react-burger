import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from './type';

export const setCurrentIngredient = (id) => ({
  type: SET_CURRENT_INGREDIENT,
  payload: id,
});

export const removeCurrentIngredient = () => ({
  type: REMOVE_CURRENT_INGREDIENT,
});
