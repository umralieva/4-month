import React from "react";
import classes from "./ComponentTwo.module.css"
class ClassComponentTwo  extends React.Component{

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

export default ClassComponentTwo;
