/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Estilos
import './ItemCategoryContainer.css'
//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemCategoryContainer = () => {//Funcion constructora

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${categoriaId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))

    },[categoriaId])

    
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
export default ItemCategoryContainer
