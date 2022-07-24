import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import classes from "./PollPage.module.css"
import AnsweredPolls from "../components/poll/AnswredPoll";
import UnAnsweredPoll from "../components/poll/UnAnsweredPoll";

const PollPage = () => {
  const { questionId: id } = useParams();
  // the id without :
  const questionId = id
  //the question to be rendered
  const question = useSelector((state) => state.questions.questions).find(
    (question) => question.id === questionId
  );
  console.log(question);
  
  //the logged in user answers
  const answeres = useSelector((state) => state.authUser.authUser.answers);
  //that question specific answer if answered
    const answer = answeres.find((answer) => answer.questionId === questionId);
    
    if (!question) {
        return (
          <div className={classes.error}>
            <h1>error 404</h1>
            <p>the searched poll was not found</p>
          </div>
        );
      }

  return (
    <Fragment>
      {answer ? (
        <AnsweredPolls question={question} answer={answer.choice} />
      ) : (
        <UnAnsweredPoll question={question} />
      )}
    </Fragment>
  );
};

export default PollPage;
