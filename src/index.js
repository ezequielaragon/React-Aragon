import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navbar/NavBar.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import reportWebVitals from './reportWebVitals';
import Body from './components/body/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar
    saludo="Hola"
    />
    <Body saludo="hola" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
