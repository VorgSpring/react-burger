import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from '../../hooks/typedHooks';
import { getUserStateSelector } from '../../selectors/user';
import { getRefreshToken } from '../../helpers/tokens';
import { RoutePaths } from '../../constants/routes';

type Props = {
  children: JSX.Element;
};

export const RequireAauthorize = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const { errorUser } = useSelector(getUserStateSelector);
  const refreshToken = getRefreshToken();

  if (!errorUser && refreshToken) {
    return children;
  }

  return (
    <Navigate to={RoutePaths.LOGIN} state={{ from: location }} replace />
  );
};
