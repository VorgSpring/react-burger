import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestLogin = () => async (dispatch, getState) => {
  await formApiRequester(FormTypes.LOGIN, dispatch, getState);
};
