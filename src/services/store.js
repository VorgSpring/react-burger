import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { localStorageMiddleware } from './middleware/localStorage';
import { rootReducer } from './reducers/rootReducer';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, localStorageMiddleware),
);

export const store = createStore(rootReducer, enhancer);
