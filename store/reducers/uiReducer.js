import {
  TOGGLE_MAIN_MENU
} from '../actions/types';

const uiReducer = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_MAIN_MENU:
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
}

export default uiReducer;
