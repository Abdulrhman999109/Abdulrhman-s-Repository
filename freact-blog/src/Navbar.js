const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="Links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"black",
                    borderRadius:'8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;