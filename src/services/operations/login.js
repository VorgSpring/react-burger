import { FormTypes } from '../../constants/forms/types';
import { setUser } from '../actions/user';
import { setTokens } from '../../helpers/tokens';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestLogin = () => async (dispatch, getState) => {
  const {
    user,
    accessToken,
    refreshToken,
    errorMessage,
  } = await formApiRequester(FormTypes.LOGIN, dispatch, getState);

  if (errorMessage) {
    return;
  }

  setTokens({ accessToken, refreshToken });
  dispatch(setUser(user));
};
