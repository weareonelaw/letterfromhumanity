import {
  GET_PROGRESS_PENDING,
  GET_PROGRESS_FULFILLED,
  GET_PROGRESS_REJECTED
} from '../actions/types';

const progressGoal = 200000;

const uiReducer = (
  state = {
    progressGoal: progressGoal,
    value: 0,
    isLoading: false,
    hasData: false,
    hasError: false
  },
  action
) => {
  switch (action.type) {
    case GET_PROGRESS_PENDING:
      return { ...state, isLoading: true };
    case GET_PROGRESS_FULFILLED:
      return { ...state, value: action.payload.data.signatures, isLoading: false, hasData: true };
    case GET_PROGRESS_REJECTED:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

export default uiReducer;
