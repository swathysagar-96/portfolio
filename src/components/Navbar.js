import React from 'react';
import {Button,Nav, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nabar = () => {
    return (
        <div>
     <Navbar collapseOnSelect fixed="top"  bg="dark" variant="dark" expand="lg" >
  <Navbar.Brand href="#home">
  {/* <a href="#" >
          {/* <img src="bgLogo.png" height="30px" width="92px" />
          </a> */} 
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <h2 className="port">My Portfolio</h2>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Nabar
