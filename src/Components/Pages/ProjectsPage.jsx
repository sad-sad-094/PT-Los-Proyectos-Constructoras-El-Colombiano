/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import MainNavbar from '../Modules/MainNavbar';
import { db } from '../../Utils/Firebase';
import { toast } from 'react-toastify';

function ProjectsPage() {

  const navigation = useNavigate();

  let projectsA = useSelector((state) => state.userInfo.projects);
  let userName = useSelector((state) => state.userInfo.name);

  const [listProjects] = useState(projectsA);

  const deleteProjects = (index) => {
    updateDoc(doc(db, userName, `${userName}ID`), {
      projects: arrayRemove(
        listProjects[index]
      )
    })
      .then(() => {
        toast.success('Proyecto borrado satisfactoriamente.');
        navigation("/home");
      })
  }

  return (

    <>

      <MainNavbar />

      <div className="main-container">

        <div className="c-container">

          <h2>Tus proyectos</h2>
          <p>A continuación, verás y podrás administrar los proyectos activos de tu compañía.</p>

          <div>
            <Table striped responsive="sm">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Dirección</th>
                  <th>Constructora</th>
                  <th>Contacto</th>
                  <th>Borrar</th>
                  <th>Modificar</th>
                </tr>
              </thead>
              <tbody>
                {listProjects.map((i, index, listProjects) => {
                  return (
                    <tr>
                      <td>{i.code}</td>
                      <td>{i.name}</td>
                      <td>{i.adress}</td>
                      <td>{i.builders}</td>
                      <td>{i.contact}</td>
                      <td><MdDelete onClick={() => deleteProjects(index)} style={{cursor: 'pointer'}} /></td>
                      <td><MdUpdate style={{cursor: 'pointer'}} /></td>
                    </tr>
                  )
                })
                }
              </tbody>
            </Table>
          </div>

        </div>

      </div>

    </>

  )

}

export default ProjectsPage;
