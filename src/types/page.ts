import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import { RoutePaths } from '../constants/routes';

export type TNavigation = {
  title: string;
  path: RoutePaths;
  Icon?: ({ type }: TIconProps) => JSX.Element;
};

export type TLink = {
  description: string;
  route: RoutePaths;
  text: string;
};

export type TPage = {
  title: string;
  links: TLink[];
};

export type TPages = {
  [K in RoutePaths]?: TPage
};
