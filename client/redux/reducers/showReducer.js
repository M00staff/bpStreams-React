// Pure function; returns Object; takes in previous state, action dispatched and returns next state
import grabYearData from '../../apiCalls';

export function yearRequest(dispatch, year, row) {
  dispatch({ type: 'SELECT_YEAR' });
  return () => grabYearData(dispatch, year, row);
}
export function yearSuccess(showList) {
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
