import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RouteNames, RoutePaths } from '../../constants/routes';
import { useDispatch } from '../../hooks/typedHooks';
import { getErrorUserSelector } from '../../selectors/user';
import { logoutUserRequest } from '../../services/operations/user';
import Loader from '../Loader';
import LoadError from '../LoadError';

export const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const error = useSelector(getErrorUserSelector);

  useEffect(() => {
    const redirectToConstructor = () => {
      navigate(RoutePaths[RouteNames.MAIN], { replace: true });
    };

    dispatch(logoutUserRequest(redirectToConstructor));
  }, [dispatch, navigate]);

  if (error) {
    return (
      <LoadError />
    );
  }

  return (
    <Loader />
  );
};
