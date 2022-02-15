import { FormTypes } from '../../constants/forms/types';
import { formRequester } from '../../helpers/forms';

export const requestLogin = () => async (dispatch, getState) => {
  await formRequester(FormTypes.LOGIN, dispatch, getState);
};
