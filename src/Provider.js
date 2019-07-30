import React, { useReducer, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
  // Should be called a reducer provider - cause all its really doing is passing around the reducer
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this was just abstracting out the useContext() call 
// export const useStateValue = () => useContext(StateContext);