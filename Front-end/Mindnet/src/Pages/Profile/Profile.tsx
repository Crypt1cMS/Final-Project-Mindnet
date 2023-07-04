import { Link } from "react-router-dom"
import NavBar from "../components/navbar"
import './Profile.css'

function Profile() {

const profileName = "John Doe"
const role = "Developer"

    return(

    <>
    <NavBar/>
        <div className="container-profile">

            <div className="profile">
                <img src="../../public/Test profile image.png" alt=""></img>
                <h1>{profileName}</h1>
                <p>{role}</p>
            </div>

            <div className="content-profile">
                <p><em>Nombre Completo:</em></p>
                    <input type="text" placeholder="Nombre Completo" />
                <p><em>Correo electrónico:</em></p>
                    <input type="text" placeholder="Correo electrónico"/>
                <p><em>Teléfono:</em></p>
                    <input type="number" placeholder="+1 (800)000-0000" />
            </div>

            <div className="additional-content-profile">
                <p><em>Cumpleaños</em></p>
                    <input type="date" />
                <p><em>Género</em></p>
                    <input type="text" placeholder="Masculino" />
            </div>

                <hr id="profile-divider"></hr>

            <div className="footer-profile">
                <Link to={'/Newpassword'}>Cambiar Contraseña</Link>
                <button className="primary-button-profile" type="submit">Guardar Cambios</button>
            </div>
        </div>
    </>
    )
}

export default Profile