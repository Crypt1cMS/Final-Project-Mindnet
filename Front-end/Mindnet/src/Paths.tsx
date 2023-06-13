import { Route, Routes, Navigate} from 'react-router-dom'
import SignUp from './Pages/Sign Up/SignUp.tsx'
import LogIn from './Pages/Log In/LogIn.tsx'
import ConfirmationPage from './Pages/Confirmation Page/ConfirmationPage.tsx'
import ForgotPassword from './Pages/Forgot Password/ForgotPassword.tsx'

function Rutas () {
    return (
        
        <Routes>
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/login' element={<LogIn/>} />
            <Route path = '/*' element={<Navigate to="/login"/>} />
            <Route path = '/ConfirmationPage' element={<ConfirmationPage/>} />
            <Route path = '/ForgotPassword' element={<ForgotPassword/>} />
        </Routes>
    
    )
}
export default Rutas;
