/*#############################################
                 Importaciones
###############################################*/

//Modulos
import React, { useContext } from 'react';
import CartProvider from '../../context/CartContext';
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/

const Cart = () => {//Funcion constructora
    const {items, agregarAlCarrito, limpiarCarrito, borrarProductoDelCarrito } = useContext(CartProvider);
    return (
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <button onClick={() => agregarAlCarrito(item)}>Remove</button>
              <button onClick={() => borrarProductoDelCarrito(item)}>Remove</button>
              <button onClick={() => limpiarCarrito(item)}>Remove</button>
            </div>
          ))}
        </div>
      );
    };

/*#############################################
                 Exportacion
###############################################*/
export default Cart