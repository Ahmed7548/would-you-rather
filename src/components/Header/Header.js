import classes from "./Header.module.css";
import Nav from "./Nav";
import Avatar from "../UI/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authUserSlice";
import BurgerIcon from "../UI/BurgerIcon";
import { useState } from "react";
const Header = (props) => {
  const [open,setOpen]=useState(false)

  const loggedIn = useSelector(state => state.authUser.logged)
  const authUser = useSelector(state => state.authUser.authUser)
  const dispatch= useDispatch()
  
  const logOutHandle = () => {
    dispatch(authActions.loggOut())
  }

  const toggleHeader = () => {
    setOpen(prevState => !prevState)
    console.log("work")
  }

  return (
    <>
      <BurgerIcon onClick={toggleHeader} open={open} />
    <header className={`${classes.header} primary-header flex bg-white text-dark ${open?"active":""}`}>
      <Nav className={classes.nav} />
      {loggedIn&&<div className={`${classes.right} flex column flow`}>
      <div className={`${classes.user} `}>
        <Avatar
          url={authUser.avatarURL}
          width="2em"
          height="2em"
          className={classes.img}
        />
        <h4> Hello {authUser.name} </h4>
      </div>
      <button type="button" onClick={logOutHandle}> Log Out</button>
    </div>}
      </header>
      </>
  );
};

export default Header;
