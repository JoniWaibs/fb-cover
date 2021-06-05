import React, {useReducer, useContext} from 'react';
import authContext from './context'


export const StateProvider =  ({reducer , initialState , children}) => (
  //provider data
  <authContext.Provider
    value={ useReducer(reducer, initialState)}
  >
    {children}
  </authContext.Provider>
);

export const useStateValue = () => useContext(authContext);

