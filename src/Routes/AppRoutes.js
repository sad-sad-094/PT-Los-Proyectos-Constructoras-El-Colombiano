/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import LandingPage from "../Components/Pages/LandingPage";
import HomePage from "../Components/Pages/HomePage";
import ProjectsPage from "../Components/Pages/ProjectsPage";
import ClientsPage from "../Components/Pages/ClientsPage";
import { PrivateRoutes, PublicRoutes } from "../Components/Modules/IsLogged";


function AppRoutes() {

  const logged = useSelector((state) => state.isLogged)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes auth={logged}> <LandingPage/> </PublicRoutes>} />
        
        <Route path="/home" element={<PrivateRoutes auth={logged}> <HomePage/> </PrivateRoutes>} />
        <Route path="/projects" element={<PrivateRoutes auth={logged}> <ProjectsPage/> </PrivateRoutes>} />
        <Route path="/clients" element={<PrivateRoutes auth={logged}> <ClientsPage/> </PrivateRoutes>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
