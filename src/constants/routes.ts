const BASE_PATH = process.env.NODE_ENV === 'production' ? '/react-burger' : '';

export enum RouteNames {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot-password',
  RESET_PASSWORD = 'reset-password',
  PROFILE = 'profile',
  INGREDIENTS = 'ingredients',
  ORDERS = 'orders',
  LOGOUT = 'logout',
  FEED = 'feed',
  ANY = '*',
}

type TRoutePaths = { [K in RouteNames]: string };
export const RoutePaths: TRoutePaths = {
  [RouteNames.MAIN]: `${BASE_PATH}`,
  [RouteNames.LOGIN]: `${BASE_PATH}/${RouteNames.LOGIN}`,
  [RouteNames.REGISTER]: `${BASE_PATH}/${RouteNames.REGISTER}`,
  [RouteNames.FORGOT_PASSWORD]: `${BASE_PATH}/${RouteNames.FORGOT_PASSWORD}`,
  [RouteNames.RESET_PASSWORD]: `${BASE_PATH}/${RouteNames.RESET_PASSWORD}`,
  [RouteNames.PROFILE]: `${BASE_PATH}/${RouteNames.PROFILE}`,
  [RouteNames.ORDERS]: `${BASE_PATH}/${RouteNames.PROFILE}/${RouteNames.ORDERS}`,
  [RouteNames.LOGOUT]: `${BASE_PATH}/${RouteNames.PROFILE}/${RouteNames.LOGOUT}`,
  [RouteNames.INGREDIENTS]: `${BASE_PATH}/${RouteNames.INGREDIENTS}`,
  [RouteNames.FEED]: `${BASE_PATH}/${RouteNames.FEED}`,
  [RouteNames.ANY]: `${BASE_PATH}/${RouteNames.ANY}`,
};
