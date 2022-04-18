import { FormFieldTypes } from './types';

export const FormFieldErrors: { [K in FormFieldTypes]: string } = {
  [FormFieldTypes.NAME_FIELD_TYPE]: 'Имя слишком длинное',
  [FormFieldTypes.EMAIL_FIELD_TYPE]: 'Не корректна указана почта',
  [FormFieldTypes.PASSWORD_FIELD_TYPE]: 'Пароль должен содержать не менее 6 символов: загравные и строчные буквы, цифры и спецсимволы',
  [FormFieldTypes.REQUEST_FIELD_TYPE]: 'Произошла ошибка авторизации, попытайтесь авторизаваться познее',
  [FormFieldTypes.CODE_FIELD_TYPE]: 'Не верный код',
};
