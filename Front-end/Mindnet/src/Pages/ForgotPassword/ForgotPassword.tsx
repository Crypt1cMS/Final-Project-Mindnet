import { Link } from "react-router-dom"
import "../../global.css"
import "./ForgotPassword.css"

function ForgotPassword() {
    return (
        <main>

        <div className="img1">
            <img src="../public/Forgotpassword.png" alt="A stressed person" id="img-forgotpassword"/>
        </div>

        <div className="container-forgotpass">
            <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>

            <h2>¿Olvidaste tu contraseña?</h2>

            <div className="email-group">
                      <input
                          type="text"
                          placeholder="Correo electronico"
                          name="email"
                          required
                      />

                      <p id="p-divider">o</p>
  
                      <input
                          type="text"
                          placeholder="Ingresa tu numero de usuario"
                          name="Usuario"
                      />
            </div>
            
            <div id="btn-container">
                <button type="submit" className="primary-button">Enviar</button>
            </div>
            
            <div id="btn-container1">
                <Link to={"/LogIn"}><button type="button" className="secondary-button">Volver a iniciar sesión</button></Link>
            </div>


            <div className="footer">
                <p>¿Necesitas ayuda?</p>
                <p>Por favor, contacta al <a href="#">Soporte Técnico de MindNet</a></p>
            </div>

        </div>

        </main>
    )
}

export default ForgotPassword