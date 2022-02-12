import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import FormLayout from '../FormLayout';

export const ProfileForm = () => (
  <FormLayout
    onChange={() => {}}
    onSubmit={() => {}}
  >
    <div className="mb-6">
      <Input
        type="text"
        name="name"
        icon="EditIcon"
        placeholder="Имя"
      />
    </div>

    <div className="mb-6">
      <Input
        type="text"
        name="email"
        icon="EditIcon"
        placeholder="Логин"
      />
    </div>

    <div className="mb-6">
      <Input
        type="password"
        name="password"
        icon="EditIcon"
        placeholder="Пароль"
      />
    </div>
  </FormLayout>
);
