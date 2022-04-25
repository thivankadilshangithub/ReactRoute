import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to={'/'}  className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={'/about'}className="nav-link" >About</Link></li>
                <li className="nav-item"><Link to={'/project'} className="nav-link">Project</Link></li>
                <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul>
        </nav>

    );
}

export default Navbar;
