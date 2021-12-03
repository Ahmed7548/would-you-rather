import NewPoll from "../components/poll/NewPoll"
import Card from "../components/UI/Card"
import classes from "./NewPollPage.module.css"

const NewPollPage = () => {
    
    return (
        <Card className={classes.card}>
            <NewPoll/>
        </Card>
    )
}

export default NewPollPage