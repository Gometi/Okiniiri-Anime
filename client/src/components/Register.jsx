import React, { Component } from "react";
import './Register.css';



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
                username: "",
                password: "",
                email: ""
          
        }
        this.userData;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
         this.userData = {
              url: '/register',
              post: this.state
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.registerPostRequest(this.userData);
    }

    render() {
        return (
            <div className="register">
                <form className="register__form" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="register__label" >Username: 
                            <br/>
                            <input className="register__input" type="text" onChange={this.handleInputChange} value={this.state.username} name="username" />
                        </label>
                    </div>
                    <div>
                        <label className="register__label">Email:
                            <br/>
                            <input className="register__input" type="email" onChange={this.handleInputChange} value={this.state.email} name="email" />
                        </label>
                    </div>
                    <div>
                        <label className="register__label">Password:
                            <br/>
                            <input className="register__input" type="password" onChange={this.handleInputChange} value={this.state.password} name="password" />
                        </label>
                    </div>
                    <button className="register__btn" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;