import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/api';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const requestResetPassword = (callback) => async (dispatch, getState) => {
  const { errorMessage } = await formApiRequester(FormTypes.RESET_PASSWORD, dispatch, getState);

  if (errorMessage) {
    return;
  }

  callback();
};
