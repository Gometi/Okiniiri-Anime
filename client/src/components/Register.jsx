import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
        this.setState({
            [name]: value
        });
         this.userData = {
              url: '/api/register',
              post: this.state
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.registerPostRequest(this.userData);
    }

    render() {
        return (

            <div className="register">
                <form  className="register__form" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="register__label" >Username: 
                            <br/>
                            <input required className="register__input" type="text" onChange={this.handleInputChange} value={this.state.username} name="username" />
                        </label>
                    </div>
                    <div>
                        <label className="register__label">Email:
                            <br/>
                            <input required className="register__input" type="email" onChange={this.handleInputChange} value={this.state.email} name="email" />
                        </label>
                    </div>
                    <div>
                        <label className="register__label">Password:
                            <br/>
                            <input required className="register__input" type="password" onChange={this.handleInputChange} value={this.state.password} name="password" />
                        </label>
                    </div>
                    <button className="register__btn">register</button>
                </form>
            </div>
        )
    }
}

export default Register;