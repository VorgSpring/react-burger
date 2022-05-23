import { createSelector } from 'reselect';
import { TRootState } from '../types/store';
import { TUserState } from '../types/state';
import { TUser } from '../types/user';

type TGetUserValuesSelector = (store: TRootState) =>TUserState;
export const getUserValuesSelector: TGetUserValuesSelector = (store) => store.user;

type TGetUserEmailSelector = (store: TRootState) =>string | null;
export const getUserEmailSelector: TGetUserEmailSelector = (store) => store.user.email;

type TIsRequestUserSelector = (store: TRootState) =>boolean;
export const isRequestUserSelector: TIsRequestUserSelector = (store) => store.user.isRequest;

type TGetErrorUserSelector = (store: TRootState) =>string | null;
export const getErrorUserSelector: TGetErrorUserSelector = (store) => store.user.error;

export const getUserSelector = createSelector(
  getUserValuesSelector,
  ({ email, name }): TUser | null => {
    if (email === null && name === null) {
      return null;
    }

    return { email, name };
  },
);

export const getUserStateSelector = createSelector(
  getUserSelector,
  isRequestUserSelector,
  getErrorUserSelector,
  (user, isRequestUser, errorUser) => ({
    user, isRequestUser, errorUser,
  }),
);
