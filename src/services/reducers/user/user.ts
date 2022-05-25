import { TUserState } from '../../../types/state';
import { UserActionTypes } from '../../actions/type';
import { TUserActionTypes } from '../../../types/actions/user';
import { UserState } from '../initialState';

export const reducer = (
  state = UserState,
  action: TUserActionTypes,
): TUserState => {
  switch (action.type) {
    case UserActionTypes.USER_REQUEST:
      return {
        ...state,
        isRequest: true,
        error: null,
      };

    case UserActionTypes.USER_REQUEST_SUCCESS:
      return {
        ...state,
        isRequest: false,
      };

    case UserActionTypes.USER_REQUEST_ERROR:
      return {
        ...state,
        isRequest: false,
        error: action.payload,
      };

    case UserActionTypes.SET_USER:
      console.log(action);
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        error: null,
      };

    case UserActionTypes.REMOVE_USER:
      return UserState;

    default:
      return state;
  }
};
