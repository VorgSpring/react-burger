import {
  getUserRequest,
  getUserSuccess,
  setUser,
  getUserError,
} from '../actions/user';
import { getUserApi } from '../../api/user';
import { getTokenApi } from '../../api/token';
import { removeTokens } from '../../helpers/tokens';
import { ReasponceStatuses } from '../../constants/responce';

export const requestUser = () => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const { user } = await getUserApi();

    dispatch(getUserSuccess());
    dispatch(setUser(user));

    return user;
  } catch ({ message: messageUserError }) {
    if (messageUserError === ReasponceStatuses.FORBIDDEN) {
      try {
        const callback = () => {
          dispatch(requestUser());
        };

        const { user } = await getTokenApi(callback);
        return user;
      } catch ({ message: messageTokenError }) {
        removeTokens();
        dispatch(getUserError(messageTokenError));
        return { errorMessage: messageTokenError };
      }
    } else {
      removeTokens();
      dispatch(getUserError(messageUserError));
      return { errorMessage: messageUserError };
    }
  }
};
