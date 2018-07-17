import React, {Component} from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import jwtDecode from "jwt-decode";

import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentUser: "",
            status: ""
        }
        this.checkStatus = this.checkStatus.bind(this);
        this.logOut = this.logOut.bind(this);
    }


    
    componentDidMount(){
        let user = "";
        if (localStorage.getItem('authToken')){
            user = jwtDecode(localStorage.getItem('authToken'));
            this.setState({
                currentUser: user.username
            })
        }

    }

    logOut(){
        localStorage.setItem('authToken', '');
        this.setState({
            currentUser: ""
        })
        
    }
    checkStatus(){
        if (!localStorage.getItem('authToken')){
          this.setState({
              status: "You are not Logged In!"
          })
        }
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
                            <li className={localStorage.getItem('authToken') ? 'hide' : 'show'}><Link to="/register_login" className="links--bar"> Login</Link></li>
                            <li onClick={this.checkStatus}><Link to={localStorage.getItem('authToken') ? '/library' : '#'} className="links--bar">Library</Link></li>
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
                            <li className={localStorage.getItem('authToken') ? 'hide' : 'show'}><Link to="/register_login" className="links--bar yoo"> Login</Link></li>
                            <li onClick={this.checkStatus}><Link to={localStorage.getItem('authToken') ? '/library' : '#'} className="links--bar yoo">Library</Link></li>
                            <li className={localStorage.getItem('authToken') ? 'show' : 'hide'} onClick={this.logOut}><Link to="/" className="links--bar yoo">Logout</Link></li>
                            
                        </ul>
                    </nav>
                </div>

                <div className="header__greet">
                    <h3 className="greet--header">Welcome {this.state.currentUser}</h3>
                    <h3 className="status">{this.state.status}</h3>
                    <SearchBar />
                </div>
            </div>
        )
    }
    
}

export default Header;