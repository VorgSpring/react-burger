import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestResetPassword = () => async (dispatch, getState) => {
  await formApiRequester(FormTypes.RESET_PASSWORD, dispatch, getState);
};
