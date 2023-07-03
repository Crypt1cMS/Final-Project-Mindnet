import { useContext, useEffect} from 'react';
import { useState } from 'react';
import '../../global.css'
import { Link, useNavigate } from "react-router-dom"
import {AuthContext} from "../../auth"
import { Searchbar } from './Searchbar';
import { SearchResultsList } from './SearchResultsList'



// placeholder object for testing





 const NavBar= ()=> {

// dropdown for the setting icon
const [dropdownVisible, setDropdownVisible] = useState(false);

const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
};

// logout within the dropdown
const navigate =  useNavigate();        

const {logout, name, lastname}:any = useContext(AuthContext);
const user = {
    follows: 500 + ' following',
    followers: 1000 + ' followers',
    posts: 250 + ' posts',  
    picture: '../../../public/Test profile image.png'
    
};


const onlogout = ()=>{
    logout(),
    navigate("/login")
}

// search function in the navbar
const [results, setResults] = useState([]);


   
    return (
        <>
            <nav>
                <ul id='nav-container'>
                    <ul id="nav-left">
                        <ul id='nav-search'>
                            <li><Link to={"/Feed"}><img src="../../../public/nav-logo.png" alt="Navigation Bar Logo" id='nav-logo'/></Link></li>
                            <li><Searchbar setResults={setResults}/></li>
                        </ul>
                        <SearchResultsList results={results}/>

                        <ul id='nav-stats'>
                            <li><p>{user.follows}</p></li>
                            <li><p>{user.followers}</p></li>
                            <li><p>{user.posts}</p></li>
                        </ul>
                    </ul>

                    <ul id="nav-right"> 
                        <ul id='nav-icons'>
                            <li><Link to={"/Feed"}><img src="../../../public/Feed-Icon.png" alt="Feed Icon" /></Link></li>
                            <li><Link to={"/Inbox"}><img src="../../../public/direct-messages-icon.png" alt="Direct Message Icon"/></Link></li>
                        </ul>
                    
                        <ul id='user-info'>
                            <li><h3>{name} {lastname}</h3></li>
                            <li><Link to={"/Profile"}><img src={user.picture} alt="profile picture" id='nav-pfp'/></Link></li>
                            <li><img src='../../../public/config icon.svg' alt="configuration icon" onClick={toggleDropdown} />
                          
                           
                            {dropdownVisible && (
                                <div id="dropdown">
                                    <div className="dropdown-cotent">
                                        <ul>
                                            <li><button className='nav-button' onClick={onlogout} >Logout</button></li>
                                            <hr></hr>
                                            <li><Link to={"/TerminosCondiciones"}><button className='nav-button'> Terms & Conditions</button></Link></li>
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

export default NavBar