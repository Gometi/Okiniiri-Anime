import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


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
                                <li><Link to="/register_login" className="links--bar">Register Login</Link></li>
                    <li><Link to="/library" className="links--bar">Library</Link></li>
                </ul>
                <h3>Guest</h3> 
                <p>Search</p>
                <SearchBar />
            </nav>
            
        </div>
    )
}

export default Header;