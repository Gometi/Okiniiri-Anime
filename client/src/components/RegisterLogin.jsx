import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

import Header from './Header';
import jwtDecode from 'jwt-decode';
import './RegisterLogin.css';

class RegisterLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

 

 saveToken(respBody) {
     console.log("token", respBody)
    localStorage.setItem('authToken', respBody.token)
    const user = jwtDecode(respBody.token);
    return user;
}

    handlePostData(url, data) {
       
        const userData = JSON.stringify(data);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        }
        fetch(url, options)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusMessage);
                return resp.json();
            })
            .then(this.saveToken)
    }

    registerPostRequest(data){
        this.handlePostData(data.url, data.post);
    }

    render() {
        return (

            <div>
            <Header/>
                
            <div className="registerLogin">
                <div className="registerLogin__register">
                    <Register registerPostRequest={this.registerPostRequest.bind(this)} />
                </div>
                <br/>
            
                <div className="registerLogin__login">
                    <Login registerPostRequest={this.registerPostRequest.bind(this)} />
                </div>
            </div>
            </div>
        )
    }
}

export default RegisterLogin;