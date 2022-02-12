export const RoutePaths = {
  CONSTRUCTOR: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  INGREDIENT: '/ingredients/:id',
  ORDERS: '/profile/orders',
  ORDER: '/profile/orders/:id',
  EXIT: '/profile/exit',
  FEED: '/feed',
  FEED_ITEM: '/feed/:id',
  ANY: '*',
};

export const NestedProfilePaths = {
  PROFILE: '/',
  ORDERS: '/orders',
  ORDER: '/orders/:id',
  EXIT: '/exit',
};
