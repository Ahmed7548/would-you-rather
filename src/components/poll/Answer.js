import Percentage from "../UI/Percentage"
import classes from "./Answer.module.css"
import {AiFillCheckCircle} from "react-icons/ai"
const Answer = (props) => {
    const className=`${classes.answer} ${props.className}`
    return (
        <div className={className} >
            <p>{props.children}</p>
            <Percentage percentage={props.percentage} />
            <p>{props.chosen} of {props.all} chose this</p>
            {props.isUsersChoice && <AiFillCheckCircle className={classes.chosen}/>}
        </div>
    )
}

export default Answer