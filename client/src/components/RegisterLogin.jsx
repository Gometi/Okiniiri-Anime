import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

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



    handlePostData(data) {
        const userData = JSON.stringify(data);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        }
        fetch('/register', options)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusMessage);
                return resp.json();
            })
            .then(data => (data) ? console.log('register/login success') : console.log('register/login failure'))
    }

    registerPostRequest(data){
        const url = data.url;
        this.handlePostData(data.post);
    }

    render() {
        return (
            <div>
                <div>
                    <Register registerPostRequest={this.registerPostRequest.bind(this)} />
                </div>
                <div>
                    <Login registerPostRequest={this.registerPostRequest.bind(this)} />
                </div>



            </div>
        )
    }
}

export default RegisterLogin;