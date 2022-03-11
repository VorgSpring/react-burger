import {
  getUserRequest,
  getUserSuccess,
  setUser,
  getUserError,
} from '../actions/user';
import { getUserApi } from '../../api/user';
import { getTokenApi } from '../../api/token';
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
        await getTokenApi(dispatch(requestUser()));
      } catch ({ message: messageTokenError }) {
        dispatch(getUserError(messageTokenError));
      }
    } else {
      dispatch(getUserError(messageUserError));
    }
  }
};
