import React from 'react';
import {
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';

export const LoginForm = () => (
  <FormLayout
    submitText="Войти"
    onChange={() => {}}
    onSubmit={() => {}}
  >
    <div className="mb-6">
      <Input
        type="text"
        name="email"
        placeholder="E-mail"
      />
    </div>

    <div className="mb-6">
      <PasswordInput name="password" />
    </div>
  </FormLayout>
);
