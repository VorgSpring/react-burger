import { RouteNames, RoutePaths } from './routes';
import { TNavigation, TPages } from '../types/page';

export const EntrancePageData: TPages = {
  [RoutePaths[RouteNames.LOGIN]]: {
    title: 'Вход',
    links: [
      {
        description: 'Вы — новый пользователь?',
        route: RoutePaths[RouteNames.REGISTER],
        text: 'Зарегистрироваться',
      },
      {
        description: 'Забыли пароль?',
        route: RoutePaths[RouteNames.FORGOT_PASSWORD],
        text: 'Восстановить пароль',
      },
    ],
  },

  [RoutePaths[RouteNames.REGISTER]]: {
    title: 'Регистрация',
    links: [
      {
        description: 'Уже зарегистрированы?',
        route: RoutePaths[RouteNames.LOGIN],
        text: 'Войти',
      },
    ],
  },

  [RoutePaths[RouteNames.FORGOT_PASSWORD]]: {
    title: 'Восстановление пароля',
    links: [
      {
        description: 'Вспомнили пароль?',
        route: RoutePaths[RouteNames.LOGIN],
        text: 'Войти',
      },
    ],
  },

  [RoutePaths[RouteNames.RESET_PASSWORD]]: {
    title: 'Восстановление пароля',
    links: [
      {
        description: 'Вспомнили пароль?',
        route: RoutePaths[RouteNames.LOGIN],
        text: 'Войти',
      },
    ],
  },
};

export const ProfileNavigationData: TNavigation[] = [
  {
    path: RoutePaths[RouteNames.PROFILE],
    title: 'Профиль',
  },

  {
    path: RoutePaths[RouteNames.ORDERS],
    title: 'История заказов',
  },

  {
    path: RoutePaths[RouteNames.LOGOUT],
    title: 'Выход',
  },
];
