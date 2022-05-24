import { formApiRequester } from '../../helpers/forms/api';
import { setUser } from '../actions/user';
import { setTokens } from '../../helpers/tokens';
import { FormTypes } from '../../constants/forms/types';
import { TAppDispatch, TAppThunk, TGetState } from '../../types/store';
import { TRegisterResponce } from '../../types/forms/register';

export const requestRegister: TAppThunk = () => (
  async (dispatch: TAppDispatch, getState: TGetState) => {
    const {
      user,
      accessToken,
      refreshToken,
      errorMessage,
    } = await formApiRequester<TRegisterResponce>(FormTypes.REGISTER, dispatch, getState);

    if (errorMessage) {
      return;
    }

    setTokens({ accessToken, refreshToken });
    dispatch(setUser(user));
  }
);
