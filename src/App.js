/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'normalize.css';
import './Styles/Main.scss';
import AppRoutes from './Routes/AppRoutes';


function App() {

  return (

    <>
      <AppRoutes />
      <ToastContainer
        theme='colored'
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom} />
    </>

  );

}

export default App;
