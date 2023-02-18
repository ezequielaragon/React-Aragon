/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useEffect, useState } from 'react'
//Estilos

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const Hooks = () => {//Funcion constructora
  
  //Constructor [Estado ; Funcion que actualiza el estado] = Inicializacion del Estado (El valor por default del estado)
   
  //Hooks de estado
  const [contador, setContador] = useState(0)
//   const [intentos, setIntentos] = useState(0)
   
  //Hooks de efectos
//UseEffect(funcion (inicio, fin )) , cantidad de instancias
  useEffect(()=> {

    console.log("Componente inciando");
    //document.addEventListener("click", (e) => {
        
    //     if (e.target.id = "123") {   //para eventos se usan el onMount, es decir, el ,[] al final
    //         console.log(e);
    //     }
    // })
    //setIntentos(intentos+1) Loop infinito porque el state esta adentro, entonces se renderiza otra vez
    return() =>{
        console.log("Componente finalizado");
    }
  })


    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return(
        
        <div>
           <button onClick={sumar}>Sumar</button>
            <p>{contador}</p>
           <button onClick={restar}>Restar</button>
        </div>
        
    )

}



/*#############################################
                 Exportacion
###############################################*/
export default Hooks
