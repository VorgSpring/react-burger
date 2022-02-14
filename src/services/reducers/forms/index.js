import { combineReducers } from 'redux';
import { reducerCreator, stateCreator } from './creators';
import {
  FormTypes,
  LoginFormValues,
} from '../../../constants/forms';

export const formsReducer = combineReducers({
  login: reducerCreator(stateCreator(LoginFormValues), FormTypes.LOGIN),
});
