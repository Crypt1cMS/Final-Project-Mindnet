import { Route, Routes} from 'react-router-dom'
import SignUp from './Pages/Sign Up/SignUp.tsx'
import LogIn from './Pages/Log In/LogIn.tsx'
import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage.tsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.tsx'
import MessageForgotpass from './Pages/ForgotPassword/ForgotPassword.tsx'
import NewPassword from './Pages/New-Password/Newpassword.tsx'
import Feed from './Pages/Feed/FeedPage.tsx'

function Rutas () {
    return (
        
        <Routes>
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/' element={<LogIn/>} />
            <Route path = '/ConfirmationPage' element={<ConfirmationPage/>} />
            <Route path = '/ForgotPassword' element={<ForgotPassword/>} />
            <Route path = '/MessageForgotpassword' element={< MessageForgotpass/>} />
            <Route path = '/Newpassword' element={<NewPassword/>} />
            <Route path = '/Feed' element={<Feed/>} />
        </Routes>
    
    )
}
export default Rutas;
