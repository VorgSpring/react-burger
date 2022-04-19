import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/api';
import { TAppDispatch, TAppThunk, TGetState } from '../../types/operation';

export const requestResetPassword: TAppThunk = (callback) => (
  async (dispatch: TAppDispatch, getState: TGetState) => {
    const { errorMessage } = await formApiRequester(FormTypes.RESET_PASSWORD, dispatch, getState);

    if (errorMessage) {
      return;
    }

    callback();
  }
);
