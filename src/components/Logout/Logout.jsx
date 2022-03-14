import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../constants/routes';
import { getErrorUserSelector } from '../../selectors/user';
import { logoutUserRequest } from '../../services/operations/user';
import Loader from '../Loader';
import LoadError from '../LoadError';

export const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const error = useSelector(getErrorUserSelector);

  const redirectToConstructor = () => {
    navigate(RoutePaths.CONSTRUCTOR, { replace: true });
  };

  useEffect(() => {
    dispatch(logoutUserRequest(redirectToConstructor));
  }, []);

  if (error) {
    return (
      <LoadError />
    );
  }

  return (
    <Loader />
  );
};
