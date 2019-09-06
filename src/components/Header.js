import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/create" activeClassName="is-active" >Create</NavLink>&nbsp;&nbsp;&nbsp;
           <NavLink to="/help" activeClassName="is-active" >Help</NavLink>&nbsp;&nbsp;&nbsp;
    </div>
)

export default Header;