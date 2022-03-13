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
  } catch ({ message: messageUserError }) {
    if (messageUserError === ReasponceStatuses.FORBIDDEN) {
      try {
        const callback = () => {
          dispatch(requestUser());
        };

        await getTokenApi(callback);
      } catch ({ message: messageTokenError }) {
        removeTokens();
        dispatch(getUserError(messageTokenError));
      }
    } else {
      removeTokens();
      dispatch(getUserError(messageUserError));
    }
  }
};
