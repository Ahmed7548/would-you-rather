import { useState } from "react"
import { useSelector } from "react-redux"
import PollHome from "../components/poll/pollHome"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
import classes from "./HomePage.module.css"

const HomePage = () => {
    const [activeButton, setActiveButton] = useState("UNANSWERED")
    const questions = useSelector(state => state.questions.questions)
    const answered= useSelector(state=>state.authUser.authUser.answers)

    const answeredQuestions = []
    const unAnsweredQuestions=[]
    questions.forEach(question => {
        const find = answered.find(answer => answer.questionId === question.id)
        if (find) {
            answeredQuestions.push(question)
        } else {
            unAnsweredQuestions.push(question)
        }
    });
    //sorting the polls
    answeredQuestions.sort((a, b) => b.timestamp-a.timestamp )
    unAnsweredQuestions.sort((a, b) =>  b.timestamp-a.timestamp )

    const buttonIClickHandle = () => {
        setActiveButton("ANSWERED")
    }

    const buttonIIClickHandle = () => {
        setActiveButton("UNANSWERED")
    }

    return (
        <Card className={classes.home}>
            <div className={classes.buttons}>
                <Button type='button' className={activeButton==="ANSWERED" && classes.active} onClick={buttonIClickHandle}>answered Question</Button>
                <Button type='button' className={activeButton==="UNANSWERED"&& classes.active} onClick={buttonIIClickHandle}>unanswered Question</Button>
            </div>
            {activeButton === "ANSWERED" && answeredQuestions.map(question => (
                <PollHome question={question} key={question.id}/>
            ))}
            {activeButton === "UNANSWERED" && unAnsweredQuestions.map(question => (
                <PollHome question={question} key={question.id}/>
            )) }
        </Card>
    )
}

export default HomePage