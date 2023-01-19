//------Importacion

//dependencias
import { useState } from "react"

//componentes
import ItemList from "../itemList/ItemList"

//estilos
import "./Body.css"


//-----Funcionalidad
const Body = () => {

    const [categoriaNombre, setCategoriaNombre] = useState("")

    const cambiarCategoriaHogar = () => {
        setCategoriaNombre("Hogar")
    }

    const cambiarCategoriaConstruccion = () => {
        setCategoriaNombre("Construccion")
    }

    const cambiarCategoriaTodo = () => {
        setCategoriaNombre("Todo")
    }


    return(
        <div>
        <p>1. Componente Body </p>
        <button onClick={cambiarCategoriaHogar}>Hogar</button>
        <button onClick={cambiarCategoriaConstruccion}>Construccion</button>
        <button onClick={cambiarCategoriaTodo}>Todo</button>
        <ItemList categoria={categoriaNombre}/>
        </div>

    )

}



//------Exportacion
export default Body