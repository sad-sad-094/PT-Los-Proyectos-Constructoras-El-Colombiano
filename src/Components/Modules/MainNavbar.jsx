/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {

  return (

    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">

        <Container>

          <Navbar.Brand href="#home">Los Proyectos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

              <Nav.Link href="#pricing">Inicio</Nav.Link>
              <Nav.Link href="#features">Proyectos</Nav.Link>
              <Nav.Link href="#pricing">Clientes</Nav.Link>

            </Nav>

            <Nav>

              <Nav.Link href="#memes">
                Constructora
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
