import {
  NAME_FIELD_TYPE,
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
  CODE_FIELD_TYPE,
} from './forms/types';

export const FormFieldErrors = {
  [NAME_FIELD_TYPE]: 'Имя слишком длинное',
  [EMAIL_FIELD_TYPE]: 'Не корректна указана почта',
  [PASSWORD_FIELD_TYPE]: 'Пароль должен содержать не менее 6 символов: загравные и строчные буквы, цифры и спецсимволы',
  [REQUEST_FIELD_TYPE]: 'Произошла ошибка авторизации, попытайтесь авторизаваться познее',
  [CODE_FIELD_TYPE]: 'Не верный код',
};
