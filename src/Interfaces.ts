import { Dispatch } from "react";
import { ReducerAction } from './Reducer';

export interface ShowListItem {
  date: string;
  identifier: string;
  title: string;
  years: string;
}
export interface SetList {
  songTitle: string;
  songFile: string;
  deeOne: string;
  directory: string;
  songSource: string;
}
export interface IState {
  showList: Array<ShowListItem>;
  setList: Array<SetList>;
  showTitle: string;
}
export interface IContextProps {
  state: IState;
  dispatch: Dispatch<ReducerAction>;
}