import { useSelector } from "react-redux";
import Avatar from "../UI/Avatar";
import Card from "../UI/Card";
import CardHead from "../UI/CardHead";
import Answer from "./Answer";
import classes from "./AnsweredPoll.module.css";
const AnsweredPolls = (props) => {
  const { question, answer } = props;

  const users = useSelector((state) => state.users.users);
  //total number of users
  const usersNom = users.length;
  // the author data 
  const author = users.find((user) => user.id === question.author);

  return (
    <Card className={classes.answered}>
      <CardHead>{author.name} asks</CardHead>
      <div className={"container"}>
        <Avatar
          url={author.avatarURL}
          width="100px"
          height="100px"
          className={classes.img}
        />
        <div>
          <Answer
            percentage={Math.floor(
              (question.optionOne.votes.length / usersNom) * 100
            )}
            className={answer === "optionOne"?classes.choice:classes.other}
            chosen={question.optionOne.votes.length}
            all={usersNom}
            isUsersChoice={answer === "optionOne"}
          >
            would you rather {question.optionOne.text}?
          </Answer>
          <Answer
            percentage={Math.floor(
              (question.optionTwo.votes.length / usersNom) * 100
            )}
            className={answer === "optionTwo"?classes.choice:classes.other}
            chosen={question.optionTwo.votes.length}
            all={usersNom}
            isUsersChoice={answer === "optionTwo"}
          >
            would you rather {question.optionTwo.text}?
          </Answer>
        </div>
      </div>
    </Card>
  );
};

export default AnsweredPolls;
