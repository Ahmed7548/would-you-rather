import { NavLink } from "react-router-dom"
import classes from "./Nav.module.css"
const Nav = (props) => {
    

    return (
        <nav className={props.className}>
        <ul className={classes["nav-list"]}>
            <li>
                <NavLink to="/home" className={({isActive})=>isActive?classes.active:""} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/add" className={({isActive})=>isActive?classes.active:""} >new question</NavLink>
            </li>
            <li>
                <NavLink to="/leaderboard"  className={({isActive})=>isActive?classes.active:""} >leader board</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Nav