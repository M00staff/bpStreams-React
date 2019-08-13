import React, { useReducer, createContext, Dispatch } from 'react';
import { ReducerAction } from './Reducer';

type ShowListItem = {
  date: string;
  identifier: string;
  title: string;
  years: string;
}
type SetList = {
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
interface IContextProps {
  state: IState;
  dispatch: Dispatch<ReducerAction>;
  // useReducer: Reducer<any, any>
}

let initialState: IState = {
  showList: [],
  setList: [],
  showTitle: '',
}

// export const StateContext = createContext<IContextProps | null>(null);
export const StateContext = createContext({} as IContextProps);

export const StateProvider = ({reducer, children}: any) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
  // Should be called a reducer provider - cause all its really doing is passing around the reducer
  <StateContext.Provider value={{ state, dispatch }}>
    {children}
  </StateContext.Provider>
)};

// this was just abstracting out the useContext() call 
// export const useStateValue = () => useContext(StateContext);