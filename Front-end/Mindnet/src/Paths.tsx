import { Route, Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.tsx'
import LogIn from './Pages/LogIn/LogIn.tsx'
import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage.tsx'

function Ruta1 () {
    return (
        <Routes>
            <Route path ='/signup' element={<SignUp />} />
            <Route path = '/login' element={<LogIn/>} />
            <Route path = '/ConfirmationPage' element={<ConfirmationPage/>} />
        </Routes>
    
    )
}

export default Ruta1;