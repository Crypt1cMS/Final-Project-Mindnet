import { Link } from "react-router-dom"
import "../../global.css"
import "./LogIn.css"


function LogIn() {
    return(
        <main>
        <div className="img1">
          <img src="../public/login.jpg" alt="People talking" id="signup-image"/>
        </div>
  
        <div className="container">
          <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>
              <form id="login">

  
                  <div className="email-group">
                      <input
                          type="text"
                          placeholder="Correo electronico"
                          name="email"
                          required
                      />
  
                      <input
                          type="password"
                          placeholder="Contraseña"
                          name="contraseña"
                          required
                      />
                  </div>
  
                  <div className="button-group">
                      <button type="submit" className="primary-button">Iniciar Sesión</button>
                      <a href="#" className="secondary-link">¿Olvidaste tu contraseña?</a>
                      <hr className="form-divider" />
                      

                  </div>
              </form>
                <Link to={`/signup`}><button type="submit" className="secondary-button">Registrate Ahora</button></Link>
        </div>
  
        <div></div>
      </main>
    )
}

export default LogIn