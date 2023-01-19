import CartWidget from '../cartWidget/CartWidget.js'
import './NavBar.css'

function NavBar (props){
    return(
        <header className='navbar'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#s">App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item m-3 active">
        <a class="nav-link" href="#s">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item m-3 p-2">
      <p>Enlace NavBar. Saludo {props.saludo}</p>
      </li>
      <li class="nav-item m-3 p-2">
       <CartWidget cantidad="3"/>
      </li>

    </ul>
  </div>
</nav>
          
          
        </header>
    )
}

export default NavBar