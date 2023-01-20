import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import './index.css';

import NavBar from './components/navbar/NavBar.js';
import Body from './components/body/Body';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs'

import reportWebVitals from './reportWebVitals';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route  exact path='/' element={<Home/>} />
        <Route exact path='/nosotros' element={<AboutUs/>} />
        <Route exact path='/productos' element={<Body/>} />
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>} />
        <Route exact path='/categoria/:categoriaId' element={<ItemCategoryContainer/>} />
      </Routes>

      

    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
