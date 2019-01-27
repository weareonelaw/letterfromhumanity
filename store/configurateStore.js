import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';

// In development, use the browser's Redux dev tools extension if installed
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

export default function configureStore() {
  const middlewares = [];
  const store = createStore(
    createReducer(),
    {},
    compose(applyMiddleware(...middlewares), ...enhancers)
  );
  return store;
}

