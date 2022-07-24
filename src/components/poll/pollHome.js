import { useSelector } from "react-redux"
import Avatar from "../UI/Avatar"
import ButtonII from "../UI/ButtonII"
import CardHead from "../UI/CardHead"
import classes from "./pollHome.module.css"
import { useNavigate } from "react-router"

const PollHome = (props) => {
    
    const navigat=useNavigate()
    const {question}= props
    const user = useSelector(state => state.users.users).find(user => user.id === question.author)

    const goToQuestion = () => {
        navigat(`/question/${question.id}`)
    }
    

    return (
        <div className={`${classes.poll} wrapper`}>
            <CardHead>
                {user.name} asks
            </CardHead>
            <div className={classes.flex}>
                <Avatar  url={user.avatarURL}
                width="100px"
                height="100px"
                    className={classes.img} />
                
                <div className={classes.question}>
                    <p>Would you rather...</p>
                    <p>..{question.optionOne.text}</p>
                    <ButtonII className={classes.show} onClick={goToQuestion}>
                        Show poll
                    </ButtonII>
                </div>
            </div>
        </div>
    )
}

export default PollHome