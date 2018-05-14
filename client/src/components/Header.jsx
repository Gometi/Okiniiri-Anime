import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className="header">

            <div className="header__logo">
                <img src={require("./images/logoo.PNG")} className="header__img"/>
            </div>

            <nav >
                <ul className="header__links">
                    <li><Link to="/" className="links--bar">Home</Link></li>
                    <li><Link to="" className="links--bar">Guest</Link></li>
                    <li><Link to="" className="links--bar">Login</Link></li>
                    <li><Link to="/library" className="links--bar">Library</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;