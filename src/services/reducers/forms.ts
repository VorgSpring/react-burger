import { combineReducers } from 'redux';
import { reducerCreator, TFormReducer } from '../../helpers/forms/reducer';
import { FormTypes } from '../../constants/forms/types';
import { FormStoreNames } from '../../constants/forms/store';

export const formsReducer = combineReducers(
  Object.keys(FormTypes).reduce((acc, type) => {
    const formType = type as keyof typeof FormStoreNames;
    const storeName = FormStoreNames[formType];

    acc[storeName] = reducerCreator(formType);
    return acc;
  }, {} as {
    [K in FormStoreNames]: TFormReducer;
  }),
);
