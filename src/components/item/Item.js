/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { Link } from 'react-router-dom'
//Estilos
import './Item.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'
//Core

/*#############################################
                 Logica
###############################################*/
const Item = (props) => {//Funcion constructora


    const {title, category, description, price, id} = props.data


    return(
        
        <div className='card m-3 border p-3 rounded col-3'>
            <div className='flex'>
                <div className=''>
                <p>{category}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
                </div>
            </div>
            <Link to={`/producto/${id}`}>Ver Detalles</Link>
            <div>
             <ItemCount stock={10}/>
            </div>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Item
