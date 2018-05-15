import React, { Component } from "react";

import Anime from "./Anime";
import Header from './Header';
import jwtDecode from 'jwt-decode';

class Library extends Component{
   constructor(props){
       super(props)
       this.state = {
           id: "",
           name:"",
           animeList: []
       }
       this.removeAnimes = this.removeAnimes.bind(this)
       
   }
    getUser() {
        let user = "";
        if (localStorage.getItem('authToken')) {
            user = jwtDecode(localStorage.getItem('authToken'));
            return user;
        }
    }

   fetchAnimes(){
       let user_id = this.getUser().id;
       fetch(`/animes/${user_id}`)
           .then(resp => {
               if (!resp.ok) throw new Error(resp.statusMessage);
               return resp.json();
           })
           .then(data => this.setState({
               animeList: data.data
           }))
   }

   removeAnimes(id){
       const options = {
           method: "DELETE"
       }
       fetch(`/animes/${id}`, options)
           .then(resp => {
               if (!resp.ok) throw new Error(resp.statusMessage);
               return resp.json();
           })
           .then(console.log('deleted'))
   
   }

   componentDidMount(){
       this.fetchAnimes();
   }
   

   render(){
       return(
           <div>
           <Header/>
              <h1>Library</h1>
               {this.state.animeList.map((anime, index) => (
                   <div key={index}>
                       <Anime name={anime.anime_name} />
                      
                   </div>
               ))}
           </div>
       )
   }
}

export default Library;