import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseSummary from "./ExpenseSummary";

const Dashboard = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default Dashboard;