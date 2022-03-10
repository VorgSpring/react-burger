import { formApiRequester } from '../../helpers/forms/apiRequester';
import { getExcludedFieldsForProfileFormSelector } from '../../selectors/forms';
import { FormTypes } from '../../constants/forms/types';

export const changeProfile = () => async (dispatch, getState) => {
  const state = getState();
  const excludedFields = getExcludedFieldsForProfileFormSelector(state);

  await formApiRequester(FormTypes.PROFILE, dispatch, getState, {
    isCleanUpValues: false,
    excludedFields,
  });
};
