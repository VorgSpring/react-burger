import React from 'react';
import {
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';

export const ResetPasswordForm = () => (
  <FormLayout
    submitText="Сохранить"
    onChange={() => {}}
    onSubmit={() => {}}
  >
    <div className="mb-6">
      <PasswordInput
        name="password"
        placeholder="Введите новый пароль"
      />
    </div>

    <div className="mb-6">
      <Input
        type="text"
        name="code"
        placeholder="Введите код из письма"
      />
    </div>
  </FormLayout>
);
