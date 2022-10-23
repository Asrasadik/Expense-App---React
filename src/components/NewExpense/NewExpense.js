import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expFlag, setexpFlag] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const expFlagHandler = (f) => {
    setexpFlag(false);
  };
  const onAddExp = () => setexpFlag(true);
  return (
    <div className="new-expense">
      {expFlag ? (
        <ExpenseForm
          onSaveEntered={saveExpenseDataHandler}
          flag={expFlagHandler}
        />
      ) : (
        <button type="submit" onClick={onAddExp}>
          Add Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
