import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes/Routes'
import './styles/style.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css/animate.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
