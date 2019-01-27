import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import uiReducer from './reducers/uiReducer';

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer,
    ui: uiReducer,
    ...extraReducerObjects
  });
}