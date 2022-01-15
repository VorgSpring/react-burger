import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from '../actions/type';
import { ingredientsState } from './initialState';

export const ingredientsReducer = (state = ingredientsState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    case GET_INGREDIENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
