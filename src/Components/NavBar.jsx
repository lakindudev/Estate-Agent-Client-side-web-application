import logo from '../images/logo.png'; 

function NavBar() {
    return (
        <>
            <nav className='nav-bar'>
                <div className='logo'>
                    <img src={logo} alt="Logo" className='logo-img' /> 
                    <p className='logo-name'>HavenHub</p>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </>
    );
}
export default NavBar;