import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestForgotPassword = () => async (dispatch, getState) => {
  await formApiRequester(FormTypes.FORGOT_PASSWORD, dispatch, getState);
};
