/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AuxNavbar() {

  const [showLogIn, setShowLogIn] = useState(false);

  const handleCloseLogIn = () => setShowLogIn(false);
  const handleShowLogIn = () => setShowLogIn(true);

  const [showSingIn, setShowSingIn] = useState(false);

  const handleCloseSingIn = () => setShowSingIn(false);
  const handleShowSingIn = () => setShowSingIn(true);

  return (

    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">

        <Container>

          <Navbar.Brand href="#home">Los Proyectos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

            </Nav>

            <Nav>

              <Nav.Link onClick={handleShowLogIn}>
                Ingresar
              </Nav.Link>
              <Nav.Link onClick={handleShowSingIn}>Comenzar</Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

      <Modal
        show={showLogIn}
        onHide={handleCloseLogIn}
        backdrop="static"
        keyboard={false}
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Ingresar al protal</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="" />


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="" />
              <Form.Text className="text-muted">
                Los datos de tu compañía nunca serán compartidos con alguien más
              </Form.Text>

            </Form.Group>

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleCloseLogIn}>
            Cerrar
          </Button>
          <Button variant="success">Ingresar</Button>

        </Modal.Footer>

      </Modal>

      <Modal
        show={showSingIn}
        onHide={handleCloseSingIn}
        backdrop="static"
        keyboard={false}
        centerd
      >

        <Modal.Header closeButton>
          <Modal.Title>Registrar constructora</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Nombre constructora</Form.Label>
              <Form.Control type="text" placeholder="" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="" />
              <Form.Text className="text-muted">
                Los datos de tu compañía nunca serán compartidos con alguien más
              </Form.Text>

            </Form.Group>

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleCloseSingIn}>
            Cerrar
          </Button>
          <Button variant="success">Comenzar</Button>

        </Modal.Footer>

      </Modal>

    </>

  )

}


export default AuxNavbar;
