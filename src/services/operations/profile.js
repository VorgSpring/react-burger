import { FormTypes } from '../../constants/forms/types';
import { formApiRequester } from '../../helpers/forms/apiRequester';

export const changeProfile = () => async (dispatch, getState) => {
  await formApiRequester(FormTypes.PROFILE, dispatch, getState);
};
