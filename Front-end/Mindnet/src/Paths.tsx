import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp.tsx'
import LogIn from './Pages/LogIn/LogIn.tsx'
import ConfirmationPage from  './Pages/ConfirmationPage/ConfirmationPage.tsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.tsx'


function Paths () {
    return (
        
        <Routes>
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/login' element={<LogIn/>} />
            <Route path = '/ConfirmationPage' element={<ConfirmationPage/>} />
            <Route path = '/ForgotPassword' element={<ForgotPassword/>} />
        </Routes>
    
    )
}

export default Paths;
