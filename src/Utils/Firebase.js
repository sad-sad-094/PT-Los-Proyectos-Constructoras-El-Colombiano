/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBctmJOVk6pBu_nuw4sB5ol6DKLle38wZY",
  authDomain: "los-proyectos-constructoras.firebaseapp.com",
  projectId: "los-proyectos-constructoras",
  storageBucket: "los-proyectos-constructoras.appspot.com",
  messagingSenderId: "200889795634",
  appId: "1:200889795634:web:2e815957c17edae5e5682b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default app;
export { db, auth };
