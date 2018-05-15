import React, {Component} from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import jwtDecode from 'jwt-decode';

import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            currentUser: "Guest"
        }
    }
    componentDidMount(){
        let currentUser;
        if (!localStorage.getItem('authToken')){
            currentUser = "Guest";
            this.setState({
                currentUser: currentUser
            })
        }
        else{
            const token = localStorage.getItem('authToken');
            const user = jwtDecode(token);
            currentUser = user.username;
            this.setState({
                currentUser: currentUser
            })
        } 
        
    }

    logOut(){
        localStorage.setItem('authToken', '')
    }

    printToken() {

        const token = localStorage.getItem('authToken');
        const user = jwtDecode(token);
        console.log('token', user)
    }
    render(){
        return (
            <div className="header">

                <div className="header__logo">
                    <img src={require("./images/logoo.PNG")} className="header__img" />
                </div>

                <nav >
                    <ul className="header__links">
                        <li><Link to="/" className="links--bar">Home</Link></li>
                        <li><Link to="/register_login" className="links--bar">Register Login</Link></li>
                        <li><Link to="/library" className="links--bar">Library</Link></li>
                    </ul>
                    <form action="/">
                        <button onClick={this.logOut}>Logout</button>
                    </form>
                    
                    
                    <h3>{this.state.currentUser}</h3>
                    <button onClick={this.printToken} type="button">check token</button>
                    <p>Search</p>
                    <SearchBar />
                </nav>

            </div>
        )
    }
    
}

export default Header;