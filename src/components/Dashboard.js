import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const Dashboard = () => (
    <div>
        <br/>
        <ExpenseListFilter />
        <br/>
        <ExpenseList />
    </div>
);

export default Dashboard;