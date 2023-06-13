import React from 'react'
import ReactDOM from 'react-dom/client'

import Rutas from './Paths'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Rutas />
    </Router>
  </React.StrictMode>,
)
