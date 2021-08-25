import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  let currentTransactions = [...transactions];

  let income = currentTransactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => transaction.amount + acc, 0).toFixed(2);

  let expense = currentTransactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => transaction.amount + acc, 0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
