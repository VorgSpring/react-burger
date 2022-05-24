import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { RouteNames, RoutePaths } from './routes';
import { TNavigation } from '../types/page';

export const HeaderLeftNavigationData: TNavigation[] = [
  {
    title: 'Конструктор',
    path: RoutePaths[RouteNames.MAIN],
    Icon: BurgerIcon,
  },
  {
    title: 'Лента заказов',
    path: RoutePaths[RouteNames.FEED],
    Icon: ListIcon,
  },
];

export const HeaderRightNavigationData: TNavigation[] = [
  {
    title: 'Личный кабинет',
    path: RoutePaths[RouteNames.PROFILE],
    Icon: ProfileIcon,
  },
];
