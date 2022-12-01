/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { db, auth } from '../../Utils/Firebase';

function AuxNavbar() {

  const navigation = useNavigate();

  const [showLogIn, setShowLogIn] = useState(false);

  const handleCloseLogIn = () => setShowLogIn(false);
  const handleShowLogIn = () => setShowLogIn(true);

  const [showSingIn, setShowSingIn] = useState(false);

  const handleCloseSingIn = () => setShowSingIn(false);
  const handleShowSingIn = () => setShowSingIn(true);

  const defaultNewUser = () => {
    return {
      name: '',
      email: '',
      password: ''
    }
  }

  const defaultUser = () => {
    return {
      name:'',
      email: '',
      password: ''
    }
  }

  const [newUser, setNewUser] = useState(defaultNewUser());
  const [logUser, setLogUser] = useState(defaultUser());

  const setUser = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    })
  }

  const letLogUser = (event) => {
    setLogUser({
      ...logUser,
      [event.target.name]: event.target.value
    })
  }

  const createUser = () => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: newUser.name })
          .then(() => {
            setDoc(doc(db, newUser.name, `${newUser.name}ID`), { projects: [] })
              .then(() => {
                toast.success('Registro exitoso.')
              })
          })
      })
  }

  const logInUser = () => {
    signInWithEmailAndPassword(auth, logUser.email, logUser.password)
    .then((userCredential) => {
      if (!userCredential) {
        toast.warn('No se encuentra registrado. Por favor regístrese')
      } else {
        getDoc(doc(db, `${auth.currentUser.displayName}ID`, auth.currentUser.uid))
      }
    })
  }


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
          <Button variant="success" onClick={() => {
            letLogUser()
            navigation("/home")
          }}>Ingresar</Button>

        </Modal.Footer>

      </Modal>

      <Modal
        show={showSingIn}
        onHide={handleCloseSingIn}
        backdrop="static"
        keyboard={false}
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Registrar constructora</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form onChange={setUser}>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Nombre constructora</Form.Label>
              <Form.Control name="name" type="text" placeholder="" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Correo</Form.Label>
              <Form.Control name="email" type="email" placeholder="" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="password" type="password" placeholder="" />
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
          <Button variant="success" onClick={() => {
            createUser()
            handleCloseSingIn()
          }}>Comenzar</Button>

        </Modal.Footer>

      </Modal>

    </>

  )

}


export default AuxNavbar;
