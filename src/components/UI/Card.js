import React from "react";
import classes from "./Card.module.css"

const Card = (props) => {
    const className= `${classes.card} ${props.className}`
    return (
        <div className={className} onClick={props.onClick} >
            {props.children}
        </div>
    )
}


export default Card