// Pure function; returns Object; takes in previous state, action dispatched and returns next state
import grabYearData from '../api/yearApi';

export function yearRequest(dispatch, yearPicked, row) {
  dispatch({ type: 'SELECT_YEAR' });
  return grabYearData(dispatch, yearPicked, row);
}
export function yearSuccess(showList) {
  // jump to playlist
  window.scrollTo(0, 1000);
  return ({
    type: 'YEAR_SUCCESS',
    showList,
  });
}
export function yearFail() {
  return ({
    type: 'YEAR_FAIL',
  });
}

export default function shows(state, action) {
  switch (action.type) {
    case 'SELECT_YEAR':
      return { ...state };
    case 'YEAR_SUCCESS':
      return {
        ...state,
        showList: action.showList,
      };
    default:
      return { ...state };
  }
}