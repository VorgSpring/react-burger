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
import { ReasponceStatuses } from '../../constants/responce';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const getUserRequest = () => async (dispatch) => {
  dispatch(userRequest());

  try {
    const { user } = await getUserApi();

    dispatch(userRequestSuccess());
    dispatch(setUser(user));

    return user;
  } catch (errorUser) {
    const { message: messageUserError } = errorUser as { message: string };

    dispatch(removeUser());

    if (messageUserError === ReasponceStatuses.FORBIDDEN) {
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
};

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const logoutUserRequest = (callback) => async (dispatch) => {
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
