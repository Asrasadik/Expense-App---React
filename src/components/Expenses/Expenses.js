import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterDate = (filteredDate) => {
    //console.log(filteredDate);
    setFilteredYear(filteredDate);
  };

  const filteredItems = props.items.filter((exp) => {
    return exp.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterDate={filterDate} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList filtItem={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
//can have {expenseContent} here also by moving code here and getting rid of <ExpensesList/> compo
