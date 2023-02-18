/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect } from 'react'
//Estilos

//Componentes
import Item from '../item/Item'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemCategory = (props) => {//Funcion constructora
    const [productos, setProductos] = useState([])

    useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${props.categoria}`)
    .then(res=>res.json())
    .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    },[productos, props.categoria])

    return(
        
        <div className='d-flex flex-row flex-wrap justify-content-center' >
            {productos}
        </div>
    )
}

/*#############################################
                 Exportacion
###############################################*/
export default ItemCategory