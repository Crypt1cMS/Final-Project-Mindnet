import { Route, Routes, Navigate} from 'react-router-dom'
import SignUp from './Pages/Sign Up/SignUp.tsx'
import LogIn from './Pages/Log In/LogIn.jsx'
import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage.tsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.tsx'
import MessageForgotpass from './Pages/ForgotPassword/ForgotPassword.tsx'
import NewPassword from './Pages/New-Password/Newpassword.tsx'
import {PrivateRoute} from './routes/PrivateRoute.jsx'
import { Feed } from './Pages/Feed/FeedPage.tsx'

function Rutas () {
    return (
        
        <Routes>
            <Route path = '/login' element={<LogIn/>} />
            <Route path ='/signup' element={<SignUp />} />
           
            <Route path = '/*' element={
                <PrivateRoute>
                    <Routes>

                    <Route path = '/*' element={<Navigate to="/feed"/>} />
                    <Route path = '/ConfirmationPage' element={<ConfirmationPage/>} />
                    <Route path = '/ForgotPassword' element={<ForgotPassword/>} />
                    <Route path = '/MessageForgotpassword' element={<MessageForgotpass/>} />
                    <Route path = '/Newpassword' element={<NewPassword/>} />
                    <Route path = '/Feed' element={<Feed/>} />  

                    </Routes>
                </PrivateRoute>

            }/>
        </Routes>
    
    )
}
export default Rutas;
