import classes from "./CardHead.module.css"
const CardHead = (props) => {
    
    return (
        <div className={classes.name}>
            <p>{props.children}</p>
    </div>
    )
}

export default CardHead