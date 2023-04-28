// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2__ytQEssCBSeKhETIy2QeLu4ojQI9M",
  authDomain: "project-11-savoryspoon.firebaseapp.com",
  projectId: "project-11-savoryspoon",
  storageBucket: "project-11-savoryspoon.appspot.com",
  messagingSenderId: "675775334170",
  appId: "1:675775334170:web:debce6a48cf8a31cc7cea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;