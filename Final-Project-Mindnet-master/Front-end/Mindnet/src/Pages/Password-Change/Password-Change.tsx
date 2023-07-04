import "./Password-Change.css"
import '../../global.css'
import NavBarPassword from '../New-Password/navbarPassword'

function PasswordChange() {
    return(
        
    <>
        <NavBarPassword/>
            <main>
                <div className="square-container">
                    <div id="square">
                        <h1 id="name">Hola <span id="name-highlight">Willian Wilson</span></h1>
                        <p>Establece tu nueva contraseña a continuación</p>

                            <input className="password"
                            type="password"
                            placeholder="Nueva contraseña"
                            name="contraseña"
                            required
                            />

                        <hr/>

                            <input className="password"
                            type="password"
                            placeholder="Nueva contraseña"
                            name="contraseña"
                            required
                            />

                            <input className="password"
                            type="password"
                            placeholder="Nueva contraseña"
                            name="contraseña"
                            required
                            />

                        <div id='btn-main'>
                            <button type='submit'>Guardar cambios</button>
                        </div>

                    </div>

                    <div id="footer">
                        <p>¿Necesitas ayuda?</p>
                        <p>Por favor, contacta al <a href="#"><strong>Soporte Técnico de MindNet</strong></a></p>
                    </div>

                </div>

            </main>
    </>
    )
}

export default PasswordChange