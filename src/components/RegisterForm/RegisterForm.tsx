import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import PasswordInput from '../ui/PasswordInput';
import { getUserSelector } from '../../selectors/user';
import { FormFieldTypes } from '../../constants/forms/types';
import { RoutePaths } from '../../constants/routes';
import { TFormProps } from '../../types/forms/props';

export const RegisterForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}: TFormProps) => {
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
      error={errors[FormFieldTypes.REQUEST_FIELD_TYPE]}
      onSubmit={onSubmit}
    >
      <div className="mb-6">
        <Input
          type="text"
          name={FormFieldTypes.NAME_FIELD_TYPE}
          placeholder="Имя"
          value={values[FormFieldTypes.NAME_FIELD_TYPE] || ''}
          errorText={errors[FormFieldTypes.NAME_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.NAME_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <Input
          type="text"
          name={FormFieldTypes.EMAIL_FIELD_TYPE}
          placeholder="E-mail"
          value={values[FormFieldTypes.EMAIL_FIELD_TYPE] || ''}
          errorText={errors[FormFieldTypes.EMAIL_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.EMAIL_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <PasswordInput
          name={FormFieldTypes.PASSWORD_FIELD_TYPE}
          placeholder="Пароль"
          value={values[FormFieldTypes.PASSWORD_FIELD_TYPE] || ''}
          disabled={isRequest}
          errorText={errors[FormFieldTypes.PASSWORD_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.PASSWORD_FIELD_TYPE]}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};
