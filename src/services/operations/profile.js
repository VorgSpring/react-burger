import { formApiRequester } from '../../helpers/forms/apiRequester';
import { formAtionsCreator } from '../../helpers/forms/actionCreator';
import { getTokenApi } from '../../api/token';
import { getExcludedFieldsForProfileFormSelector } from '../../selectors/forms';
import { ReasponceStatuses } from '../../constants/responce';
import {
  FORM_SET_ERROR,
  FORM_SET_VALUES,
} from '../actions/type';
import {
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
  FormTypes,
} from '../../constants/forms/types';

export const changeProfile = () => async (dispatch, getState) => {
  const state = getState();
  const excludedFields = getExcludedFieldsForProfileFormSelector(state);

  const { errorMessage, user } = await formApiRequester(FormTypes.PROFILE, dispatch, getState, {
    isAuthorization: true,
    isCleanUpValues: false,
    excludedFields,
  });

  if (errorMessage && errorMessage === ReasponceStatuses.FORBIDDEN) {
    try {
      await getTokenApi(dispatch(changeProfile()));
    } catch ({ message }) {
      dispatch(formAtionsCreator(FormTypes.PROFILE, FORM_SET_ERROR, {
        field: REQUEST_FIELD_TYPE,
        message,
      }));
    }
  } else {
    dispatch(formAtionsCreator(FormTypes.PROFILE, FORM_SET_VALUES, {
      ...user,
      [PASSWORD_FIELD_TYPE]: '',
    }));
  }
};
