/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import { useState } from 'react'
import './ItemCount.css'
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
    const addOne = () =>{
        if(count < props.stock){
            setCount (count +1)
        }
       
    }
    const subOne = () => {
        if (count >0) {
            setCount (count -1) 
        }
        
    }

    //Funcion agregar
    const onAdd = () => {
        console.log(count);
    }

    return(
        
        <div className = "m-3 p-3">
           <div className ="d-flex flex-row justify-content-center">
           <button className='btn btn-primary m-2' onClick={addOne}>+</button>
           <p className= 'align-self-center my-2'>{count}</p>
           <button className='btn btn-danger m-2' onClick={subOne}>-</button>
           </div>
           <button className='btn btn-secondary' onClick={onAdd}>On add</button>
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemCount
