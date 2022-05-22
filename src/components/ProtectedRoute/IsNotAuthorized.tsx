import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
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
