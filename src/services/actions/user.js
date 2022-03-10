import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_USER,
  REMOVE_USER,
} from './type';

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = () => ({
  type: GET_USER_SUCCESS,
});

export const getUserError = (error) => ({
  type: GET_USER_ERROR,
  payload: error,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
