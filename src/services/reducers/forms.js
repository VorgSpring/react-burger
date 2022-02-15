import { combineReducers } from 'redux';
import { reducerCreator } from '../../helpers/forms/reducerCreator';
import { FormTypes } from '../../constants/forms/types';
import { FormStoreNames } from '../../constants/forms/store';

export const formsReducer = combineReducers(
  Object.keys(FormTypes).reduce((acc, type) => {
    const storeName = FormStoreNames[type];
    acc[storeName] = reducerCreator(FormTypes[type]);
    return acc;
  }, {}),
);
