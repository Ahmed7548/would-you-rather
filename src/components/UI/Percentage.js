import classes from "./percentage.module.css"
const Percentage = (props) => {
    
    return (
        <div className={classes.outer}>
            <div className={classes.inner} style={{
                width:`${props.percentage}%`
            }}>{props.percentage}%</div>
        </div>
    )
}

export default Percentage