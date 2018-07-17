import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import { Redirect } from 'react-router-dom';
import Header from './Header';
import jwtDecode from 'jwt-decode';
import './RegisterLogin.css';

class RegisterLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            isLoggedIn: false,
            error: ""
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
               
                return resp.json();
                
            })
            .then(res =>{
                if(res.status === 'Error'){
                    this.setState({
                        error: res.message
                    });
                }else{
                    return res
                }
            })
            .then(data =>{
                if(data){
                    this.saveToken(data)
                    this.setState({
                        isLoggedIn: true
                    });
                }
            })
            .catch(err =>{
                console.log('error',err.message)
            })
    }

    registerPostRequest(data){
        return this.handlePostData(data.url, data.post);
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/" />
        }

        return (

            <div>
            <Header/>
            <div className="container">
                    <h2 className="error_message">{this.state.error}</h2>
                    <div className="registerLogin">
                        <div className="registerLogin__login">
                            <Login registerPostRequest={this.registerPostRequest.bind(this)} />
                        </div>
                        <br />
                        <div className="registerLogin__register">
                            <Register registerPostRequest={this.registerPostRequest.bind(this)} />
                        </div>

                    </div>
            </div>
                
            
            </div>
        )
    }
}

export default RegisterLogin;