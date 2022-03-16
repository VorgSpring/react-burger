import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import {
  EMAIL_FIELD_TYPE,
  REQUEST_FIELD_TYPE,
} from '../../constants/forms/types';
import { RoutePaths } from '../../constants/routes';

export const ForgotPasswordForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}) => {
  const navigate = useNavigate();

  const redirectToResetPassword = () => {
    navigate(
      RoutePaths.RESET_PASSWORD,
      {
        state: { isForgot: true },
      },
    );
  };

  const handleSubmit = () => {
    onSubmit(redirectToResetPassword);
  };

  return (
    <FormLayout
      submitText="Восстановить"
      isRequest={isRequest}
      error={errors[REQUEST_FIELD_TYPE]}
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <Input
          type="text"
          name={EMAIL_FIELD_TYPE}
          placeholder="Укажите e-mail"
          value={values[EMAIL_FIELD_TYPE]}
          errorText={errors[EMAIL_FIELD_TYPE]}
          error={!!errors[EMAIL_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};

ForgotPasswordForm.propTypes = {
  values: PropTypes.shape({
    [EMAIL_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    [EMAIL_FIELD_TYPE]: PropTypes.string,
    [REQUEST_FIELD_TYPE]: PropTypes.string,
  }).isRequired,
  isRequest: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
