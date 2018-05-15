import React, { Component } from "react";

import { Link } from "react-router-dom";

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
        const input = document.getElementById('search');
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
            <div>
                <form action={this.url + this.state.anime}>
            <input id="search" type="text" name="anime" value={this.state.anime} onChange={this.handleInputChange} />
            <button id="buttonClick"  type="buttom">Search</button>
            </form>
            </div>
        )
    }
}

export default SearchBar;