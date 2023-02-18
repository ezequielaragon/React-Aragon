/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState, useEffect } from 'react'

//Componentes
import Item from '../item/Item'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemList = () => {//Funcion constructora
    const [productos, setProductos] = useState([])


    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    },[])

    return(
        
        <div className='d-flex flex-row flex-wrap justify-content-center' >
            {productos}
        </div>
    )
}

/*#############################################
                 Exportacion
###############################################*/
export default ItemList