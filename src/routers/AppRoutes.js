import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Create from "../components/Create";
import Edit from "../components/Edit";
import Help from "../components/Help";
import PageNotFound from "../components/PageNotFound";

const AppRoutes = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/help" component={Help} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRoutes;