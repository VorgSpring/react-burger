import React from 'react';
import PropTypes, { string } from 'prop-types';
import {
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import {
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
} from '../../constants/forms/types';

export const LoginForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}) => (
  <FormLayout
    submitText="Войти"
    isRequest={isRequest}
    error={errors[REQUEST_FIELD_TYPE]}
    onSubmit={onSubmit}
  >
    <div className="mb-6">
      <Input
        type="text"
        name={EMAIL_FIELD_TYPE}
        placeholder="E-mail"
        value={values[EMAIL_FIELD_TYPE]}
        errorText={errors[EMAIL_FIELD_TYPE]}
        error={!!errors[EMAIL_FIELD_TYPE]}
        disabled={isRequest}
        onChange={onChange}
      />
    </div>

    <div className="mb-6">
      <PasswordInput
        name={PASSWORD_FIELD_TYPE}
        value={values[PASSWORD_FIELD_TYPE]}
        disabled={isRequest}
        errorText={errors[PASSWORD_FIELD_TYPE]}
        error={!!errors[PASSWORD_FIELD_TYPE]}
        onChange={onChange}
      />
    </div>
  </FormLayout>
);

LoginForm.propTypes = {
  values: PropTypes.shape({
    [EMAIL_FIELD_TYPE]: string,
    [PASSWORD_FIELD_TYPE]: string,
  }).isRequired,
  errors: PropTypes.shape({
    [EMAIL_FIELD_TYPE]: string,
    [PASSWORD_FIELD_TYPE]: string,
    [REQUEST_FIELD_TYPE]: string,
  }).isRequired,
  isRequest: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
