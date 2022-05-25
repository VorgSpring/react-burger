import { TUserActionTypes } from '../../../types/actions/user';
import { UserActionTypes } from '../../actions/type';
import { reducer } from './user';

describe('reducer user', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TUserActionTypes)).toEqual({
      isRequest: false,
      email: null,
      name: null,
      error: null,
    });
  });

  it('should handle USER_REQUEST', () => {
    const action: TUserActionTypes = {
      type: UserActionTypes.USER_REQUEST,
    };

    const state = {
      isRequest: false,
      email: null,
      name: null,
      error: 'error',
    };

    expect(reducer(state, action)).toEqual({
      isRequest: true,
      email: null,
      name: null,
      error: null,
    });
  });

  it('should handle USER_REQUEST_SUCCESS', () => {
    const action: TUserActionTypes = {
      type: UserActionTypes.USER_REQUEST_SUCCESS,
    };

    const state = {
      isRequest: true,
      email: null,
      name: null,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      isRequest: false,
      email: null,
      name: null,
      error: null,
    });
  });

  it('should handle USER_REQUEST_ERROR', () => {
    const action: TUserActionTypes = {
      type: UserActionTypes.USER_REQUEST_ERROR,
      payload: 'error',
    };

    const state = {
      isRequest: true,
      email: null,
      name: null,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      isRequest: false,
      email: null,
      name: null,
      error: 'error',
    });
  });

  it('should handle SET_USER', () => {
    const action: TUserActionTypes = {
      type: UserActionTypes.SET_USER,
      payload: {
        email: 'email',
        name: 'name',
      },
    };

    const state = {
      isRequest: false,
      email: null,
      name: null,
      error: 'error',
    };

    expect(reducer(state, action)).toEqual({
      isRequest: false,
      email: 'email',
      name: 'name',
      error: null,
    });
  });

  it('should handle REMOVE_USER', () => {
    const action: TUserActionTypes = {
      type: UserActionTypes.REMOVE_USER,
    };

    const state = {
      isRequest: false,
      email: 'email',
      name: 'name',
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      isRequest: false,
      email: null,
      name: null,
      error: null,
    });
  });
});
