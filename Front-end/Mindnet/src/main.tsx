import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
// import  Rutas from './Paths';
import Error404 from './Pages/404 Error/Error404'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Error404 />
    </Router>
  </React.StrictMode>,
)

