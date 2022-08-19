import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAhFC_VSlojySkWEQ04PLW5fr0oBTBuVns",
  authDomain: "react-carrito-coder.firebaseapp.com",
  projectId: "react-carrito-coder",
  storageBucket: "react-carrito-coder.appspot.com",
  messagingSenderId: "346480216654",
  appId: "1:346480216654:web:cf65c81e7e54e9d0ced11f",
  measurementId: "G-PQKK8VR6B9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
