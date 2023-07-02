import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './Pages/Sign Up/SignUp.tsx'
import LogIn from './Pages/Log In/LogIn.jsx'
import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage.tsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.tsx'
import MessageForgotpass from './Pages/ForgotPassword/ForgotPassword.tsx'
import NewPassword from './Pages/New-Password/Newpassword.tsx'
import { PrivateRoute } from './routes/PrivateRoute.jsx'
import Feed from './Pages/Feed/FeedPage.tsx'
import TerminosCondiciones from './Pages/TerminosCondiciones/TerminosCondiciones.tsx'
import Profile from './Pages/Profile/Profile.tsx'

function Rutas () {
    return (
        
        <Routes>
            <Route path = '/login' element={<LogIn/>} />
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/ForgotPassword' element={<ForgotPassword/>} />
           
            <Route path = '/*' element={
                <PrivateRoute>
                    <Routes>

                    <Route path = '/*' element={<Navigate to="/Feed"/>} />
                    <Route path = '/ConfirmationPage' element={<ConfirmationPage/>} />
                    <Route path = '/MessageForgotpassword' element={<MessageForgotpass/>} />
                    <Route path = '/Newpassword' element={<NewPassword/>} />
                    <Route path = '/Feed' element={<Feed/>} /> 
                    <Route path = '/TerminosCondiciones' element={<TerminosCondiciones/>} />
                    <Route path = '/Profile' element={<Profile/>} />
                    

                    </Routes>
                </PrivateRoute>

            }/>
        </Routes>
    
    )
}
export default Rutas;