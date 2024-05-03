// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.)
const firebaseConfig = {
  apiKey: "AIzaSyB7ePu7uI_PgcWg50et8MdIwYMU78TD6SM",
  authDomain: "car-doctor-a7f77.firebaseapp.com",
  projectId: "car-doctor-a7f77",
  storageBucket: "car-doctor-a7f77.appspot.com",
  messagingSenderId: "466300684580",
  appId: "1:466300684580:web:955ee6c1bb1dbcc5d40bb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;