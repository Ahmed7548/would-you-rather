import Button from "./Button"
import classes from "./ButtonII.module.css"

const ButtonII = (props) => {
    
    return (
        <Button className={classes.show} onClick={props.onClick} type={props.type}>
            {props.children}
        </Button>
    )
}

export default ButtonII