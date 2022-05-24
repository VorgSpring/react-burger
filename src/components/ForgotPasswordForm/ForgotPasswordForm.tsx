import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import { FormFieldTypes } from '../../constants/forms/types';
import { RoutePaths } from '../../constants/routes';
import { TFormProps } from '../../types/forms/props';

export const ForgotPasswordForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}: TFormProps) => {
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
    onSubmit({ callback: redirectToResetPassword });
  };

  return (
    <FormLayout
      submitText="Восстановить"
      isRequest={isRequest}
      error={errors[FormFieldTypes.REQUEST_FIELD_TYPE]}
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <Input
          type="text"
          name={FormFieldTypes.EMAIL_FIELD_TYPE}
          placeholder="Укажите e-mail"
          value={values[FormFieldTypes.EMAIL_FIELD_TYPE] || ''}
          errorText={errors[FormFieldTypes.EMAIL_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.EMAIL_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};
