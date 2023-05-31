import React from 'react'
import ReactDOM from 'react-dom/client'
// import SignUp from './Pages/SignUp/SignUp.tsx'
// import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage.tsx'
// import LogIn from './Pages/LogIn/LogIn.tsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ForgotPassword />
  </React.StrictMode>,
)
