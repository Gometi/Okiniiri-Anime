import React from "react";
import { Link } from "react-router-dom";
import RegisterLogin from "./RegisterLogin";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/register_login">Register Login</Link></li>
                    <li><Link to="/library">Library</Link></li>
                </ul>
                <h3>Guest</h3> 
                <p>Search</p>
                <SearchBar />
            </nav>
            
        </div>
    )
}

export default Header;