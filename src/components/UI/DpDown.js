import { useState, useEffect } from "react";
import Avatar from "./Avatar";
import classes from "./DpDown.module.css";
import Option from "./Options";

const DpDown = (props) => {
  const [autoCompleteActive, setAutoCompleteActive] = useState(false);
  const { value } = props;

  useEffect(() => {
    const showDpDown = () => {
      if (value) {
        setAutoCompleteActive(true);
      }
    };
    document.addEventListener("keyup", showDpDown);

    // adding event listener

    //clean up event listener
    return () => {
      document.removeEventListener("keyup", showDpDown);
    };
  }, [value]);

  const optionClickHandle = (value) => {
    props.onChose(value);
    setAutoCompleteActive(false);
  };
  
  return (
    <div className={classes.dropDown}>
      {props.value.trim() &&
        autoCompleteActive &&
        props.users
          .filter(
            (user) =>
              user.name.toLowerCase().includes(props.value.trim()) ||
              user.name.includes(props.value.trim())
          )
          .map((user) => (
            <Option
              value={user.name}
              key={user.name}
              onClick={optionClickHandle}
              className={classes.option}
            >
              <Avatar
                url={user.avatarURL}
                width="2em"
                height="2em"
                className={classes.img}
              />
              <h4> {user.name} </h4>
            </Option>
          ))}
    </div>
  );
};

export default DpDown;
