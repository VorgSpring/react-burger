import { combineReducers } from 'redux';
import { reducerCreator } from '../../helpers/forms/reducer';
import { FormTypes } from '../../constants/forms/types';
import { FormStoreNames } from '../../constants/forms/store';

export const formsReducer = combineReducers({
  [FormStoreNames.LOGIN]: reducerCreator(FormTypes.LOGIN),
  [FormStoreNames.REGISTER]: reducerCreator(FormTypes.REGISTER),
  [FormStoreNames.FORGOT_PASSWORD]: reducerCreator(FormTypes.FORGOT_PASSWORD),
  [FormStoreNames.RESET_PASSWORD]: reducerCreator(FormTypes.RESET_PASSWORD),
  [FormStoreNames.PROFILE]: reducerCreator(FormTypes.PROFILE),
});
