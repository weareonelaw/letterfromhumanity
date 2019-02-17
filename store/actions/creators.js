import * as actionTypes from './types';
import axios from 'axios';

export const toggleMainMenu = () => ({
  type: actionTypes.TOGGLE_MAIN_MENU,
});

export const getProgress = () => (dispatch) => {
  const url = `${process.env.BACKEND_URL}/stats`;

  dispatch({
    type: actionTypes.GET_PROGRESS,
    payload: {
      promise: axios.get(url),
    }
  })
};