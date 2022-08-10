import React from 'react'
import ReactLogo from '../media/ReactLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div >
      <div className= "d-flex justify-content-center mt-80">
        <img src={ReactLogo} alt="RÉGIS" className="Logo"/>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link a" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link a" to="/categoria/remeras">Remeras</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link a" to="/categoria/vestidos">Vestidos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link a" to="/categoria/polleras">Polleras</NavLink>
      </li>
    </ul> 
    <NavLink className="nav-link a" to="/carrito">
    <FontAwesomeIcon icon ={faCartShopping} className='cartShopping'/></NavLink>
  </div>
</nav>
    </div>
  )
}

export default NavBar