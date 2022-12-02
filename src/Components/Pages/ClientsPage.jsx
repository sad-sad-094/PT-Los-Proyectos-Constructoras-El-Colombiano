/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { useSelector } from 'react-redux';


import MainNavbar from '../Modules/MainNavbar';

function ClientsPage() {

  let clientsA = useSelector((state) => state.userInfo.clients);

  const [listClients] = useState(clientsA)

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
                  <th>Documento</th>
                  <th>Fecha de nacimiento</th>
                  <th>Proyecto</th>
                  <th>Eliminar</th>
                  <th>Modificar</th>
                </tr>
              </thead>
              <tbody>
                {listClients.map((i, index, listClients) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.DNI}</td>
                      <td>{i.birth}</td>
                      <td>{i.project}</td>
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

export default ClientsPage;
