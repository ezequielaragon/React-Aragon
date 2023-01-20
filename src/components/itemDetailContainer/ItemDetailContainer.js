/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Estilos
import './ItemDetailContainer.css'
//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemDetailContainer = () => {//Funcion constructora

    const [productos, setProductos] = useState([])

    const {productoId} = useParams()

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))

    },[productoId])

    
    return(
        
     <div className='mh-3 my-1 d-flex row justify-content-center'>
       <section className=''>
         {productos}
        </section>
        <section>
         <Link to="/productos">Volver</Link>
        </section>
     </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemDetailContainer
