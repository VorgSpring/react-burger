import { RoutePaths } from './routes';
import { TNavigation, TPages } from '../types/page';

export const EntrancePageData: TPages = {
  [RoutePaths.LOGIN]: {
    title: 'Вход',
    links: [
      {
        description: 'Вы — новый пользователь?',
        route: RoutePaths.REGISTER,
        text: 'Зарегистрироваться',
      },
      {
        description: 'Забыли пароль?',
        route: RoutePaths.FORGOT_PASSWORD,
        text: 'Восстановить пароль',
      },
    ],
  },

  [RoutePaths.REGISTER]: {
    title: 'Регистрация',
    links: [
      {
        description: 'Уже зарегистрированы?',
        route: RoutePaths.LOGIN,
        text: 'Войти',
      },
    ],
  },

  [RoutePaths.FORGOT_PASSWORD]: {
    title: 'Восстановление пароля',
    links: [
      {
        description: 'Вспомнили пароль?',
        route: RoutePaths.LOGIN,
        text: 'Войти',
      },
    ],
  },

  [RoutePaths.RESET_PASSWORD]: {
    title: 'Восстановление пароля',
    links: [
      {
        description: 'Вспомнили пароль?',
        route: RoutePaths.LOGIN,
        text: 'Войти',
      },
    ],
  },
};

export const ProfileNavigationData: TNavigation[] = [
  {
    path: RoutePaths.PROFILE,
    title: 'Профиль',
  },

  {
    path: RoutePaths.ORDERS,
    title: 'История заказов',
  },

  {
    path: RoutePaths.LOGOUT,
    title: 'Выход',
  },
];