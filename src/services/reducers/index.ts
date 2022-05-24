import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerReducer } from './burger';
import { orderReducer } from './order';
import { formsReducer } from './forms';
import { userReducer } from './user';
import { ordersReducer } from './orders';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  order: orderReducer,
  forms: formsReducer,
  user: userReducer,
  ...ordersReducer,
});
