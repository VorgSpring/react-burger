import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestResetPassword = (callback) => async (dispatch, getState) => {
  const { errorMessage } = await formApiRequester(FormTypes.RESET_PASSWORD, dispatch, getState);

  if (errorMessage) {
    return;
  }

  callback();
};
