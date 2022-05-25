import { BurgerActionTypes } from '../../actions/type';
import { ConstructorElementTypes } from '../../../constants/constructor';
import { BurgerState } from '../initialState';
import { arrayMove } from '../../../helpers/array';
import { TBurger } from '../../../types/burger';
import { TBurgerActionTypes } from '../../../types/actions/burger';

export const reducer = (
  state = BurgerState,
  action: TBurgerActionTypes,
): TBurger => {
  switch (action.type) {
    case BurgerActionTypes.SET_BURGER:
      return action.payload;

    case BurgerActionTypes.REMOVE_BURGER:
      return BurgerState;

    case BurgerActionTypes.ADD_INGREDIENT_IN_BURGER:
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

    case BurgerActionTypes.MOVE_INGREDIENT_IN_BURGER:
      return {
        ...state,
        ingredients: arrayMove(
          state.ingredients,
          action.payload.currentIndex,
          action.payload.moveIndex,
        ),
      };

    case BurgerActionTypes.REMOVE_INGREDIENT_IN_BURGER:
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
