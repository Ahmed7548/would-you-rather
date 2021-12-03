import classes from "./Button.module.css"
const Button = (props) => {
    const className= `${classes.button} ${props.className}`
    return (
        <button type={props.type} onClick={props.onClick} className={className}>
            {props.children}
        </button>
    )
}

export default Button