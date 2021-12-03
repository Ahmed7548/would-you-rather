import Avatar from "../UI/Avatar"
import classes from "./User.module.css"

const User = (props) => {

    const { user } = props
    
    return (
        <div className={`wrapper`}>
            <div className={classes["user-detail"]}>
            <Avatar url={user.avatarURL}
                width="100px"
                height="100px"
                className={classes.img}
                />
            <h5>{user.name}</h5>
            </div>
            <div className ={classes.questions}>
                <p>
                    questions answered: <span> {user.answers.length}</span>
                </p>
                <p>
                    questions made: <span>{user.questions.length}</span>
                </p>
            </div>
            <div className={classes.score}>
                <h4>score</h4>
                <div>
                    {user.answers.length+user.questions.length}
                </div>
            </div>
        </div>
    )
}

export default User