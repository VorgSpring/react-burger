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
import { TStore } from '../types/store';
import { TFormValues, TFormErrors } from '../types/form';

type TGetFormValueSelector = (store: TStore, type: FormTypes) => TFormValues;
export const getFormValueSelector: TGetFormValueSelector = (store, type) => store.forms[FormStoreNames[type]].values;

type TGetFormErrorsSelector = (store: TStore, type: FormTypes) => TFormErrors;
export const getFormErrorsSelector: TGetFormErrorsSelector = (store, type) => store.forms[FormStoreNames[type]].errors;

type TIsRequestFormSelector = (store: TStore, type: FormTypes) => boolean;
export const isRequestFormSelector: TIsRequestFormSelector = (store, type) => store.forms[FormStoreNames[type]].isRequest;

type TGetProfileFormValueSelector = (store: TStore) => TFormValues;
export const getProfileFormValueSelector: TGetProfileFormValueSelector = (store) => (
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
