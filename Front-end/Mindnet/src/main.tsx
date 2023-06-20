import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import  Rutas from './Paths';
import NavBar from './Pages/components/navbar';


// import  Rutas from './Paths';
import TerminosCondiciones from './Pages/TerminosCondiciones/TerminosCondiciones'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Rutas/>
    </Router>
  </React.StrictMode>,
)

