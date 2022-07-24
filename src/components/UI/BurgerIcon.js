import { GiHamburgerMenu } from "react-icons/gi"
import {BsFillXCircleFill} from "react-icons/bs"

const BurgerIcon = (props) => {
  const { open } = props
  


  return (
    <div className="burger-icon text-dark" onClick={props.onClick}>
      {open ?<BsFillXCircleFill/> : <GiHamburgerMenu/>}
    </div>
  )
}

export default BurgerIcon