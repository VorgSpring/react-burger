import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';
import { getUserStateSelector } from '../../selectors/user';
import { getRefreshToken } from '../../helpers/tokens';
import { RoutePaths } from '../../constants/routes';

export function RequireAauthorize({ children }) {
  const location = useLocation();
  const { errorUser } = useSelector(getUserStateSelector);
  const refreshToken = getRefreshToken();

  if (!errorUser && refreshToken) {
    return children;
  }

  return (
    <Navigate to={RoutePaths.LOGIN} state={{ from: location }} replace />
  );
}

RequireAauthorize.propTypes = {
  children: PropTypes.node.isRequired,
};
