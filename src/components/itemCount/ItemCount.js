/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import { useState } from 'react'

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const ItemCount = (props) => {//Funcion constructora
   //props.stock
    //No puede restar menos de 0
    //No puede sumar mas de la cantidad maxima en stock
   
    //Agregar manejo de Estado
    //useState
    const [count, setCount] = useState(0)
  
    //Funciones de suma y de resta
    const addOne = () => {
        if (count < props.stock) {
            setCount(count + 1)
            props.guardarCantidadAComprar(count)
        }
    }

       
    
    const subOne = () => {
        if (count > 0) {
            setCount(count - 1)
            props.guardarCantidadAComprar(count)
        }

    }

    //Funcion agregar
    return(
        
        <div>
           <div className ="d-flex flex-row justify-content-center">
                <button className='btn btn-primary m-1 p-3' onClick={addOne}>+</button>
                <p className="m-4">{count}</p>
                <button className='btn btn-danger m-1 p-3' onClick={subOne}>-</button>
           </div>
        </div>
        
    )

    }

/*#############################################
                 Exportacion
###############################################*/
export default ItemCount
