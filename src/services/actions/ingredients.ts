import { TIngregient } from '../../types/ingredient';
import { IngredientActionTypes } from './type';
import {
  TIngredientsRequest,
  TIngredientsSuccess,
  TIngredientsError,
} from '../../types/actions/ingredients';

export const getIngredientsRequest = (): TIngredientsRequest => ({
  type: IngredientActionTypes.GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (ingredients: TIngregient[]): TIngredientsSuccess => ({
  type: IngredientActionTypes.GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

export const getIngredientsError = (error: string): TIngredientsError => ({
  type: IngredientActionTypes.GET_INGREDIENTS_ERROR,
  payload: error,
});
