import './CartWidget.css'
import { BsFillCartCheckFill } from "react-icons/bs";
function CartWidget (props){
    return(
        <p> <BsFillCartCheckFill/> {props.cantidad} </p>
    )
}

export default CartWidget