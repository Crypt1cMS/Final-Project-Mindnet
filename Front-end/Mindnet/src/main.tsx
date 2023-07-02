import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import  Rutas from './Paths';
import {AuthProvider} from './auth';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Rutas/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)