// Pure function; returns Object; takes in previous state, action dispatched and returns next state
import grabYearData from './api/yearApi';
import grabShowData from './api/showApi';

interface ShowListItem {
  date: string;
  identifier: string;
  title: string;
  years: string;
}
interface SetList {
  songTitle: string;
  songFile: string;
  deeOne: string;
  directory: string;
  songSource: string;
}
interface IState {
  showList: Array<ShowListItem>;
  setList: Array<SetList>;
  showTitle: string;
}

export type ReducerAction = {
  type: "SELECT_YEAR" | "YEAR_SUCCESS" | "SELECT_SHOW" | "SHOW_SUCCESS",
  showList: Array<ShowListItem>;
  setList: Array<SetList>;
  showPicked: ShowListItem;
}

export function yearRequest(dispatch: any, yearPicked: number, row: number) {
  dispatch({ type: 'SELECT_YEAR' });
  return grabYearData(dispatch, yearPicked, row);
}
export function yearSuccess(showList: Array<ShowListItem>) {
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

export function showRequest(dispatch: any, id: string, title: string) {
  dispatch({ type: 'SELECT_SHOW' });
  return grabShowData(dispatch, id, title);
}
export function showSuccess(setList: Array<SetList>, showPicked: string) {
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

export default function reducer(state: IState, action: ReducerAction) {
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