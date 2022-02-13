import { LoginFieldNames } from '../../../constants/forms';

export const LoginState = {
  [LoginFieldNames.EMAIL]: '',
  [LoginFieldNames.PASSWORD]: '',
  isRequest: false,
  errors: {},
};
