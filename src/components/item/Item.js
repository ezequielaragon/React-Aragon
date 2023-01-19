/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './Item.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'
//Core

/*#############################################
                 Logica
###############################################*/
const Item = (props) => {//Funcion constructora


    const {nombre, descripcion, categoria, precio, stock} = props.data


    return(
        
        <div className='mb-3 border p-3 rounded'>
            <div className='flex'>
                <div className=''>
                <p>{categoria}</p>
                <p>{nombre}</p>
                <p>{descripcion}</p>
                <p>{precio}</p>
                </div>
            </div>
            <div>
             <ItemCount stock={stock}/>
            </div>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Item
