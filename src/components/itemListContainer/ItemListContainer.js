import './ItemListContainer.css'

import { items } from '../../services/firebase';

import { getDocs } from 'firebase/firestore/lite';
//Componentes 
import { useState } from 'react';
import { useEffect } from 'react';
//import Hooks from '../hooks/Hooks'
import ItemList from '../itemList/ItemList'



const ItemListContainer = (props) => {
    const [lista, setLista] = useState([])

    useEffect(()=>{
    
    getDocs(items).then((snapshot)=>{
    
    setLista(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})));
    
    })
    
    },[])
    return(
        
        <div className='d-flex flex-wrap justify-content-center'>
            
            <ItemList/> 
        </div>
        
    )

}

export default ItemListContainer

