import { createSelector } from 'reselect';
import {
  getUserSelector,
  isRequestUserSelector,
  getErrorUserSelector,
} from './user';
import {
  getExcludedFieldsForProfileForm,
  isShowProfileButtons,
} from '../helpers/forms/profile';
import { FormStoreNames } from '../constants/forms/store';
import { FormTypes } from '../constants/forms/types';

export const getFormValueSelector = (store, type) => store.forms[FormStoreNames[type]].values;
export const getFormErrorsSelector = (store, type) => store.forms[FormStoreNames[type]].errors;
export const isRequestFormSelector = (store, type) => store.forms[FormStoreNames[type]].isRequest;

export const getProfileFormValueSelector = (store) => (
  store.forms[FormStoreNames[FormTypes.PROFILE]].values
);

export const formSelector = createSelector(
  getFormValueSelector,
  getFormErrorsSelector,
  isRequestFormSelector,
  (values, errors, isRequest) => ({ values, errors, isRequest }),
);

export const getExcludedFieldsForProfileFormSelector = createSelector(
  getUserSelector,
  getProfileFormValueSelector,
  getExcludedFieldsForProfileForm,
);

export const isShowProfileButtonsSelector = createSelector(
  getUserSelector,
  getProfileFormValueSelector,
  isShowProfileButtons,
);

export const profileFormSelector = createSelector(
  getUserSelector,
  isShowProfileButtonsSelector,
  isRequestUserSelector,
  getErrorUserSelector,
  (user, isShowButtons, isRequestUser, errorUser) => ({
    user, isShowButtons, isRequestUser, errorUser,
  }),
);
