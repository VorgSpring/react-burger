import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { RoutePaths } from '../../constants/routes';
import styles from './LoginPage.module.css';

export const LoginPage = () => (
  <section className={styles.root}>
    <h1 className="text text_type_main-medium mb-6">
      Вход
    </h1>

    <LoginForm />

    <p className="text text_type_main-default text_color_inactive mt-20 mb-4">
      Вы — новый пользователь?
      <Link to={RoutePaths.REGISTER}>
        <span className={`${styles.link} ml-2`}>
          Зарегистрироваться
        </span>
      </Link>
    </p>

    <p className="text text_type_main-default text_color_inactive">
      Забыли пароль?
      <Link to={RoutePaths.FORGOT_PASSWORD}>
        <span className={`${styles.link} ml-2`}>
          Восстановить пароль
        </span>
      </Link>
    </p>
  </section>
);
