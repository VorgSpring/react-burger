import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getErrorUserSelector } from '../../selectors/user';
import { getRefreshToken } from '../../helpers/tokens';
import { RoutePaths } from '../../constants/routes';

export function IsNotAuthorized({ children }) {
  const errorUser = useSelector(getErrorUserSelector);
  const refreshToken = getRefreshToken();

  if (errorUser || !refreshToken) {
    return children;
  }

  return (
    <Navigate to={RoutePaths.CONSTRUCTOR} replace />
  );
}

IsNotAuthorized.propTypes = {
  children: PropTypes.node.isRequired,
};
