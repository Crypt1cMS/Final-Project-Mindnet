import {Link} from 'react-router-dom'
import Paths from './Paths.js'

function router() {
    return (
      <>
        <div>
          <h1 className='read-the-docs'>Home</h1>
          <main className="container">

            <ul>
              <li><Link to="/SignUp"> Sign-Up page </Link></li>
              <li><Link to="/LogIn"> Login page </Link></li>
              <li><Link to="/ConfirmationPage"> Confirmation page </Link></li>
            </ul>
             
          </main>
          <Paths/>
        </div>
      </>
    );
  }
  
export default router;