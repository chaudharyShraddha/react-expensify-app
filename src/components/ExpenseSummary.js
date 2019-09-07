import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selextExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

const ExpenseSummary = ( { expenseCount, expenseTotal } ) => {
    const expenseWord = expenseCount == 1 ? "expense": "expenses";
    const formatedDate = numeral( expenseTotal / 100 ).format("$0,0.00");
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formatedDate}.</h1>
        </div>
    );
}

const mapStateToProps = ( state ) => {
    const visibleExpenses = selextExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal( visibleExpenses )
    }
}

export default connect(mapStateToProps)(ExpenseSummary);