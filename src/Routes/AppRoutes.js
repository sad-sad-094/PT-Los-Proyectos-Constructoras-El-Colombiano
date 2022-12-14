/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import LandingPage from "../Components/Pages/LandingPage";
import HomePage from "../Components/Pages/HomePage";
import ProjectsPage from "../Components/Pages/ProjectsPage";
import ClientsPage from "../Components/Pages/ClientsPage";


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/clients" element={<ClientsPage/>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
