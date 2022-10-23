import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //or
  // const [userInput, setInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //or
    // setInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const onAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const onDateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveEntered(expenseData);
    props.flag(false);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const onCancel = (event) => {
    event.preventDefault();
    props.flag(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel} type="cancel">
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
