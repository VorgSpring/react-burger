import { LoginFieldTypes } from '../../../constants/forms';

export const LoginState = {
  [LoginFieldTypes.EMAIL]: '',
  [LoginFieldTypes.PASSWORD]: '',
  isRequest: false,
  errors: {},
};
