import './Error404.css'
import '../../global.css'
import NavBar from '../components/navbar'
import { Link } from "react-router-dom"

function Error404 () {
  return (
    <>
        <NavBar/>
        <div id='container'>
          <div id='header'>
            <h2>ERROR</h2>
            <h1>404</h1>
          </div>

          <div id='content'>
            <p>La página a la que intenta acceder no existe o se ha movido.</p>
            <p>Intenta volver a nuestra página de inicio.</p>
          </div>

          <div id='btn-main'>
            <Link to={"/Feed"}><button type='submit'>Regresar a la pagina de inicio</button></Link>
          </div>

          <div id='footer'>
            <p>Si cree que se trata de un error, póngase en contacto con nuestro <a href='#'>Soporte Técnico de MindNet</a></p>
          </div>

        </div>
            
    </>
  );
}

export default Error404
