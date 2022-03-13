import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestForgotPassword = (callback) => async (dispatch, getState) => {
  const { errorMessage } = await formApiRequester(FormTypes.FORGOT_PASSWORD, dispatch, getState);

  if (errorMessage) {
    return;
  }

  callback();
};
