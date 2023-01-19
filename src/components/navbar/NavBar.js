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
      <li className="nav-item m-3 active">
        <a className="nav-link" href="#s">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item m-3 p-2">
      <p>Enlace NavBar. Saludo {props.saludo}</p>
      </li>
      <li className="nav-item m-3 p-2">
       <CartWidget cantidad="3"/>
      </li>

    </ul>
  </div>
</nav>
          
          
        </header>
    )
}

export default NavBar