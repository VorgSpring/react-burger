import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { RoutePaths } from './routes';
import { TNavigation } from '../types/page';

export const HeaderLeftNavigationData: TNavigation[] = [
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

export const HeaderRightNavigationData: TNavigation[] = [
  {
    title: 'Личный кабинет',
    path: RoutePaths.PROFILE,
    Icon: ProfileIcon,
  },
];
