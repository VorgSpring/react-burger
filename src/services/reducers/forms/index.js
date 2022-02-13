import { combineReducers } from 'redux';
import { loginFormReducer } from './login';

export const formsReducer = combineReducers({
  login: loginFormReducer,
});
