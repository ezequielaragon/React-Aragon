import './ItemListContainer.css'


//Componentes 
//import Hooks from '../hooks/Hooks'
import ItemList from '../itemList/ItemList'



const ItemListContainer = (props) => {

    return(
        
        <div className='d-flex flex-wrap justify-content-center'>
            <ItemList/> 
        </div>
        
    )

}

export default ItemListContainer

