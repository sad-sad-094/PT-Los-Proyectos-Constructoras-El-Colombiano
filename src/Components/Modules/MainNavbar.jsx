/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {

  const navigation = useNavigate();
  const userName = useSelector((state) => state.userInfo.name);

  return (

    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">

        <Container>

          <Navbar.Brand href="#home">Los Proyectos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

              <Nav.Link onClick={() => navigation("/home")}>Inicio</Nav.Link>
              <Nav.Link onClick={() => navigation("/projects")}>Proyectos</Nav.Link>
              <Nav.Link onClick={() => navigation("/clients")}>Clientes</Nav.Link>

            </Nav>

            <Nav>

              <Nav.Link>
                {userName}
              </Nav.Link>
              <Nav.Link href="#deets">Salir</Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

    </>

  )

}


export default MainNavbar;
