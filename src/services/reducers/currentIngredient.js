import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from '../actions/type';
import { currentIngredientState } from './initialState';

export const currentIngredientReducer = (state = currentIngredientState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return action.payload;

    case REMOVE_CURRENT_INGREDIENT:
      return null;

    default:
      return state;
  }
};
