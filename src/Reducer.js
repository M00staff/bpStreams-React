// Pure function; returns Object; takes in previous state, action dispatched and returns next state
import grabYearData from './api/yearApi';
import grabShowData from './api/showApi';

export function yearRequest(dispatch, yearPicked, row) {
  dispatch({ type: 'SELECT_YEAR' });
  return grabYearData(dispatch, yearPicked, row);
}
export function yearSuccess(showList) {
  // jump to playlist
  window.scrollTo(0, 1000);
  return ({
    type: 'YEAR_SUCCESS',
    showList: showList,
  });
}
export function yearFail() {
  return ({
    type: 'YEAR_FAIL',
  });
}

export function showRequest(dispatch, id, title) {
  dispatch({ type: 'SELECT_SHOW' });
  return grabShowData(dispatch, id, title);
}
export function showSuccess(setList, showPicked) {
  // jump to playlist
  window.scrollTo(0, 250);
  return ({
    type: 'SHOW_SUCCESS',
    setList,
    showPicked,
  });
}
export function showFail() {
  return ({
    type: 'SHOW_FAIL',
  });
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_YEAR':
      return { ...state };
    case 'YEAR_SUCCESS':
      return {
        ...state,
        showList: action.showList,
      };
    case 'SELECT_SHOW':
        return { ...state };
    case 'SHOW_SUCCESS':
      return {
        ...state,
        setList: action.setList,
        showTitle: action.showPicked,
      };
    default:
      return { ...state };
  }
}