import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from './type';

export const getIngredientsRequest = () => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (ingredients) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

export const getIngredientsError = (error) => ({
  type: GET_INGREDIENTS_ERROR,
  payload: error,
});
