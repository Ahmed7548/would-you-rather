const Option = (props) => {
    const clickHandle = () => {
        props.onClick(props.value)
    }
    return (
        <div onClick={clickHandle} className={props.className} >
            {props.children}
        </div>
    )
}
export default Option