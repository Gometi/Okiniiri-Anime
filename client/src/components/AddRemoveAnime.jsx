import React, { Component } from "react";
import './AnimeDetails.css';
import jwtDecode from 'jwt-decode';

class AddRemoveAnime extends Component{
    constructor(props){
        super(props)
        this.state = {
            inLibrary: false,
            animeList: []
        }
        this.add = "Add To Library";
        this.remove = "Remove From Library";
        this.addToLibrary = this.addToLibrary.bind(this);
        this.removeFromLibrary = this.removeFromLibrary.bind(this);
    }
    getUser() {
        let user = "";
        if (localStorage.getItem('authToken')) {
            user = jwtDecode(localStorage.getItem('authToken'));
            return user;
        }
    }

    fetchUserAnimes() {
       
        let user = "";
            user = jwtDecode(localStorage.getItem('authToken'));
            fetch(`/animes/${user.id}`)
                .then(resp => {
                    if (!resp.ok) throw new Error(resp.statusMessage);
                    return resp.json();
                })
                .then(data => {
                    this.setState({
                        animeList: data.data
                    })
                    setTimeout(() => {
                        this.state.animeList.map(anime => {
                            if (this.props.anime_name === anime.anime_name) {
                                this.setState({
                                    inLibrary: true
                                })
                            }
                            return null;
                        })
                    }, 500);
                    
                })
        
    }

    addToLibrary() {
        let data = {};
        if (!localStorage.getItem("authToken")) {
            alert('You Are Not Logged In!!')
        }
        else {
            if(!this.state.inLibrary){
                data = {
                    anime_id: this.props.id,
                    anime_name: this.props.anime_name,
                    user_id: this.getUser().id
                }
                const animeData = JSON.stringify(data);
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: animeData
                }
                fetch('/animes', options)
                    .then(resp => {
                        if (!resp.ok) throw new Error(resp.statusMessage);
                        return resp.json();
                    })
                    .then(data => {
                        (data) ? console.log('added to library') : console.log('Could not add to library')
                        this.setState({
                            inLibrary: true
                        })
                    })
            }
      
        }

    }

    removeFromLibrary() {
            const options = {
                method: "DELETE"
            }
            fetch(`/animes/${this.props.id}`, options)
                .then(resp => {
                    if (!resp.ok) throw new Error(resp.statusMessage);
                    return resp.json();
                })
                .then(()=>{
                    console.log('deleted')
                    this.setState({
                        inLibrary: false
                    })
                })


    }

    
    componentDidMount(){
        if (localStorage.getItem('authToken')){
            this.fetchUserAnimes();
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.state.inLibrary ? this.removeFromLibrary : this.addToLibrary} className="details--add">{this.state.inLibrary  ? this.remove : this.add}</button> 
            </div>
        )
    }
}
export default AddRemoveAnime;