import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import './Header.css';

function Header() {
    return (
        <div>
        
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
                </nav>
            </div>

            <div className="hamburger">
                
                <label className="hamburger__button" for="toggle"> 
                    <span className="hamburger__icon"> &nbsp; </span>
                </label>
                <input type="checkbox" className="hamburger__checkbox" id="toggle"/>
                <div className="hamburger__background"> &nbsp;</div>
                <nav className="hamburger__nav">
                    <ul className="hamburger__list">
                        <li><Link to="/" className="links--bar yoo ">Home</Link></li>
                        <li><Link to="/register_login" className="links--bar yoo">Register Login</Link></li>
                        <li><Link to="/library" className="links--bar yoo">Library</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="header__greet">
                <h3 className="greet--header">Welcome Guest</h3> 
                <SearchBar />
            </div>
        </div>
    )
}

export default Header;