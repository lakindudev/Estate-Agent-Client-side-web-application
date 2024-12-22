function NavBar(){

    return(
        
       <>
         <nav>
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