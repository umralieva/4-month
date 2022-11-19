import React from "react";
import classes from "./ComponentOne.module.css"

class ClassComponentOne extends React.Component{
    constructor(props) {
    super(props);
}



render() {
        return(
            <ul>
                <li className={classes.style}>Name: {this.props.u.name}</li>
                <li className={classes.style}>Age: {this.props.u.age}</li>

            </ul>
        )
    }
}

export default ClassComponentOne;
