import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';

export type TNavigation = {
  title: string;
  path: string;
  Icon?: ({ type }: TIconProps) => JSX.Element;
};

export type TLink = {
  description: string;
  route: string;
  text: string;
};

export type TPage = {
  title: string;
  links: TLink[];
};

export type TPages = {
  [K in string]: TPage
};
