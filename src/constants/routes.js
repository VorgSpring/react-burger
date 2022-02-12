export const RoutePaths = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  INGREDIENT: '/ingredients/:id',
  ORDERS: '/profile/orders',
  ORDER: '/profile/orders/:id',
  EXIT: '/profile/exit',
  ANY: '*',
};

export const NestedProfilePaths = {
  PROFILE: '/',
  ORDERS: '/orders',
  ORDER: '/orders/:id',
  EXIT: '/exit',
};
