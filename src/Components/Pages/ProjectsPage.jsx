/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete, MdUpdate } from 'react-icons/md';


import MainNavbar from '../Modules/MainNavbar';

function ProjectsPage() {

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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td><MdDelete /></td>
                  <td><MdUpdate /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td><MdDelete /></td>
                  <td><MdUpdate /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td><MdDelete /></td>
                  <td><MdUpdate /></td>
                </tr>
              </tbody>
            </Table>
          </div>

        </div>

      </div>

    </>

  )

}

export default ProjectsPage;
