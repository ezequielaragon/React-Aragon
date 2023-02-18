/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import { BsFillCartCheckFill } from "react-icons/bs";
// import { useEffect, useState } from 'react'
// import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const CartWidget = (props) => {//Funcion constructora



    return(
        <div className="d-flex"> 
            <span><BsFillCartCheckFill/></span> 
            <p>{props.cantidad}</p> 
        </div>
    )

}

export default CartWidget