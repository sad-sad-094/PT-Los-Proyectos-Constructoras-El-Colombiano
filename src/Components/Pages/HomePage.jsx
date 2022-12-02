/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


// import MainFooter from '../Modules/MainFooter';
import MainNavbar from '../Modules/MainNavbar';
import { db } from '../../Utils/Firebase';
import { clients, projects } from '../../Redux/UserInfoSlice';

function HomePage() {
  
  const userName = useSelector((state) => state.userInfo.name);


  const dispatch = useDispatch();

  useEffect(() => {
    getDoc(doc(db, 'Constructora1', 'Constructora1ID')) //TODO hacer dinámico nombre y id de colección
      .then(doc => {
        let userData = doc.data();
        let projectsList = userData.projects;
        let clientsList = userData.clients;
        dispatch(projects({
          projects: projectsList,
        }),
        dispatch(clients({
          clients: clientsList,
        }))
        )
      })
  })


  const [showNewProject, setShowNewProject] = useState(false);
  const [validatedProject, setValidatedProject] = useState(false);

  const [clientInfo, setClientInfo] = useState({
    nombre: '',
    correo: '',
    documento: '',
    nacimiento: '',
    proyecto: ''
  })

  const [projectInfo, setProjectInfo] = useState({
    codigo: '',
    nombre: '',
    direccion: '',
    constructora: '',
    contacto: ''
  })

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

  const getProjectInfo = (event) => {
    setProjectInfo({
      ...projectInfo,
      [event.target.name]: event.target.value
    })
  }

  const getClientInfo = (event) => {
    setClientInfo({
      ...clientInfo,
      [event.target.name]: event.target.value
    })
  }

  const setNewProject = () => {
    updateDoc(doc(db, 'Constructora1', 'Constructora1ID'), {  //TODO hacer dinámico nombre y id de colección
      projects: arrayUnion({
        code: projectInfo.codigo,
        name: projectInfo.nombre,
        adress: projectInfo.direccion,
        builders: projectInfo.constructora,
        contact: projectInfo.contacto,
      })
    })
      .then(() => {
        toast.success('Proyecto guardado satisfactoriamente.');
        handleCloseShowNewProject();
      })
  }

  const setNewClient = () => {
    updateDoc(doc(db, 'Constructora1', 'Constructora1ID'), {  //TODO hacer dinámico nombre y id de colección
      clients: arrayUnion({
        name: clientInfo.nombre,
        email: clientInfo.correo,
        DNI: clientInfo.documento,
        birth: clientInfo.nacimiento,
        project: clientInfo.proyecto,
      })
    })
      .then(() => {
        toast.success('Cliente guardado satisfactoriamente.');
        handleCloseNewClient();
      })
  }


  return (

    <>

      <MainNavbar />

      <div className="main-container">

        <div className="c-container">

          <h1>Bienvenido {userName}</h1>
          <p>Administra todos tus proyectos y clientes.</p>

        </div>

        <div className="c-container">
          <h2>Agrega nuevos proyectos</h2>
          <p>Agrega nuevos proyectos a tu portafolio de proyectos.</p>
          <Button variant="primary" onClick={handleShowNewProject}>Agregar</Button>
        </div>

        <div className="c-container">
          <h2>Agrega nuevos clientes</h2>
          <p>Agrega a tu base de datos los clientes interesados en alguno de tus proyectos.</p>
          <Button variant="primary" onClick={handleShowNewClient}>Agregar</Button>
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

          <Form onChange={getProjectInfo} noValidate validated={validatedProject} onSubmit={handleSubmitProject}>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Código</Form.Label>
              <Form.Control name="codigo" type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Nombre</Form.Label>
              <Form.Control name="nombre" type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Dirección</Form.Label>
              <Form.Control name="direccion" type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Constructora</Form.Label>
              <Form.Control name="constructora" type="text" placeholder="" />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Contacto</Form.Label>
              <Form.Control name="contacto" type="text" placeholder="" />
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
          <Button onClick={setNewProject} variant="success">Agregar</Button>

        </Modal.Footer>

      </Modal>

      <Modal
        show={showNewClient}
        onHide={handleCloseNewClient}
        backdrop="static"
        keyboard={false}
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>Cliente Interesado</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form onChange={getClientInfo} noValidate validatedClient={validatedClient} onSubmit={handleSubmitClient}>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Nombre y apellidos</Form.Label>
              <Form.Control name="nombre" type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Correo</Form.Label>
              <Form.Control name="correo" type="email" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Documento</Form.Label>
              <Form.Control name="documento" type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">

              <Form.Label>Fecha Nacimiento</Form.Label>
              <Form.Control name="nacimiento" type="date" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Campo obligatorio.
              </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">

              <Form.Label>Proyecto</Form.Label>
              <Form.Control name="proyecto" type="text" placeholder="" required />
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
          <Button onClick={setNewClient} variant="success">Agregar</Button>

        </Modal.Footer>

      </Modal>

      {/* <MainFooter /> */}

    </>

  )

}

export default HomePage;
