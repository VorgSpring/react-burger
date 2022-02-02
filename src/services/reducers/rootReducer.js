import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerReducer } from './burger';
import { currentIngredientReducer } from './currentIngredient';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
});
