import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import './SearchBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/fontawesome-free-solid';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            anime: "",
            search: false
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

handleSubmit(e){
    e.preventDefault();
    
    this.setState({
            search: true
        });
}

    
    componentDidMount(){
    }

    render(){
        if(this.state.search){
            return <Redirect to={this.url + this.state.anime}/>
        }

        return(
            <div className="form">
                <form  onSubmit={this.handleSubmit.bind(this)}>

                    <input id="form__input" required type="text" name="anime" placeholder="Enter the name of an Anime"  value={this.state.anime} onChange={this.handleInputChange} />
                    <button id="buttonClick" > <FontAwesomeIcon icon={faSearch} /> </button>
                </form>

                
            </div>
        )
    }
}

export default SearchBar;