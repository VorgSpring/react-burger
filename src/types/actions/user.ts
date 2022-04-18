import { TUser } from '../user';
import { UserActionTypes } from '../../services/actions/type';

export type TUserRequest = {
  type: UserActionTypes.USER_REQUEST;
};

export type TUserSuccess = {
  type: UserActionTypes.USER_REQUEST_SUCCESS;
};

export type TUserError = {
  type: UserActionTypes.USER_REQUEST_ERROR;
  payload: string;
};

export type TSetUser = {
  type: UserActionTypes.SET_USER;
  payload: TUser;
};

export type TRemoveUser = {
  type: UserActionTypes.REMOVE_USER;
};

export type TUserActionTypes = TUserRequest
| TUserSuccess
| TUserError
| TSetUser
| TRemoveUser;
