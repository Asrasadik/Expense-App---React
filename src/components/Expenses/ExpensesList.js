import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">Found no expenses. </h2>
  );

  if (props.filtItem.length > 0) {
    expenseContent = (
      <ul className="expenses-list">
        {props.filtItem.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </ul>
    );
  }
  return expenseContent;
};

export default ExpensesList;
