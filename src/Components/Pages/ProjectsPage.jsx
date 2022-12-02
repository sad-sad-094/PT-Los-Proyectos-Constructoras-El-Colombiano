/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { useSelector } from 'react-redux';


import MainNavbar from '../Modules/MainNavbar';

function ProjectsPage() {

  let projectsA = useSelector((state) => state.userInfo.projects);
  
  const [listProjects] = useState(projectsA)

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
                      <td><MdDelete /></td>
                      <td><MdUpdate /></td>
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
