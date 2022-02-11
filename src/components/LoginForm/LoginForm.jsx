import React from 'react';
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './LoginForm.module.css';

export const LoginForm = () => (
  <form className={styles.root}>
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

    <Button type="primary" size="medium">
      Войти
    </Button>
  </form>
);
