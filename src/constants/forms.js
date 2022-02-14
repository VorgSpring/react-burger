export const EMAIL_FIELD_NAME = 'email';
export const PASSWORD_FIELD_NAME = 'password';
const REQUEST_FIELD_NAME = 'request';

export const FormTypes = {
  LOGIN: 'LOGIN',
};

export const LoginFieldNames = {
  EMAIL: EMAIL_FIELD_NAME,
  PASSWORD: PASSWORD_FIELD_NAME,
  REQUEST: REQUEST_FIELD_NAME,
};

export const FormFieldErrors = {
  [EMAIL_FIELD_NAME]: 'Не корректна указана почта',
  [PASSWORD_FIELD_NAME]: 'Пароль должен содержать цифры, числа, загравные и строчные буквы',
  [REQUEST_FIELD_NAME]: 'Произошла ошибка авторизации, попытайтесь авторизаваться познее',
};

export const LoginFormValues = {
  [EMAIL_FIELD_NAME]: '',
  [PASSWORD_FIELD_NAME]: '',
};
