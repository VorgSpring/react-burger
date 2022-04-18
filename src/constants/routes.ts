export enum RoutePaths {
  CONSTRUCTOR = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password/*',
  ROOT_PROFILE = '/profile/*',
  PROFILE = '/profile',
  INGREDIENTS = '/ingredients',
  INGREDIENT = '/ingredients/:id',
  ORDERS = '/profile/orders',
  ORDER = '/profile/orders/:id',
  LOGOUT = '/profile/logout',
  FEED = '/feed',
  FEED_ITEM = '/feed/:id',
  ANY = '*',
}

export enum NestedProfilePaths {
  PROFILE = '/',
  ORDERS = '/orders',
  ORDER = '/orders/:id',
  LOGOUT = '/logout',
}
