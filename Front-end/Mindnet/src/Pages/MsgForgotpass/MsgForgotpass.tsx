import "../../global.css"
import "./MsgForgotpass.css"

function MsgForgotpass() {
    return(
        <main>
            <div className="img1">
            <img src="../public/MsgForgotpass1.jpg" alt="Open laptop on a desk" id="MsgForgotpass-image"/>
            </div>
  
            <div className="container">
                <h1 id="logo">Mind<span id="logo-highlight">Net</span></h1>
                <h2 id="emailsent">Correo de recuperación de contraseña enviado</h2>
                <p>Se envió un mensaje a tu correo electrónico <strong>C•••••••••@•••••••.com</strong></p>
                <p>Sigue las instrucciones del mensaje para restablecer la contraseña.</p>
                <button type="submit" id="btn-main">Aceptar</button>
            </div>
        </main>
    )
}

export default MsgForgotpass