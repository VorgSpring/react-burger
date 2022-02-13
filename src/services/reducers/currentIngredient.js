import {
  SET_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from '../actions/type';
import { CurrentIngredientState } from './initialState';

export const currentIngredientReducer = (state = CurrentIngredientState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return action.payload;

    case REMOVE_CURRENT_INGREDIENT:
      return null;

    default:
      return state;
  }
};
