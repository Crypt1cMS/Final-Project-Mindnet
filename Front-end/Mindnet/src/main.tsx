import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import Rutas from './Paths'
import { BrowserRouter as Router } from 'react-router-dom';
import NewPassword from './Pages/New Password/Newpassword'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <NewPassword />
    </Router>
  </React.StrictMode>,
)

