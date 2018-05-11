import React from "react";
import Anime from './Anime';
import Slideshow from "./Slideshow";

const animeList = [
    'bleach',
    'naruto',
    'one piece',
    'my hero academia'
]
function Animes(props) {

    return (
        <div>

            <Slideshow />
            {animeList.map((anime, index) => (
                <div key={index}>
                    <Anime name={anime} />
                </div>
            ))}


        </div>
    )


}

export default Animes;