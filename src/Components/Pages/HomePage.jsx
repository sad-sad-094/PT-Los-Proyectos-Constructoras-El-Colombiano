/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


// import MainFooter from '../Modules/MainFooter';
import MainNavbar from '../Modules/MainNavbar';

function HomePage() {

  const [showNewProject, setShowNewProject] = useState(false);
  const [validatedProject, setValidatedProject] = useState(false);

  const handleCloseShowNewProject = () => setShowNewProject(false);
  const handleShowNewProject = () => setShowNewProject(true);
  const handleSubmitProject = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedProject(true);
  };

  const [showNewClient, setShowNewClient] = useState(false);
  const [validatedClient, setValidatedClient] = useState(false);

  const handleCloseNewClient = () => setShowNewClient(false);
  const handleShowNewClient = () => setShowNewClient(true);
  const handleSubmitClient = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedClient(true);
  };

  return (

    <>

      <MainNavbar />

      <div className="main-container">

        <div className="c-container">

          <h1>Bienvenido constructora</h1>
          <p>Administra todos tus proyectos y clientes.</p>

        </div>

        <div className="c-container">
          <h2>Agrega nuevos proyectos</h2>
          <p>Agrega nuevos proyectos a tu portafolio de proyectos.</p>
          <Button variant="success" onClick={handleShowNewProject}>Agregar</Button>
        </div>

        <div className="c-container">
          <h2>Agrega nuevos clientes</h2>
          <p>Agrega a tu base de datos los clientes interesados en alguno de tus proyectos.</p>
          <Button variant="success" onClick={handleShowNewClient}>Agregar</Button>
        </div>

      </div>

      <Modal
        show={showNewProject}
        onHide={handleCloseShowNewProject}
        backdrop="static"
        keyboard={false}
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Nuevo Proyecto</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form noValidate validated={validatedProject} onSubmit={handleSubmitProject}>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Código</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Constructora</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Contacto</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleCloseShowNewProject}>
            Cerrar
          </Button>
          <Button variant="success">Agregar</Button>

        </Modal.Footer>

      </Modal>

      <Modal
        show={showNewClient}
        onHide={handleCloseNewClient}
        backdrop="static"
        keyboard={false}
        centerd
      >

        <Modal.Header closeButton>
          <Modal.Title>Cliente Interesado</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form noValidate validatedClient={validatedClient} onSubmit={handleSubmitClient}>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Nombre y apellidos</Form.Label>
              <Form.Control type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Documento</Form.Label>
              <Form.Control type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">

              <Form.Label>Fecha Nacimiento</Form.Label>
              <Form.Control type="number" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Proyecto</Form.Label>
              <Form.Control type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

          </Form>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleCloseNewClient}>
            Cerrar
          </Button>
          <Button variant="success">Comenzar</Button>

        </Modal.Footer>

      </Modal>

      {/* <MainFooter /> */}

    </>

  )

}

export default HomePage;
