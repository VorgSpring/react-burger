import { createSelector } from 'reselect';
import { FormStoreNames } from '../constants/forms/store';

export const getFormValueSelector = (store, type) => store.forms[FormStoreNames[type]].values;
export const getFormErrorsSelector = (store, type) => store.forms[FormStoreNames[type]].errors;
export const isRequestFormSelector = (store, type) => store.forms[FormStoreNames[type]].isRequest;

export const formSelector = createSelector(
  getFormValueSelector,
  getFormErrorsSelector,
  isRequestFormSelector,
  (values, errors, isRequest) => ({ values, errors, isRequest }),
);
