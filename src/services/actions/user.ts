import { TUser } from '../../types/user';
import { UserActionTypes } from './type';
import {
  TUserRequest,
  TUserSuccess,
  TUserError,
  TSetUser,
  TRemoveUser,
} from '../../types/actions/user';

export const userRequest = (): TUserRequest => ({
  type: UserActionTypes.USER_REQUEST,
});

export const userRequestSuccess = (): TUserSuccess => ({
  type: UserActionTypes.USER_REQUEST_SUCCESS,
});

export const userRequestError = (error: string): TUserError => ({
  type: UserActionTypes.USER_REQUEST_ERROR,
  payload: error,
});

export const setUser = (user: TUser): TSetUser => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const removeUser = (): TRemoveUser => ({
  type: UserActionTypes.REMOVE_USER,
});
