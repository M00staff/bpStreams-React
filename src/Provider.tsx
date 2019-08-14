import React, { useReducer, createContext } from 'react';
import { IState, IContextProps } from './Interfaces';

let initialState: IState = {
  showList: [],
  setList: [],
  showTitle: '',
}

export const StateContext = createContext({} as IContextProps);

export const StateProvider = ({reducer, children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  // Should be called a reducer provider - cause all its really doing is passing around the reducer
  <StateContext.Provider value={{ state, dispatch } as IContextProps}>
    {children}
  </StateContext.Provider>
)};
