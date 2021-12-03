import classes from "./AutoComplete.module.css";
import DpDown from "./DpDown";
import { useSelector } from "react-redux";

const AutoComplete = (props) => {

  const users=useSelector(state=>state.users.users)
  
    

    const inputChangeHandle = (e) => {
        props.onChange(e.target.value)
    }
    
    const choseHandle = (value) => {
        props.onChange(value)
    }


  return (
    <div className={classes["auto-complete"]}>
      <label htmlFor={props.items.id}>{props.label}</label>
      <input type="text" {...props.items} value={props.value}  onChange={inputChangeHandle} />
          <DpDown users={users} value={props.value} onChose={choseHandle}/>
    </div>
  );
};

export default AutoComplete;
