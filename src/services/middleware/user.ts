import type { Middleware } from 'redux';
import { getUserValuesSelector } from '../../selectors/user';
import { formAtionsCreator } from '../../helpers/forms/action';
import { setLastUserEmail } from '../../helpers/email';
import { FormTypes, FormFieldTypes } from '../../constants/forms/types';
import { UserActionTypes, FormActionTypes } from '../actions/type';
import { TStore } from '../../types/store';
import { TAppDispatch } from '../../types/operation';

export const userMiddleware:
Middleware<TAppDispatch, TStore> = ({ dispatch, getState }) => (next) => (action) => {
  const result = next(action);

  if (action.type === UserActionTypes.SET_USER) {
    const { email, name } = getUserValuesSelector(getState());

    // устанавливаем начальные значения для формы профиля
    const initialFields = {
      values: {
        email: email || '',
        name: name || '',
        [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
      },
    };

    dispatch(
      formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_VALUES, initialFields),
    );

    // записываем почту последнего пользователя
    setLastUserEmail(email || '');
  }

  return result;
};
