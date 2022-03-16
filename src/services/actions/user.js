import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  SET_USER,
  REMOVE_USER,
} from './type';

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userRequestSuccess = () => ({
  type: USER_REQUEST_SUCCESS,
});

export const userRequestError = (error) => ({
  type: USER_REQUEST_ERROR,
  payload: error,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
