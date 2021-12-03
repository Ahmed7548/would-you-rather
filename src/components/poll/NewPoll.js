import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addQuestion } from "../../store/thunks";
import Button from "../UI/Button";
import classes from "./NewPoll.module.css";

const NewPoll = () => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const dispatch = useDispatch();
  //geting the logged in user
  const user = useSelector((state) => state.authUser.authUser);
  
  const navigate= useNavigate()

  const option1ChangeHandle = (e) => {
    setOption1(e.target.value);
  };
  const option2ChangeHandle = (e) => {
    setOption2(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addQuestion(option1, option2, user.id));
    // navigate to home
    navigate("/home",{replace:true})
  };

  const goToPoll = () => {};

  return (
    <form className={classes.poll} onSubmit={submitHandle}>
      <p>would you rather.....</p>
      <input
        className="input1"
        type="text"
        name="option1"
        id="option1"
        placeholder="Enter your first option"
        value={option1}
        onChange={option1ChangeHandle}
      />
      <p> or</p>
      <input
        className="input1"
        type="text"
        name="option2"
        id="option2"
        placeholder="Enter your second option"
        value={option2}
        onChange={option2ChangeHandle}
      />

      <Button type="submit" onClick={goToPoll}>
        submit
      </Button>
    </form>
  );
};

export default NewPoll;
