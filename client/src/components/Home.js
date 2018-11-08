import React, { Component } from "react";
import Anime from './Anime';
import Slideshow from "./Slideshow";
import './Anime.css';
import './Home.css';
import Header from './Header';

// import Video from './Video';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const animeList = [
    'Shingeki no Kyojin',
    'Death note',
    'Boku no Hero Academia',
    'Cowboy Bebop',
    'naruto',
    'one punch man',
    'hunter',
    'psycho pass',
    'samurai jack',
    'cardcaptor',
    'detective',
    'bleach'

]

class Animes extends Component {
constructor(props){
    super(props)
    this.state ={
        isLoggedIn: false
    }
}
componentDidMount(){
    
    if (localStorage.getItem('authToken')){
        this.setState({
            isLoggedIn: true
        });
    }
    
}
    render(){
        return (
            <div>

                <Header />

                <Slideshow />


                <div className="home__header">
                    <div className="header--img">
                    </div>
                    <div className="header--title">
                        <h1 className="title--main"> Okiniiri Anime </h1>
                        <p className="title--content">
                            Your home for Anime
                    </p>
                    </div>
                </div>
                
                <div className="container-fluid">
                <div className="animeList__container row justify-content-center">
                    {animeList.map((anime, index) => (
                        <div key={index}>
                            <Anime name={anime} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        )
    }

    


}

export default Animes;