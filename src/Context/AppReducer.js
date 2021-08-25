import { actionTypes } from "./actionTypes";

const AppReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: deleteSelectedTransactions(
          state.transactions,
          action.payload
        ),
      };
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: addNewTransaction(state.transactions, action.payload),
      };
    default:
      return state;
  }
};

const deleteSelectedTransactions = (transactions, id) => {
  return transactions.filter((transaction) => transaction.id !== id);
};

const addNewTransaction = (transactions, payload) => {
  const newTransaction = {
    id: transactions.length + 1,
    text: payload.text,
    amount: Number(payload.amount),
  };

  return [...transactions, newTransaction];
};

export default AppReducer;
