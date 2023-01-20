/*#############################################
                 Importaciones
###############################################*/

//Modulos

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Estilos
import './ItemCategoryContainer.css'
//Componentes
import ItemCategory from '../itemCategory/ItemCategory'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemCategoryContainer = () => {//Funcion constructora


    const {categoriaId} = useParams()

    
    return(
        
     <div className='mh-3 my-1 d-flex row justify-content-center'>
       <section className=''>
         <ItemCategory categoria={categoriaId} />
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
