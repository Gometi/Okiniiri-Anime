import React, {Component} from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import jwtDecode from "jwt-decode";

import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentUser: "Guest",
            key: Math.random()
        }
        this.guest = "Guest";
    }


    getUser() {
        let user = "";
        if (localStorage.getItem('authToken')) {
            user = jwtDecode(localStorage.getItem('authToken'));
            return user;
        }
    }
    componentDidMount(){
        

    }

    logOut(){
        localStorage.setItem('authToken', '')
    }



    render(){
        return (
            <div>

                <div className="header">

                    <div className="header__logo">
                        <img src={require("./images/logo.PNG")} className="header__img" />
                    </div>

                    <nav >
                        <ul className="header__links">
                            <li><Link to="/" className="links--bar">Home</Link></li>
                            <li><Link to="/register_login" className="links--bar">Register Login</Link></li>
                            <li><Link to={localStorage.getItem('authToken') ? '/library' : '/'} className="links--bar">Library</Link></li>
                            <li className={localStorage.getItem('authToken') ? 'show' : 'hide'} onClick={this.logOut}><Link to="/" className="links--bar">Logout</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="hamburger">

                    <label className="hamburger__button" for="toggle">
                        <span className="hamburger__icon"> &nbsp; </span>
                    </label>
                    <input type="checkbox" className="hamburger__checkbox" id="toggle" />
                    <div className="hamburger__background"> &nbsp;</div>
                    <nav className="hamburger__nav">
                        <ul className="hamburger__list">
                            <li><Link to="/" className="links--bar yoo ">Home</Link></li>
                            <li><Link to="/register_login" className="links--bar yoo">Register Login</Link></li>
                            <li><Link to={localStorage.getItem('authToken') ? '/library' : '/'} className="links--bar yoo">Library</Link></li>
                            <li className={localStorage.getItem('authToken') ? 'show' : 'hide'} onClick={this.logOut}><Link to="/" className="links--bar yoo">Logout</Link></li>
                            
                        </ul>
                    </nav>
                </div>

                <div className="header__greet">
                    <h3 className="greet--header">Welcome {localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')).username : ''}</h3>
                    <SearchBar />
                </div>
            </div>
        )
    }
    
}

export default Header;