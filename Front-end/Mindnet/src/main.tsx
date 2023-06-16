import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import  Rutas from './Paths';
import NavBar from './Pages/components/navbar';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Rutas/>
    </Router>
  </React.StrictMode>,
)

