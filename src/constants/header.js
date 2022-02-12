import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { RoutePaths } from './routes';

export const HeaderLeftNavigationData = [
  {
    title: 'Конструктор',
    path: RoutePaths.CONSTRUCTOR,
    Icon: BurgerIcon,
  },
  {
    title: 'Лента заказов',
    path: RoutePaths.FEED,
    Icon: ListIcon,
  },
];

export const HeaderRightNavigationData = [
  {
    title: 'Личный кабинет',
    path: RoutePaths.PROFILE,
    Icon: ProfileIcon,
  },
];
