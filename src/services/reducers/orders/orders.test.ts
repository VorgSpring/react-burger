import { OrderStatuses } from '../../../constants/orders/status';
import { OrderStoreNames } from '../../../constants/orders/store';
import { OrdersTypes } from '../../../constants/orders/types';
import { ordersAtionsCreator } from '../../../helpers/orders/action';
import { TOrderAtionsCreator } from '../../../types/order';
import { WebSocketTypes } from '../../actions/type';
import { reducer as ordersReducer } from './orders';

describe('reducer order', () => {
  const reducerNames = Object.keys(OrderStoreNames);

  it.each(reducerNames)('should %s return the initial state', (name) => {
    const reducerName = OrderStoreNames[name as keyof typeof OrderStoreNames];
    const reducer = ordersReducer[reducerName];

    expect(reducer(undefined, {} as TOrderAtionsCreator)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: true,
      isConnecting: false,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_START', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_START,
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: true,
      isClosed: true,
      isConnecting: false,
      error: 'error',
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: true,
      isConnecting: true,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_SUCCESS', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_SUCCESS,
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: true,
      isConnecting: true,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: true,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_SUCCESS', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_SUCCESS,
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: true,
      isConnecting: true,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: true,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_ERROR', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_ERROR,
      {
        error: 'error',
      },
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: false,
      isConnecting: true,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: 'error',
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_UPDATE_TOKEN', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_UPDATE_TOKEN,
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: true,
      isClosed: false,
      isConnecting: false,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_CLOSE', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_CLOSE,
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: true,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_CONNECTION_CLOSED', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_CONNECTION_CLOSED,
    );

    const state = {
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: false,
      isConnecting: false,
      error: null,
    };

    expect(reducer(state, action)).toEqual({
      orders: null,
      total: null,
      totalToday: null,
      isOpen: false,
      isUpdating: false,
      isClosed: true,
      isConnecting: false,
      error: null,
    });
  });

  it.each(reducerNames)('should %s handle WS_GET_MESSAGE', (name) => {
    const orderType = OrdersTypes[name as keyof typeof OrdersTypes];
    const reducerName = OrderStoreNames[name as keyof typeof OrdersTypes];
    const reducer = ordersReducer[reducerName];

    const action: TOrderAtionsCreator = ordersAtionsCreator(
      orderType,
      WebSocketTypes.WS_GET_MESSAGE,
      {
        orders: [{
          ingredients: ['ingredients'],
          id: 'id',
          status: OrderStatuses.CANCEL,
          number: 6,
          name: 'name',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
        }],
        total: 66,
        totalToday: 666,
      },
    );

    expect(reducer(undefined, action)).toEqual({
      orders: [{
        ingredients: ['ingredients'],
        id: 'id',
        status: OrderStatuses.CANCEL,
        number: 6,
        name: 'name',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }],
      total: 66,
      totalToday: 666,
      isOpen: false,
      isUpdating: false,
      isClosed: true,
      isConnecting: false,
      error: null,
    });
  });
});
