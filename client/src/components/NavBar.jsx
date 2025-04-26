import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';


const NavBar = () => {
  const {isAuth}= useSelector((state)=> state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { isAuth ? (
              <>
              <Nav.Link> <Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></Nav.Link>
              <button onClick={()=> dispatch(logout())}>logout</button>
              </>
  
            ) : 
            <><Nav.Link><Link style={{textDecoration:"none",color:"black"}} to="/login">Login</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"black"}} to="/register">Register</Link></Nav.Link> </>
          
}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
