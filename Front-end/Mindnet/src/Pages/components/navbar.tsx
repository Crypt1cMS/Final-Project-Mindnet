import '../../global.css'


// placeholder object for testing
const user = {
    name: 'John',
    lastname: 'Doe',
    follows: 500 + ' following',
    followers: 1000 + ' followers',
    posts: 250 + ' posts',  
    picture: '../../../public/Test profile image.png'
    
  };


function NavBar(){
    return (
        <>
            <nav>
                <ul id='nav-container'>
                    <ul id="nav-left">
                        <ul id='nav-search'>
                            <li><img src="../../../public/nav-logo.png" alt="Navigation Bar Logo" id='nav-logo'/></li>
                            <li><input type="text" name="searchbar" id="searchbar" placeholder='Buscar devs...' /></li>
                        </ul>
                        
                        <ul id='nav-stats'>
                            <li><p>{user.follows}</p></li>
                            <li><p>{user.followers}</p></li>
                            <li><p>{user.posts}</p></li>
                        </ul>
                    </ul>

                    <ul id="nav-right"> 
                        <ul id='nav-icons'>
                            <li><img src="../../../public/Feed-Icon.png" alt="Feed Icon" /></li>
                            <li><img src="../../../public/direct-messages-icon.png" alt="Direct Message Icon" /></li>
                            <li><img src="../../../public/friends-icon.png" alt="Friends Icon" /></li>
                        </ul>

                        <ul id='user-info'>
                            <li><h3>{user.name + ' '} {user.lastname}</h3></li>
                            <li><img src={user.picture} alt="profile picture" id='nav-pfp' /></li>
                            <li><img src='../../../public/config icon.svg' alt="configuration icon" /></li>
                        </ul>
                    </ul>    
                </ul>
            </nav>
        </>
    )
}

export default NavBar