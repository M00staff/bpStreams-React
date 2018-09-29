// Pure function; returns Object; takes in previous state, action dispatched and returns next state
import grabShowData from '../api/showApi';

export function grabSongs(dispatch, id, title) {
  dispatch({ type: 'SELECT_SHOW' });
  return () => grabShowData(dispatch, id, title);
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

export default function shows(state, action) {
  switch (action.type) {
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
