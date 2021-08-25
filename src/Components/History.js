import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const History = () => {
  //getting the state using the useContext hook by pasing the GlobalContext
  const context = useContext(GlobalContext);

  //console.log(context);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction) => (
          <li
            className={transaction.amount > 0 ? "plus" : "minus"}
            key={transaction.id}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount > 0 ? "+" : "-"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => context.deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
