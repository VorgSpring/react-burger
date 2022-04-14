import { TIngredientsState } from '../../types/store';
import { TIngredientActionTypes } from '../../types/actions/ingredients';
import { IngredientActionTypes } from '../actions/type';
import { IngredientsState } from './initialState';

type TIngredientsReducer = (
  state: TIngredientsState,
  action: TIngredientActionTypes
) => TIngredientsState;

export const ingredientsReducer: TIngredientsReducer = (state = IngredientsState, action) => {
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
