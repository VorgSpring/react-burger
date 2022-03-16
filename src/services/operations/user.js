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

export const getUserRequest = () => async (dispatch) => {
  dispatch(userRequest());

  try {
    const { user } = await getUserApi();

    dispatch(userRequestSuccess());
    dispatch(setUser(user));

    return user;
  } catch ({ message: messageUserError }) {
    dispatch(removeUser());

    if (messageUserError === ReasponceStatuses.FORBIDDEN) {
      try {
        const callback = () => {
          dispatch(getUserRequest());
        };

        return await getTokenApi(callback);
      } catch ({ message: messageTokenError }) {
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

export const logoutUserRequest = (callback) => async (dispatch) => {
  dispatch(userRequest());

  try {
    await logoutUserApi();

    dispatch(userRequestSuccess());
    dispatch(removeUser());
    removeTokens();
    callback();
  } catch ({ message }) {
    dispatch(userRequestError(message));
  }
};
