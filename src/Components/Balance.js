import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  //console.log(transactions);
  let balance = transactions
    .reduce((acc, transaction) => transaction.amount + acc, 0)
    .toFixed(2);
  console.log(balance);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </div>
  );
};
