export enum IngredientActionTypes {
  GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST',
  GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS',
  GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR',
}

export enum BurgerActionTypes {
  SET_BURGER = 'SET_BURGER',
  REMOVE_BURGER = 'REMOVE_BURGER',
  ADD_INGREDIENT_IN_BURGER = 'ADD_INGREDIENT_IN_BURGER',
  MOVE_INGREDIENT_IN_BURGER = 'MOVE_INGREDIENT_IN_BURGER',
  REMOVE_INGREDIENT_IN_BURGER = 'REMOVE_INGREDIENT_IN_BURGER',
}

export enum OrderActionTypes {
  CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST',
  CREATE_ORDER_CANCEL = 'CREATE_ORDER_CANCEL',
  CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR',
  SET_CURRENT_ORDER = 'SET_CURRENT_ORDER',
  REMOVE_CURRENT_ORDER = 'REMOVE_CURRENT_ORDER',
}

export enum UserActionTypes {
  USER_REQUEST = 'USER_REQUEST',
  USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS',
  USER_REQUEST_ERROR = 'USER_REQUEST_ERROR',
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
}

export enum FormActionTypes {
  FORM_SET_VALUE = 'FORM_SET_VALUE',
  FORM_SET_VALUES = 'FORM_SET_VALUES',
  FORM_SUBMIT_REQUEST = 'FORM_SUBMIT_REQUEST',
  FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS',
  FORM_SET_ERROR = 'FORM_SET_ERROR',
}

export enum WebSocketTypes {
  WS_CONNECTION_START = 'WS_CONNECTION_START',
  WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS',
  WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR',
  WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE',
  WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED',
  WS_GET_MESSAGE = 'WS_GET_MESSAGE',
  WS_CONNECTION_UPDATE_TOKEN = 'WS_CONNECTION_UPDATE_TOKEN',
}
