import React from "react";
import Anime from './Anime';
import Slideshow from "./Slideshow";
import './Anime.css';
import './Home.css';

// import Video from './Video';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const animeList = [
    'violet',
    'lucky star',
    'naruto',
    'one piece',
    'hunter',
    'dears',
    'x',
    'cardcaptor',
    'detective',
    'bleach'

]

function Animes(props) {

    return (
        <div>
            <Slideshow/>

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
           
           <div className="animeList__container">
            {animeList.map((anime, index) => (
                <div className="anime__list" key={index}>
                    <Anime name={anime} />
                </div>
            ))}
            </div>
        </div>
    )


}

export default Animes;