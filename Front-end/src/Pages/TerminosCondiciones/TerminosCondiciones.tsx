import './TerminosCondiciones.css'
import '../../global.css'
import NavbarCondiciones from './NavbarCondiciones'
import SidebarCondiciones from './SidebarCondiciones'

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

            <div id='content1'>
              <h2>1. Uso de la Plataforma:</h2>
                <p>a. Al registrarte en nuestra plataforma, garantizas que eres mayor de edad o cuentas con el consentimiento de tus padres o tutores legales para utilizar nuestros servicios.</p>
                <p>b. Te comprometes a proporcionar información precisa y actualizada al registrarte en nuestra plataforma y a mantenerla actualizada durante el tiempo que utilices nuestros servicios.</p>
                <p>c. Asumes la responsabilidad exclusiva de todas las actividades realizadas desde tu cuenta de usuario, incluido el contenido que publiques o compartas en la plataforma.</p>            
            </div>

            <div id='content2'>
              <h2>2. Contenido de Usuario:</h2>
                <p>a. Al utilizar nuestra plataforma, aceptas que eres el único responsable de cualquier contenido que publiques, compartas o transmitas a través de la misma. Te comprometes a no publicar o compartir contenido que infrinja los derechos de terceros, sea ilegal, difamatorio, ofensivo, obsceno o viole cualquier ley o regulación aplicable.</p>
                <p>b. Reconoces y aceptas que cualquier contenido que publiques o compartas en nuestra plataforma puede ser visible para otros usuarios y puede ser utilizado por nosotros de acuerdo con nuestras políticas de privacidad.</p>
            </div>

            <div id='content3'>
              <h2>3. Propiedad Intelectual:</h2>
                <p>a. Reconoces y aceptas que todos los derechos de propiedad intelectual relacionados con nuestra plataforma y su contenido (incluyendo, pero no limitado a, marcas registradas, derechos de autor, patentes, secretos comerciales, etc.) son de nuestra propiedad o de nuestros licenciantes.</p>
                <p>b. Se prohíbe la reproducción, distribución, modificación, publicación, transmisión, venta, creación de trabajos derivados o cualquier otro uso no autorizado del contenido de nuestra plataforma sin nuestro consentimiento previo por escrito.</p>
            </div>

            <div id='content4'>
              <h2>4. Privacidad y Protección de Datos:</h2>
                <p>a. Nuestra plataforma recopila y procesa información personal de acuerdo con nuestras políticas de privacidad. Al utilizar nuestros servicios, aceptas nuestras prácticas de privacidad y nos autorizas a recopilar, almacenar y utilizar tus datos personales de acuerdo con dichas políticas.</p>
                <p>b. Te comprometes a mantener la confidencialidad de tu información de inicio de sesión y a no divulgarla a terceros. Eres el único responsable de todas las actividades realizadas desde tu cuenta.</p>
            </div>

            <div id='content5'>
              <h2>5. Limitación de Responsabilidad:</h2>
                <p>a. Nuestra plataforma se proporciona "tal cual" y no ofrecemos ninguna garantía con respecto a su disponibilidad, funcionalidad, exactitud o idoneidad para un propósito particular. No seremos responsables de ninguna pérdida, daño o perjuicio que pueda resultar del uso de nuestra plataforma.</p>
                <p>b. No seremos responsables de ningún contenido publicado o compartido por los usuarios en nuestra plataforma, ni de cualquier pérdida o daño derivado de dicho contenido.</p>
            </div>

            <div id='content6'>
              <h2>6. Modificaciones y Terminación:</h2>
                <p>a. Nos reservamos el derecho de modificar, suspender o interrumpir, temporal o permanentemente, nuestra plataforma o cualquier parte de ella, en cualquier momento y sin previo aviso.</p>
                <p>b. Nos reservamos el derecho de terminar tu acceso</p>
            </div>

            <div id='footer'>
              <p><strong>© 2023 Mindnet</strong></p>
            </div>
            
          </div>
              
    </main>
  );
}

export default TerminosCondiciones
