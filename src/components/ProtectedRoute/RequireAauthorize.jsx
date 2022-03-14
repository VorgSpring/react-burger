import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';
import { getUserRequest } from '../../services/operations/user';
import { getUserStateSelector } from '../../selectors/user';
import { getRefreshToken } from '../../helpers/tokens';
import { RoutePaths } from '../../constants/routes';

export function RequireAauthorize({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, errorUser } = useSelector(getUserStateSelector);
  const refreshToken = getRefreshToken();

  useEffect(() => {
    if (!user && refreshToken) {
      dispatch(getUserRequest());
    }
  }, []);

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
