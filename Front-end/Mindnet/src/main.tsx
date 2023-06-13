import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import SignUp from './Pages/SignUp/SignUp.tsx'
// import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage.tsx'
// import LogIn from './Pages/LogIn/LogIn.tsx'
// import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
// import Router from './Router'
import MsgForgotpass from './Pages/MsgForgotpass/MsgForgotpass'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MsgForgotpass/>
    </BrowserRouter>
  </React.StrictMode>
)

