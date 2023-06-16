import '../../global.css'


// placeholder object for testing
const user = {
    follows: 500 + ' following',
    followers: 1000 + ' followers',
    posts: 250 + ' posts'
  };


function NavBar(){
    return (
        <>
            <nav>
                <ul id='nav-container'>
                    <li><img src="../../../public/nav-logo.png" alt="Navigation Bar Logo" id='nav-logo'/></li>
                    <li><input type="text" name="searchbar" id="searchbar" placeholder='Buscar devs...' /></li>
                    
                    <ul id='nav-stats'>
                        <li><p>{user.follows}</p></li>
                        <li><p>{user.followers}</p></li>
                        <li><p>{user.posts}</p></li>
                    </ul>
                    
                    <ul id='nav-icons'>
                        <li><img src="../../../public/Feed-Icon.png" alt="Feed Icon" /></li>
                        <li><img src="../../../public/direct-messages-icon.png" alt="Direct Message Icon" /></li>
                        <li><img src="../../../public/friends-icon.png" alt="Friends Icon" /></li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}

export default NavBar