/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './ItemDetail.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemDetail = (props) => {//Funcion constructora

    const {title, category, description, price} = props.data

    return(
        
    <div className='m-3'>
                    <div className='card m-3 border p-3 rounded col-3'>
            <div className='flex'>
                <div className=''>
                <p>{category}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
                </div>
            </div>
            <div>
             <ItemCount stock={10}/>
            </div>
        </div>
    </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemDetail
