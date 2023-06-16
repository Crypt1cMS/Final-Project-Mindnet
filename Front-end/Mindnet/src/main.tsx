import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
// import  Rutas from './Paths';
import Sidebar from './Pages/Sidebar/Sidebar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Sidebar />
    </Router>
  </React.StrictMode>,
)

