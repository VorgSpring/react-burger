import { FormTypes } from './types';
import { BASE_API_URL } from '../api';

export const FormApiUrls = {
  [FormTypes.LOGIN]: `${BASE_API_URL}/auth/login`,
  [FormTypes.REGISTER]: `${BASE_API_URL}/auth/register`,
  [FormTypes.FORGOT_PASSWORD]: `${BASE_API_URL}/password-reset`,
  [FormTypes.RESET_PASSWORD]: `${BASE_API_URL}/password-reset/reset`,
  [FormTypes.PROFILE]: `${BASE_API_URL}/auth/user`,
};

export const FormApiMethods = {
  [FormTypes.LOGIN]: 'POST',
  [FormTypes.REGISTER]: 'POST',
  [FormTypes.FORGOT_PASSWORD]: 'POST',
  [FormTypes.RESET_PASSWORD]: 'POST',
  [FormTypes.PROFILE]: 'PATCH',
};
