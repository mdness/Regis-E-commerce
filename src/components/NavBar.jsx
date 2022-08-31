import React from 'react'
import ReactLogo from '../media/ReactLogo.jpg'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand to="/"><img src={ReactLogo} alt="RÉGIS" className="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link a" to="/">Home</NavLink>
            <NavLink className="nav-link a" to="/categoria/remeras">Remeras</NavLink>
            <NavLink className="nav-link a" to="/categoria/polleras">Polleras</NavLink>
            <NavLink className="nav-link a" to="/carrito">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;
// const NavBar = () => {
//   return (
//     <div >
//       <div className="d-flex justify-content-center mt-80">
//         <img src={ReactLogo} alt="RÉGIS" className="Logo" />
//       </div>
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink className="nav-link a" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link a" to="/categoria/remeras">Remeras</NavLink>
//             </li>
//             <li className="nav-item">
//                <NavLink className="nav-link a" to="/categoria/remeras">Remeras</NavLink>
//             </li>
//           </ul>
//           <NavLink className="nav-link a" to="/carrito">
//             <CartWidget />
//           </NavLink>
//         </div>
//       </nav>
//     </div>
//   )
// }

export default NavBar