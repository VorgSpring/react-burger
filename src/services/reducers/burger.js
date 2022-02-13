import {
  SET_BURGER,
  ADD_INGREDIENT_IN_BURGER,
  MOVE_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from '../actions/type';
import { ConstructorElementTypes } from '../../constants/constructor';
import { BurgerState } from './initialState';
import { arrayMove } from '../../helpers/array';

export const burgerReducer = (state = BurgerState, action) => {
  switch (action.type) {
    case SET_BURGER:
      return action.payload;

    case ADD_INGREDIENT_IN_BURGER:
      return {
        ...state,
        [action.payload.type]:
          action.payload.type === ConstructorElementTypes.BUN
            ? action.payload.id
            : [
              ...state.ingredients,
              {
                id: action.payload.id,
                key: action.payload.key,
              },
            ],
      };

    case MOVE_INGREDIENT_IN_BURGER:
      return {
        ...state,
        ingredients: arrayMove(
          state.ingredients,
          action.payload.currentIndex,
          action.payload.moveIndex,
        ),
      };

    case REMOVE_INGREDIENT_IN_BURGER:
      return {
        ...state,
        [action.payload.type]:
          action.payload.type === ConstructorElementTypes.BUN
            ? null
            : state.ingredients.filter(
              (_, index) => index !== action.payload.index,
            ),
      };

    default:
      return state;
  }
};
