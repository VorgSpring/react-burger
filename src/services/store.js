import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ingredintsMiddleware } from './middleware/ingredints';
import { userMiddleware } from './middleware/user';
import { rootReducer } from './reducers';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, ingredintsMiddleware, userMiddleware),
);

export const store = createStore(rootReducer, enhancer);
