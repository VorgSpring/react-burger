import { formApiRequester } from '../../helpers/forms/api';
import { formAtionsCreator } from '../../helpers/forms/action';
import { getTokenApi } from '../../api/token';
import { getExcludedFieldsForProfileFormSelector } from '../../selectors/forms';
import { ResponceStatuses } from '../../constants/responce';
import { FormActionTypes } from '../actions/type';
import {
  FormFieldTypes,
  FormTypes,
} from '../../constants/forms/types';
import { TAppThunk } from '../../types/operation';
import { TProfileResponce } from '../../types/forms/profile';
import { TFormAtionsPayloads } from '../../types/forms/actions';
import { setUser } from '../actions/user';

export const changeProfile: TAppThunk = () => (
  async (dispatch, getState) => {
    const state = getState();
    const excludedFields = getExcludedFieldsForProfileFormSelector(state);

    const { errorMessage, user } = await formApiRequester<TProfileResponce>(
      FormTypes.PROFILE,
      dispatch,
      getState,
      {
        isAuthorization: true,
        excludedFields,
      },
    );

    if (errorMessage && errorMessage === ResponceStatuses.FORBIDDEN) {
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
      const payload = {
        values: {
          ...user,
          [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
        },
      } as TFormAtionsPayloads;

      dispatch(formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_VALUES, payload));
      dispatch(setUser(user));
    }
  }
);
