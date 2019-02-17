import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk';

// In development, use the browser's Redux dev tools extension if installed
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

export default function configureStore(initialState, options) {
  const middlewares = [
    thunk,
    promise
  ];
  const store = createStore(
    createReducer(),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );
  return store;
}

