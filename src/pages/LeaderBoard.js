import {  useSelector } from "react-redux"
import Card from "../components/UI/Card"
import User from "../components/user/User"
import classes from "./LeaderBoard.module.css"

const LeaderBoard = () => {
    
    const users= useSelector(state=>state.users.users)
    const sortedUsers= [...users].sort((a,b)=>(b.answers.length+b.questions.length)-(a.answers.length+a.questions.length))
    return (
        <Card className={classes.leader}>
            {sortedUsers.map(user => <User user={user} key={user.id}/>)}
        </Card>
    )
}

export default LeaderBoard