import classes from "./Header.module.css";
import Nav from "./Nav";
import Avatar from "../UI/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authUserSlice";
const Header = (props) => {

  const loggedIn = useSelector(state => state.authUser.logged)
  const authUser = useSelector(state => state.authUser.authUser)
  const dispatch= useDispatch()
  
  const logOutHandle = () => {
    dispatch(authActions.loggOut())
  }

  return (
    <header className={classes.header}>
      <Nav className={classes.nav} />
      {loggedIn&&<div className={classes.right}>
      <div className={classes.user}>
        <Avatar
          url={authUser.avatarURL}
          width="2em"
          height="2em"
          className={classes.img}
        />
        <h4> Hellow {authUser.name} </h4>
      </div>
      <button type="button" onClick={logOutHandle}> Log Out</button>
    </div>}
    </header>
  );
};

export default Header;
