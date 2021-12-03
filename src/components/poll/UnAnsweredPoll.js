import Card from "../UI/Card"
import CardHead from "../UI/CardHead"
import Avatar from "../UI/Avatar"
import classes from "./UnAnsweredPoll.module.css"
import ButtonII from "../UI/ButtonII"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveAnswer } from "../../store/thunks"
const UnAnsweredPoll = (props) => {
    const [choice, setChoice] = useState(null)
    // question to be rendered
    const {question}= props
    //author of the question
    const author = useSelector((state) => state.users.users).find((user) => user.id === question.author)
    // logged in author 
    const user = useSelector(state => state.authUser.authUser)
    
    const dispatch=useDispatch()

    const radioChange = (e) => {
        setChoice(e.target.value)
    }

    const submitAnswer = (e) => {
        e.preventDefault()
        dispatch(saveAnswer(choice,question.id,user.id))
    }
    console.log(question.id)
    
    return (
        <Card className={classes.poll}>
            <CardHead>{author.name} asks</CardHead>
            <div className={"container"}>
        <Avatar
          url={author.avatarURL}
          width="100px"
          height="100px"
          className={classes.img}
        />
            
            <form onSubmit={submitAnswer}>
                <p>
                    Would you rather..
                    </p>
                <div className={classes.input}>
                <input type="radio" name="rather" id="optionI" value="optionOne" onChange={radioChange}/>
                <label htmlFor="optionI">{question.optionOne.text}?</label>
                </div>
                <div className={classes.input}>
                        <input type="radio" name="rather" id="optionII" value="optionTwo" onChange={radioChange}/>
                <label htmlFor="optionII">{question.optionTwo.text}?</label>
                </div>
                <ButtonII type="submit">
                    submit
                </ButtonII>
            </form>
            </div>
        </Card>
    )
}

export default UnAnsweredPoll