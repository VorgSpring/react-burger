import { formApiRequester } from '../../helpers/forms/apiRequester';
import { setUser } from '../actions/user';
import { setTokens } from '../../helpers/tokens';
import { FormTypes } from '../../constants/forms/types';

export const requestRegister = () => async (dispatch, getState) => {
  const {
    user,
    accessToken,
    refreshToken,
  } = await formApiRequester(FormTypes.REGISTER, dispatch, getState);

  setTokens({ accessToken, refreshToken });
  dispatch(setUser(user));
};
