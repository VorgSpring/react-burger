import { formApiRequester } from '../../helpers/forms/api';
import { formAtionsCreator } from '../../helpers/forms/action';
import { getTokenApi } from '../../api/token';
import { getExcludedFieldsForProfileFormSelector } from '../../selectors/forms';
import { ReasponceStatuses } from '../../constants/responce';
import { FormActionTypes } from '../actions/type';
import {
  FormFieldTypes,
  FormTypes,
} from '../../constants/forms/types';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const changeProfile = () => async (dispatch, getState) => {
  const state = getState();
  const excludedFields = getExcludedFieldsForProfileFormSelector(state);

  const { errorMessage, user } = await formApiRequester(FormTypes.PROFILE, dispatch, getState, {
    isAuthorization: true,
    // @ts-ignore: В следующем спринте реализуется типизации хранилища.
    excludedFields,
  });

  if (errorMessage && errorMessage === ReasponceStatuses.FORBIDDEN) {
    try {
      const callback = () => {
        dispatch(changeProfile());
      };

      await getTokenApi(callback);
    } catch (e) {
      const { message } = e as { message: string };

      dispatch(formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_ERROR, {
        field: FormFieldTypes.REQUEST_FIELD_TYPE,
        message,
      }));
    }
  } else {
    dispatch(formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_VALUES, {
      ...user,
      [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
    }));
  }
};
