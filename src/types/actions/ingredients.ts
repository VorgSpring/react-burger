import { TIngregient } from '../ingredient';
import { IngredientActionTypes } from '../../services/actions/type';

export type TIngredientsRequest = {
  type: IngredientActionTypes.GET_INGREDIENTS_REQUEST;
};

export type TIngredientsSuccess = {
  type: IngredientActionTypes.GET_INGREDIENTS_SUCCESS;
  payload: TIngregient[];
};

export type TIngredientsError = {
  type: IngredientActionTypes.GET_INGREDIENTS_ERROR;
  payload: string;
};

export type TIngredientActionTypes = TIngredientsRequest
| TIngredientsSuccess
| TIngredientsError;
