import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import PasswordInput from '../ui/PasswordInput';
import { getUserSelector } from '../../selectors/user';
import {
  NAME_FIELD_TYPE,
  EMAIL_FIELD_TYPE,
  PASSWORD_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
} from '../../constants/forms/types';
import { RoutePaths } from '../../constants/routes';

export const RegisterForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}) => {
  const user = useSelector(getUserSelector);

  if (user) {
    return (
      <Navigate to={RoutePaths.CONSTRUCTOR} replace />
    );
  }

  return (
    <FormLayout
      submitText="Зарегистрироваться"
      isRequest={isRequest}
      error={errors[REQUEST_FIELD_TYPE]}
      onSubmit={onSubmit}
    >
      <div className="mb-6">
        <Input
          type="text"
          name={NAME_FIELD_TYPE}
          placeholder="Имя"
          value={values[NAME_FIELD_TYPE]}
          errorText={errors[NAME_FIELD_TYPE]}
          error={!!errors[NAME_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

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
          placeholder="Пароль"
          value={values[PASSWORD_FIELD_TYPE]}
          disabled={isRequest}
          errorText={errors[PASSWORD_FIELD_TYPE]}
          error={!!errors[PASSWORD_FIELD_TYPE]}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};

RegisterForm.propTypes = {
  values: PropTypes.shape({
    [NAME_FIELD_TYPE]: PropTypes.string,
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    [NAME_FIELD_TYPE]: PropTypes.string,
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [PASSWORD_FIELD_TYPE]: PropTypes.string,
    [REQUEST_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  isRequest: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
