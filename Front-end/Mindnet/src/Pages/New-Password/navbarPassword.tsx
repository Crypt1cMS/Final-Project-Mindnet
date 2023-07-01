import '../../global.css'
import { Link } from "react-router-dom"

// placeholder object for testing
// const user = {
//     follows: 500 + ' following',
//     followers: 1000 + ' followers',
//     posts: 250 + ' posts',  
//     picture: '../../../public/Test profile image.png'
    
// };


function NavBarPassword(){
    return (
        <>
            <nav>
                <ul id='nav-container'>
                    <ul id="nav-left">
                        <ul id='nav-search'>
                            <li><Link to={"/Feed"}><img src="../../../public/nav-logo.png" alt="Navigation Bar Logo" id='nav-logo'/></Link></li>
                            <h1 id='pnav-header'><strong>Cambio de Contraseña</strong></h1>
                        </ul>
                    </ul>

                    <ul id="nav-right"> 
                        <ul id='nav-icons'>
                            <li><Link to={"/Feed"}><img src="../../../public/Feed-Icon.png" alt="Feed Icon" /></Link></li>
                            <li><Link to={"/Inbox"}><img src="../../../public/direct-messages-icon.png" alt="Direct Message Icon"/></Link></li>
                            <li><Link to={"/Friends"}><img src="../../../public/friends-icon.png" alt="Friends Icon" /></Link></li>
                        </ul>

                        <ul id='Pass-user-info'>
                            <li><Link to={"/Settings"}><img src='../../../public/nav-setting-password.png' alt="configuration icon" /></Link></li>
                        </ul>

                    </ul>    
                </ul>
            </nav>
        </>
    )
}

export default NavBarPassword