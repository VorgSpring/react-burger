import { TIngredientsState } from '../../types/state';
import { TIngredientActionTypes } from '../../types/actions/ingredients';
import { IngredientActionTypes } from '../actions/type';
import { IngredientsState } from './initialState';

export const ingredientsReducer = (
  state = IngredientsState,
  action: TIngredientActionTypes,
): TIngredientsState => {
  switch (action.type) {
    case IngredientActionTypes.GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case IngredientActionTypes.GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    case IngredientActionTypes.GET_INGREDIENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
