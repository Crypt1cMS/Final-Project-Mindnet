import "./Newpassword.css"
import { Link } from "react-router-dom"

function Newpassword() {
    return(
        <main>
            <div className="img1">
                <img src="../public/Newpassword.jpg" alt="Open laptop on a desk" id="Newpassword-image"/>
            </div>
  
            <div className="container">
                <h1 id="logo">Hola <span id="logo-highlight">Name Lastname!</span></h1>
                <p><em>Establece tu nueva contraseña a continuación</em></p>

                    <input className="password"
                        type="password"
                        placeholder="Nueva contraseña"
                        name="contraseña"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Repetir contraseña"
                        name="contraseña"
                        required
                    />
                
                <button type="submit" id="btn-main">Guardar Cambios</button>

                <Link to={"/Profile"}><button type="button" className="secondary-button-newpass">Volver a tu Perfil</button></Link>

            </div>
        </main>
    )
}

export default Newpassword