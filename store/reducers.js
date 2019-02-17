import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import uiReducer from './reducers/uiReducer';
import progressReducer from './reducers/progressReducer';

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer,
    ui: uiReducer,
    progress: progressReducer,
    ...extraReducerObjects
  });
}