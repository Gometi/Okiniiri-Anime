import React, { Component } from "react";
import jwtDecode from 'jwt-decode';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            email: ""
        }
        this.userData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        this.userData = {
            url: '/api/login',
            post: this.state
        }
        
    }
    printToken(){
        
        const token = localStorage.getItem('authToken');
        const user = jwtDecode(token);
        console.log('token', user)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.registerPostRequest(this.userData);
    }

    render() {
        return (
            <div>
                <form action="/" onSubmit={this.handleSubmit}>
                    
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
                    <button type="submit">Login</button>
                    <button onClick={this.printToken} type="button">check token</button>
                </form>
                <div>
                </div>
            </div>
        )
    }
}

export default Login;