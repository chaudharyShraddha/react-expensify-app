import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AddRoutes from "./routers/AppRoutes";

import configureStore from "./stores/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch( addExpense({ description: "water bill" ,amount: 4500}) );
store.dispatch( addExpense({ description: "gas bill" , createdAt: 1000}) );
store.dispatch( addExpense({ description: "Rent" ,amount: 109500}) );

const state = store.getState();
const visibleExpense = getVisibleExpenses( state.expenses, state.filters );
console.log( visibleExpense );

const jsx = (
    <Provider store={store} >
        <AddRoutes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
