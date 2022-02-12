import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';

export const ForgotPasswordForm = () => (
  <FormLayout submitText="Восстановить" onChange={() => {}}>
    <div className="mb-6">
      <Input
        type="text"
        name="email"
        placeholder="Укажите e-mail"
      />
    </div>
  </FormLayout>
);
