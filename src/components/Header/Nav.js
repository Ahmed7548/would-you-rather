import { NavLink } from "react-router-dom"
import classes from "./Nav.module.css"
const Nav = (props) => {
    

    return (
        <nav className={props.className}>
        <ul className={`flex ${classes["nav-list"]} nav-list`}>
            <li>
                <NavLink to="/home" className={({isActive})=>isActive?'active':""} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/add" className={({isActive})=>isActive?'active':""} >new question</NavLink>
            </li>
            <li>
                <NavLink to="/leaderboard"  className={({isActive})=>isActive?'active':""} >leader board</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Nav