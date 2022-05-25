import { TOrderActionTypes } from '../../../types/actions/order';
import { OrderActionTypes } from '../../actions/type';
import { reducer } from './order';

describe('reducer order', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TOrderActionTypes)).toEqual({
      currentOrder: null,
      isCreating: false,
      error: null,
    });
  });

  it('should handle CREATE_ORDER_REQUEST', () => {
    const action: TOrderActionTypes = {
      type: OrderActionTypes.CREATE_ORDER_REQUEST,
    };

    expect(reducer(undefined, action)).toEqual({
      currentOrder: null,
      isCreating: true,
      error: null,
    });
  });

  it('should handle CREATE_ORDER_CANCEL', () => {
    const action: TOrderActionTypes = {
      type: OrderActionTypes.CREATE_ORDER_CANCEL,
    };

    const state = {
      currentOrder: null,
      isCreating: true,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      currentOrder: null,
      isCreating: false,
      error: null,
    });
  });

  it('should handle CREATE_ORDER_SUCCESS', () => {
    const action: TOrderActionTypes = {
      type: OrderActionTypes.CREATE_ORDER_SUCCESS,
    };

    const state = {
      currentOrder: null,
      isCreating: true,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      currentOrder: null,
      isCreating: false,
      error: null,
    });
  });

  it('should handle CREATE_ORDER_ERROR', () => {
    const action: TOrderActionTypes = {
      type: OrderActionTypes.CREATE_ORDER_ERROR,
      payload: 'error',
    };

    const state = {
      currentOrder: null,
      isCreating: true,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      currentOrder: null,
      isCreating: false,
      error: 'error',
    });
  });

  it('should handle SET_CURRENT_ORDER', () => {
    const action: TOrderActionTypes = {
      type: OrderActionTypes.SET_CURRENT_ORDER,
      payload: 666,
    };

    expect(reducer(undefined, action)).toEqual({
      currentOrder: 666,
      isCreating: false,
      error: null,
    });
  });

  it('should handle REMOVE_CURRENT_ORDER', () => {
    const action: TOrderActionTypes = {
      type: OrderActionTypes.REMOVE_CURRENT_ORDER,
    };

    const state = {
      currentOrder: 666,
      isCreating: false,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      currentOrder: null,
      isCreating: false,
      error: null,
    });
  });
});
