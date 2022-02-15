import { FormTypes } from './types';

export const FormApiUrls = {
  [FormTypes.LOGIN]: 'https://norma.nomoreparties.space/api/auth/login',
  [FormTypes.REGISTER]: 'https://norma.nomoreparties.space/api/auth/register',
  [FormTypes.FORGOT_PASSWORD]: 'https://norma.nomoreparties.space/api/password-reset',
  [FormTypes.RESET_PASSWORD]: 'https://norma.nomoreparties.space/api/password-reset/reset',
  [FormTypes.PROFILE]: 'https://norma.nomoreparties.space/api/auth/user',
};

export const FormApiMethods = {
  [FormTypes.LOGIN]: 'POST',
  [FormTypes.REGISTER]: 'POST',
  [FormTypes.FORGOT_PASSWORD]: 'POST',
  [FormTypes.RESET_PASSWORD]: 'POST',
  [FormTypes.PROFILE]: 'PATCH',
};
