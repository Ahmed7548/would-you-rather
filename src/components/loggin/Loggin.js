import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../store/authUserSlice"
import AutoComplete from "../UI/AutoCompleteInput"
import Card from "../UI/Card"
import classes from "./loggin.module.css"

const Loggin = () => {
    const [inputValue, setInputValue] = useState("")
    const [validUser,setValidUser]= useState(true)
    const users=useSelector(state=>state.users.users)
    const dispatch = useDispatch()

    const ChangInputHandler = (value) => {
        setInputValue(value)
    }

    const signInHandle = (e) => {
        e.preventDefault()
        const authUser = users.find(user => user.name === inputValue.trim())
        if (authUser) {
            dispatch(authActions.addAuthUser(authUser))
            setInputValue(false)
        } else {
            setValidUser(false)
        }
    }

    return (
        <Card className={classes.loggin}>
            <div>
            <h1>would you rather</h1>
            <p>please sign in</p>
            </div>
            <form onSubmit={signInHandle}>
                <AutoComplete items={{
                    name: "loggin", id: "loggin",
                    placeholder: "name"
                }} label="Enter Your Name "
                    onChange={ChangInputHandler}
                    value={inputValue}/>
                <button type="submit">Log in </button>
                {!validUser&&<p> please enter an existing user</p>}
            </form>
        </Card>
    )
}

export default Loggin
