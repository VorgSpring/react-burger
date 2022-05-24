import React from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';
import PasswordInput from '../ui/PasswordInput';
import { FormFieldTypes } from '../../constants/forms/types';
import { RouteNames, RoutePaths } from '../../constants/routes';
import { TFormProps } from '../../types/forms/props';

export const ResetPasswordForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}: TFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectToConstructor = () => {
    navigate(
      RoutePaths[RouteNames.LOGIN],
      {
        state: { isForgot: false },
      },
    );
  };

  const handleSubmit = () => {
    onSubmit({ callback: redirectToConstructor });
  };

  // @ts-ignore: Ошибка библиотеки
  if (!location.state?.isForgot) {
    return (
      <Navigate to={RoutePaths[RouteNames.MAIN]} />
    );
  }

  return (
    <FormLayout
      submitText="Сохранить"
      isRequest={isRequest}
      error={errors[FormFieldTypes.REQUEST_FIELD_TYPE]}
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <PasswordInput
          name={FormFieldTypes.PASSWORD_FIELD_TYPE}
          placeholder="Введите новый пароль"
          value={values[FormFieldTypes.PASSWORD_FIELD_TYPE] || ''}
          disabled={isRequest}
          errorText={errors[FormFieldTypes.PASSWORD_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.PASSWORD_FIELD_TYPE]}
          onChange={onChange}
        />
      </div>

      <div className="mb-6">
        <Input
          type="text"
          name={FormFieldTypes.CODE_FIELD_TYPE}
          placeholder="Введите код из письма"
          value={values[FormFieldTypes.CODE_FIELD_TYPE] || ''}
          errorText={errors[FormFieldTypes.CODE_FIELD_TYPE]}
          error={!!errors[FormFieldTypes.CODE_FIELD_TYPE]}
          disabled={isRequest}
          onChange={onChange}
        />
      </div>
    </FormLayout>
  );
};
