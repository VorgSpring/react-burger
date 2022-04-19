import { FormTypes } from '../../constants/forms/types';
import { setUser } from '../actions/user';
import { setTokens } from '../../helpers/tokens';
import { formApiRequester } from '../../helpers/forms/api';
import { TAppThunk } from '../../types/operation';
import { TLoginResponce } from '../../types/forms/login';

export const requestLogin: TAppThunk = () => async (dispatch, getState) => {
  const {
    user,
    accessToken,
    refreshToken,
    errorMessage,
  } = await formApiRequester<TLoginResponce>(FormTypes.LOGIN, dispatch, getState);

  if (errorMessage) {
    return;
  }

  setTokens({ accessToken, refreshToken });
  dispatch(setUser(user));
};
