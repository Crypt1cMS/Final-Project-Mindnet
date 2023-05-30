import React from 'react'
import ReactDOM from 'react-dom/client'
// import RegisterPage from './SignUp.tsx'
import LogIn from './LogIn.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LogIn/>
    {/* <RegisterPage /> */}
  </React.StrictMode>,
)
