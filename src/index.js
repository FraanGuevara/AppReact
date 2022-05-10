import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* Carrousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBupaLTnvSb_4_pqH6Q0gJB2Oe7zP9Pc9s",
  authDomain: "app-reactjs-coder.firebaseapp.com",
  projectId: "app-reactjs-coder",
  storageBucket: "app-reactjs-coder.appspot.com",
  messagingSenderId: "779926382592",
  appId: "1:779926382592:web:ec65edaddf7aeb931390e5"
};

// Initialize Firebase
initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
