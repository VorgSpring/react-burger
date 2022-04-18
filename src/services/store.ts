import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { burgerMiddleware } from './middleware/burger';
import { userMiddleware } from './middleware/user';
import { rootReducer } from './reducers';

// @ts-ignore: В следующем спринте реализуется типизации хранилища.
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // @ts-ignore: В следующем спринте реализуется типизации хранилища.
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, burgerMiddleware, userMiddleware),
);

export const store = createStore(rootReducer, enhancer);
