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

const jsx = (
    <Provider store={store} >
        <AddRoutes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
