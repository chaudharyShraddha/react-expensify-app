import React from "react";
import ReactDOM from"react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the text is:{props.info}</p>
    </div>
);
const IsAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth && <p>this is some private data!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
};

const IsAuth = IsAuthenticated(Info);

ReactDOM.render(<IsAuth info="this is data" isAuth={true} />, document.getElementById("app"));