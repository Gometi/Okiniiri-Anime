import React, { Component } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/fontawesome-free-solid';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            anime: ""
        }
        
        this.url = "/search/"
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    enterKeyPressed(){
        const input = document.getElementById('form__input');
        input.addEventListener("keyup", function(e) {
            e.preventDefault();
            if(e.keyCode === 13){
                document.getElementById('buttonClick').click();
            }
        })

    }
    componentDidMount(){
        this.enterKeyPressed();
    }

    render(){
        return(
            <div className="form">
                <form action={this.url + this.state.anime}>

                    <input id="form__input" type="text" name="anime" value={this.state.anime} onChange={this.handleInputChange} />
                    <button id="buttonClick" onClick={this.handleSubmit} type="buttom"> <FontAwesomeIcon icon={faSearch} /> </button>
                </form>

                
            </div>
        )
    }
}

export default SearchBar;