import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/api';
import { TAppThunk } from '../../types/store';

export const requestForgotPassword: TAppThunk = (callback: () => void) => (
  async (dispatch, getState) => {
    const { errorMessage } = await formApiRequester(FormTypes.FORGOT_PASSWORD, dispatch, getState);

    if (errorMessage) {
      return;
    }

    callback();
  }
);
