import '../../global.css'
import Dylan from '../../../public/side-profile pic.jpg'
import Carlo from '../../../public/side-carlo2.jpg'
import Gustavo from '../../../public/side-gustavo.jpg'
import Andres from '../../../public/side-andres.jpg'



function Sidebar() {
  return (

  <>
    <div className="sidebar">
      
      <div className="sidebar-menu">
      
        <input id="side-searchbar"
          type="text" 
          placeholder="Buscar amigos..."
          name="Search-bar" 
        />

        <div className="side-header">
          <h4>Amigos Conectados</h4>
        </div>

        <div className="side-friends">
          <div className="shape">
            <img src={Dylan}></img>
            <h4 className="side-fname">Dylan Minaya</h4>
          </div>
        </div>

        <div className="side-friends">
          <div className="shape">
            <img src={Carlo}></img>
              <h4 className="side-fname">Carlo Adames</h4>
          </div>
        </div>

        <div className="side-friends">
          <div className="shape">
            <img src={Gustavo}></img>
              <h4 className="side-fname">Gustavo De óleo</h4>
          </div>
        </div>

        <div className="side-header">
          <h4>Amigos Desconectados</h4>
        </div>

        <div className="side-friends">
          <div className="shape">
            <img src={Andres}></img>
              <h4 className="side-fname">Prof. Andres</h4>
          </div>
        </div>

      </div>

    </div>
  </>

  );
}

export default Sidebar;