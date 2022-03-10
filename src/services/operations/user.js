import {
  getUserRequest,
  getUserSuccess,
  setUser,
  getUserError,
} from '../actions/user';
import { getUserApi } from '../../api/user';
import { setTokens } from '../../helpers/tokens';

export const requestUser = () => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const {
      user,
      accessToken,
      refreshToken,
    } = await getUserApi();

    setTokens({ accessToken, refreshToken });
    dispatch(getUserSuccess());
    dispatch(setUser(user));
  } catch ({ message }) {
    dispatch(getUserError(message));
  }
};
