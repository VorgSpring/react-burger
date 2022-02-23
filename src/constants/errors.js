import {
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
} from './forms/types';

export const FormFieldErrors = {
  [EMAIL_FIELD_TYPE]: 'Не корректна указана почта',
  [PASSWORD_FIELD_TYPE]: 'Пароль должен содержать цифры, числа, загравные и строчные буквы',
  [REQUEST_FIELD_TYPE]: 'Произошла ошибка авторизации, попытайтесь авторизаваться познее',
};
