/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';

import AuxNavbar from '../Modules/AuxNavbar';

function LandingPage() {

  return (

    <>

      <AuxNavbar />

      <div className="main-container">

        <div className="c-container">
          <h1>Bienvenido/a a Los Proyectos</h1>
          <h3>Si todavía no haces parte de nuestro sistema, regístrate.</h3>
          <p>Los Proyectos es un portal que te permite administrar los proyectos de tu constructora de manera ágil y segura.</p>
        </div>

      </div>

    </>

  )

}

export default LandingPage;
