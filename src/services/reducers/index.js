import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerReducer } from './burger';
import { currentIngredientReducer } from './currentIngredient';
import { orderReducer } from './order';
import { formsReducer } from './forms';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  forms: formsReducer,
  user: userReducer,
});
