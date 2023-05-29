import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import RegisterPage from './RegisterPage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>,
)
