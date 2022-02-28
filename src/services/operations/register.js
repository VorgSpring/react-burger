import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const requestRegister = () => async (dispatch, getState) => {
  await formApiRequester(FormTypes.REGISTER, dispatch, getState);
};
