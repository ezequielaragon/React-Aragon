import { Link } from 'react-router-dom'

import CartWidget from '../cartWidget/CartWidget.js'

import './NavBar.css'

function NavBar (props){
    return(
        <header className='navbar'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#s">App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item m-3 p-2 active">
        <Link to="/" className="nav-link" href="#s">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item m-3 p-2">
        <Link to="/productos" className="nav-link" href="#s">Productos<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item m-3 p-2">
        <Link to="/nosotros" className="nav-link" href="#s">Nosotros<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item m-3 p-2">
        <Link to="/categoria/jewelery" className="nav-link" href="#s">Joyeria<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item m-3 p-2">
        <Link to="/categoria/electronics" className="nav-link" href="#s">Electronics<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item m-3 p-3 ">
       <CartWidget cantidad="3"/>
      </li>

    </ul>
  </div>
</nav>
          
          
        </header>
    )
}

export default NavBar