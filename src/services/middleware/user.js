import { getUserValuesSelector } from '../../selectors/user';
import { formAtionsCreator } from '../../helpers/forms/actionCreator';
import { FormTypes } from '../../constants/forms/types';
import { SET_USER, FORM_SET_VALUES } from '../actions/type';

export const userMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  const result = next(action);

  if (action.type === SET_USER) {
    const { email, name } = getUserValuesSelector(getState());

    // устанавливаем начальные значения для формы профиля
    const initialFields = {
      email,
      name,
    };

    dispatch(
      formAtionsCreator(FormTypes.PROFILE, FORM_SET_VALUES, initialFields),
    );

    // записываем почту последнего пользователя
    localStorage.lastUserEmail = email;
  }

  return result;
};
