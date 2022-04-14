import { formApiRequester } from '../../helpers/forms/api';
import { setUser } from '../actions/user';
import { setTokens } from '../../helpers/tokens';
import { FormTypes } from '../../constants/forms/types';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const requestRegister = () => async (dispatch, getState) => {
  const {
    user,
    accessToken,
    refreshToken,
    errorMessage,
  } = await formApiRequester(FormTypes.REGISTER, dispatch, getState);

  if (errorMessage) {
    return;
  }

  setTokens({ accessToken, refreshToken });
  dispatch(setUser(user));
};
