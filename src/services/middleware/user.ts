import { getUserValuesSelector } from '../../selectors/user';
import { formAtionsCreator } from '../../helpers/forms/action';
import { setLastUserEmail } from '../../helpers/email';
import { FormTypes, FormFieldTypes } from '../../constants/forms/types';
import { UserActionTypes, FormActionTypes } from '../actions/type';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
export const userMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  const result = next(action);

  if (action.type === UserActionTypes.SET_USER) {
    const { email, name } = getUserValuesSelector(getState());

    // устанавливаем начальные значения для формы профиля
    const initialFields = {
      values: {
        email: email || '',
        name: name || '',
        [FormFieldTypes.PASSWORD_FIELD_TYPE]: '',
      }
    };

    dispatch(
      formAtionsCreator(FormTypes.PROFILE, FormActionTypes.FORM_SET_VALUES, initialFields),
    );

    // записываем почту последнего пользователя
    setLastUserEmail(email || '');
  }

  return result;
};
