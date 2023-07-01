import '../../global.css'
import { useContext } from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import {AuthContext} from "../../auth"

// placeholder object for testing
const user = {
    name: 'John',
    lastname: 'Doe',
    picture: '../../../public/Test profile image.png'
    
};


function NavbarCondiciones(){

const [dropdownVisible, setDropdownVisible] = useState(false);

const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

const navigate =  useNavigate();

const {logout}:any = useContext(AuthContext);

const onlogout = ()=>{
    logout(),
    navigate("/login")
}        

    return (
        <>
            <nav>
                <ul id='nav-container'>
                    <ul id="nav-left">
                        <ul id='nav-search'>
                            <li><Link to={"/Feed"}><img src="../../../public/nav-logo.png" alt="Navigation Bar Logo" id='nav-logo'/></Link></li>
                            <h1 id='pnav-header'><strong>Condiciones y Políticas</strong></h1>
                        </ul>
                    </ul>

                    <ul id="nav-right"> 
                        <ul id='nav-icons'>
                            <li><Link to={"/Feed"}><img src="../../../public/Feed-Icon.png" alt="Feed Icon" /></Link></li>
                            <li><Link to={"/Inbox"}><img src="../../../public/direct-messages-icon.png" alt="Direct Message Icon"/></Link></li>
                        </ul>

                        <ul id='user-info'>
                            <li><h3>{user.name + ' '} {user.lastname}</h3></li>
                            <li><Link to={"/Profile"}><img src={user.picture} alt="profile picture" id='nav-pfp' /></Link></li>
                            <li><img src='../../../public/config icon.svg' alt="configuration icon" onClick={toggleDropdown} />
                           
                           
                            {dropdownVisible && (
                                <div id="dropdown-condition">
                                    <div className="dropdown-cotent">
                                        <ul>
                                            <li><button className='nav-button' onClick={onlogout} >Logout</button></li>
                                            <hr></hr>
                                            <li><Link to={"/Feed"}><button className='nav-button'>Back to Feed</button></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                           
                           
                            </li>
                        </ul>
                        
                    </ul>    
                </ul>
            </nav>
        </>
    )
}

export default NavbarCondiciones