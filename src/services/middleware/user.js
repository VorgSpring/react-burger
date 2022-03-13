import { getUserValuesSelector } from '../../selectors/user';
import { formAtionsCreator } from '../../helpers/forms/actionCreator';
import { setLastUserEmail } from '../../helpers/email';
import { FormTypes, PASSWORD_FIELD_TYPE } from '../../constants/forms/types';
import { SET_USER, FORM_SET_VALUES } from '../actions/type';

export const userMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  const result = next(action);

  if (action.type === SET_USER) {
    const { email, name } = getUserValuesSelector(getState());

    // устанавливаем начальные значения для формы профиля
    const initialFields = {
      email,
      name,
      [PASSWORD_FIELD_TYPE]: '',
    };

    dispatch(
      formAtionsCreator(FormTypes.PROFILE, FORM_SET_VALUES, initialFields),
    );

    // записываем почту последнего пользователя
    setLastUserEmail(email);
  }

  return result;
};
