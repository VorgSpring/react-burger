import { createSelector } from 'reselect';

export const getUserValuesSelector = (store) => store.user;
export const getUserEmailSelector = (store) => store.user.email;
export const isRequestUserSelector = (store) => store.user.isRequest;
export const getErrorUserSelector = (store) => store.user.error;

export const getUserSelector = createSelector(
  getUserValuesSelector,
  ({ email, name }) => {
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
