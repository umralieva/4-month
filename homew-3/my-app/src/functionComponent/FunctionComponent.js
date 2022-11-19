import React from 'react';
import classes from "./Functiun.module.css"

function FunctionComponent() {
    const ClickMe = () => {
        alert("Hello World")
    }
    return (
        <>
        <button className={classes.btn} onClick={ClickMe}>Click me</button>
        </>
    );
}

export default FunctionComponent;