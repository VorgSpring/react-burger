import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../../hooks/typedHooks';
import { getErrorUserSelector } from '../../selectors/user';
import { getRefreshToken } from '../../helpers/tokens';
import { RoutePaths } from '../../constants/routes';

type Props = {
  children: JSX.Element;
};

export const IsNotAuthorized = ({ children }: Props): JSX.Element => {
  const errorUser = useSelector(getErrorUserSelector);
  const refreshToken = getRefreshToken();

  if (errorUser || !refreshToken) {
    return children;
  }

  return (
    <Navigate to={RoutePaths.MAIN} replace />
  );
};
