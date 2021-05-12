import { NavLink } from "./NavLink";

function Nav(){
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-nav">
                    <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                    <NavLink href="/blogs" className="nav-item nav-link">Blogs</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;