import './TerminosCondiciones.css'
import '../../global.css'
import NavbarCondiciones from '../components/NavbarCondiciones'
import SidebarCondiciones from '../components/SidebarCondiciones'

function TerminosCondiciones () {
  return (
    <main>
        <NavbarCondiciones/>
        <SidebarCondiciones/>
          <div id='container'>
            <div id='header'>
              <h1>Te damos la bienvenida a <span id="logo-highlight"><strong>MindNet</strong></span></h1>
            </div>

            <div id='content'>
              <p>Bienvenido@s a nuestra plataforma de social media. Antes de utilizar nuestros servicios, te pedimos que leas detenidamente los siguientes términos y condiciones. Al acceder o utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones, así como con todas las leyes y regulaciones aplicables. Si no estás de acuerdo con estos términos, te solicitamos que no utilices nuestra plataforma.</p>
            </div>
          </div>
              
    </main>
  );
}

export default TerminosCondiciones
