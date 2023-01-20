/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'
//Core

/*#############################################
                 Logica
###############################################*/
const ItemList = (props) => {//Funcion constructora
    
    const [renderizable, setRenderizable] = useState ([])

    const listaDeProductos = [
        {
            id:1,
            nombre:"Heladera",
            descripcion:"Es blanca y tiene 2 metros de alto",
            precio:80000,
            categoria:"Hogar",
            stock:5
        },{
            id:2,
            nombre:"Mesa de patio",
            descripcion:"De metal fundido",
            precio:20000,
            categoria:"Exterior",
            stock:15
        },{
            id:3,
            nombre:"Lavaropas",
            descripcion:"Es blanco",
            precio:60000,
            categoria:"Hogar",
            stock:2
        },{
            id:4,
            nombre:"Escalera",
            descripcion:"14 escalones maximo 1.80m",
            precio:15000,
            categoria:"Construccion",
            stock:20
        },

    ]
    //Tenemos un retraso de informacion

    // sin categoria :   //const listaDeProductosRenderizables = listaDeProductos.map(productos => <Item key={productos.id} id={"producto" + productos.id}data={productos} />)
  
    // const listaDeProductosRenderizables = listaDeProductos.map(productos => <Item key={productos.id} id={"producto" + productos.id} nombre={productos.nombre} descripcion={productos.descripcion} precio={productos.precio} categoria={productos.categoria} stock={productos.stock}/>)
    //Transformar los datos en elem renderizables
    //Iterar nuestro array de objetos
    //mostrar los objetos
  
    let listaPorCategoria
    let ProductosHTML
    
    
    setTimeout(() => {
        if(props.categoria === "Todo"){
            ProductosHTML = listaDeProductos.map(objeto => <Item key={objeto.id}  data={objeto} />)
        }else{
            listaPorCategoria = listaDeProductos.filter(objeto => objeto.categoria === props.categoria)
            ProductosHTML = listaPorCategoria.map(objeto => <Item key={objeto.id}  data={objeto} />)
        }
        setRenderizable(ProductosHTML)
    }, 3000);

  

    return(
        
        <div className='d-flex flex-column justify-content-center' >
            <p>Este es el ItemList</p>
            <div>
                <h1>Banner publicitario</h1>
            </div>
            {renderizable}
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemList