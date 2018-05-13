import React, { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const userData = JSON.stringify(this.state);
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
            .then(data => (data) ? console.log('register success') : console.log('register failure'))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:
           <input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" />
                        </label>
                    </div>
                    <div>
                        <label>Email:
           <input type="email" onChange={this.handleInputChange} value={this.state.email} name="email" />
                        </label>
                    </div>
                    <div>
                        <label>Password:
           <input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" />
                        </label>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;