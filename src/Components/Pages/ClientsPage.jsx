/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete, MdUpdate } from 'react-icons/md';


import MainNavbar from '../Modules/MainNavbar';

function ClientsPage() {

  return (

    <>

      <MainNavbar />

      <div className="main-container">

        <div className="c-container">

          <h2>Tus clientes</h2>
          <p>A continuación, podrás ver y administrar los clientes interesados en tus proyectos.</p>

          <div>
            <Table striped responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Documento</th>
                  <th>Fecha de nacimiento</th>
                  <th>Proyecto</th>
                  <th>Eliminar</th>
                  <th>Modificar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td></td>
                  <td><MdDelete /></td>
                  <td><MdUpdate /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Otto</td>
                  <td></td>
                  <td><MdDelete /></td>
                  <td><MdUpdate /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>@twitter</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td></td>
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

export default ClientsPage;
