import React, { createContext, useReducer } from "react";
import { actionTypes } from "./actionTypes";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  transactions: [
    { id: 1, text: "Cricket Bat", amount: -100 },
    { id: 2, text: "Salary", amount: 1000 },
    { id: 3, text: "Trip", amount: -300 },
    { id: 4, text: "Bike", amount: -150 },
  ],
};

//Create Context

export const GlobalContext = createContext(initialState);

//Creating Provider

export const GlobalProvider = ({ children }) => {
  //here children are the other components we wrap inside this provider
  //useReducer hook takes the reducer and the initialstate
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action creator
  //we have to pass the actions to the provider to use in components just like the values
  const deleteTransaction = (id) => {
    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: actionTypes.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  return (
    //provider takes in a prop as value where we pass our global state
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
