//------Importacion

//dependencias
import { useState,} from "react"

//componentes
import ItemList from "../itemList/ItemList"

//estilos
import "./Body.css"


//-----Funcionalidad
const Body = () => {
    return(
        <div>
        <p>Componente Body </p>
        <ItemList/>
        </div>

    )

}



//------Exportacion
export default Body