import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../hooks/typedHooks';
import FormLayout from '../FormLayout';
import PasswordInput from '../ui/PasswordInput';
import { formAtionsCreator } from '../../helpers/forms/action';
import { getLastUserEmail } from '../../helpers/email';
import { getUserSelector } from '../../selectors/user';
import {
  FormFieldTypes,
  FormTypes,
} from '../../constants/forms/types';
import { FormActionTypes } from '../../services/actions/type';
import { RoutePaths } from '../../constants/routes';
import { TFormProps } from '../../types/forms/props';

export const LoginForm = ({
  values,
  errors,
  isRequest,
  onChange,
  onSubmit,
}: TFormProps) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const user = useSelector(getUserSelector);

  useEffect(() => {
    const lastUserEmail = getLastUserEmail();

    if (lastUserEmail) {
      dispatch(
        formAtionsCreator(FormTypes.LOGIN, FormActionTypes.FORM_SET_VALUE, {
          field: FormFieldTypes.EMAIL_FIELD_TYPE,
          value: lastUserEmail,
        }),
      );
    }
  }, [dispatch]);

  if (user) {
    // @ts-ignore: Ошибка библиотеки
    const from = state?.from?.pathname || RoutePaths.MAIN;

    return (
      <Navigate to={from} replace />
    );
  }

  return (
    <FormLayout
      submitText="Войти"
      isRequest={isRequest}
      error={errors[FormFieldTypes.REQUEST_FIELD_TYPE]}
      onSubmit={onSubmit}
    >
      <div className="mb-6" data-test="login-form">
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
