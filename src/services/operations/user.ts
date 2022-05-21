import {
  userRequest,
  userRequestSuccess,
  userRequestError,
  setUser,
  removeUser,
} from '../actions/user';
import { getUserApi, logoutUserApi } from '../../api/user';
import { getTokenApi } from '../../api/token';
import { removeTokens } from '../../helpers/tokens';
import { ResponceStatuses } from '../../constants/responce';
import { TAppThunk } from '../../types/operation';
import { TUser } from '../../types/user';

export const getUserRequest: TAppThunk<Promise<void | TUser | { errorMessage: string }>> = () => (
  async (dispatch) => {
    dispatch(userRequest());

    try {
      const { user } = await getUserApi();

      dispatch(userRequestSuccess());
      dispatch(setUser(user));

      return user;
    } catch (errorUser) {
      const { message: messageUserError } = errorUser as { message: string };

      dispatch(removeUser());

      if (messageUserError === ResponceStatuses.FORBIDDEN) {
        try {
          const callback = () => {
            dispatch(getUserRequest());
          };

          return await getTokenApi(callback);
        } catch (errorToken) {
          const { message: messageTokenError } = errorToken as { message: string };

          removeTokens();
          dispatch(userRequestError(messageTokenError));
          return { errorMessage: messageTokenError };
        }
      } else {
        removeTokens();
        dispatch(userRequestError(messageUserError));
        return { errorMessage: messageUserError };
      }
    }
  }
);

export const logoutUserRequest: TAppThunk = (callback) => async (dispatch) => {
  dispatch(userRequest());

  try {
    await logoutUserApi();

    dispatch(userRequestSuccess());
    dispatch(removeUser());
    removeTokens();
    callback();
  } catch (e) {
    const { message } = e as { message: string };
    dispatch(userRequestError(message));
  }
};
