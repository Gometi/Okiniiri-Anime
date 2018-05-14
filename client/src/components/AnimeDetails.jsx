import React, { Component } from "react";
import './AnimeDetails.css';
import { Button } from 'react-bootstrap';

class AnimeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            posterImage: "",
            synopsis: "",
            coverImage: "",
            Japanese: "",
            showType: "",
            status: "",
            episodeCount: "",
            startDate: "",
            endDate: "",
            rating: "",
            trailer: "",
            anime: "Not Added To Library",
            show: false

        }
        this.link = "https://www.youtube.com/embed/";
        this.addToLibrary = this.addToLibrary.bind(this);
        this.removeFromLibrary = this.removeFromLibrary.bind(this);
        this.display = this.display.bind(this);
    }

    fetchAnime() {
        fetch(`https://kitsu.io/api/edge/anime?filter[id]=${this.props.id}`

        )
            .then(resp => {
                if (!resp.ok) {
                    throw Error('oops: ', resp.message);
                }
                return resp.json();
            }).then(anime => {
                console.log(anime);
                console.log(anime.data[0].attributes.titles.en_jp)

                this.setState({
                    id: anime.data[0].id,
                    name: anime.data[0].attributes.titles.en_jp,
                    posterImage: anime.data[0].attributes.posterImage.small,
                    synopsis: anime.data[0].attributes.synopsis,
                    coverImage: anime.data[0].attributes.coverImage.large,
                    Japanese: anime.data[0].attributes.titles.ja_jp,
                    showType: anime.data[0].attributes.showType,
                    status: anime.data[0].attributes.status,
                    episodeCount: anime.data[0].attributes.episodeCount,
                    rating: anime.data[0].attributes.ageRatingGuide,
                    trailer: anime.data[0].attributes.youtubeVideoId
                })
            })
            .catch(err => console.log(`There is an error: ${err}`));

    }

    componentDidMount() {
        this.fetchAnime();
    }

    addToLibrary() {

        const anime = {
            id: this.state.id,
            name: this.state.name
        }
        this.props.addToLibrary(anime);
        this.setState({
            anime: "Added To Library"
        })
        // const data = {
        //     anime_id: this.state.id,
        //     anime_name: this.state.name
        // }

        // const animeData = JSON.stringify(data);
        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: animeData
        // }
        // fetch('/animes', options)
        //     .then(resp => {
        //         if (!resp.ok) throw new Error(resp.statusMessage);
        //         return resp.json();
        //     })
        //     .then(data => (data) ? console.log('added to library'): console.log('Could not add to library'))
    }

    removeFromLibrary(){
        const options = {
            method: "DELETE"
        }
        fetch(`/animes/${this.state.id}`, options)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusMessage);
                return resp.json();
            })
            .then(console.log('deleted'))
    }

    // toggle the trailer
    display(){
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="details">
                <div className="details__header">
                    <img className="details--img" src={this.state.coverImage} />
                    <h2 className="details--head">{this.state.name}</h2>
                    <div className="details--overlay"></div>
                </div>
        
                

                <div className="details__info">
                    <div className="info--syn">
                        <p>{this.state.synopsis}</p>
                    </div>
                    
                    <div className="info--list">
                        <img className="details__pic" src={this.state.posterImage} />
                        <h3 className="list--head">Anime Details</h3>
                        <p>English: {this.state.name}</p>
                        <p>Japanese: {this.state.Japanese}</p>
                        <p>Type: {this.state.showType}</p>
                        <p>Episodes: {this.state.episodeCount}</p>
                        <p>Status: {this.state.status}</p>
                        <p>Rating: {this.state.rating}</p>
                        <button onClick={this.display} className="details--watch"> Watch trailer  </button>
                    </div>
                 </div>
        
                <div>
                    
                <div className="details--video">
                    
                    {
                        this.state.show?<iframe title="trailer" width="420" height="315"
                        src={this.link + this.state.trailer}>
                        </iframe>:null
                    }
                    
                    <div>
                        <button onClick={this.addToLibrary} className="details--add">Add To Watch List</button>
                        <button onClick={this.removeFromLibrary} className="details--remove">Remove From Watch List</button>
                        <div className="add_indicator">
                             <p>{this.state.name} {this.state.anime}</p> 
                        </div>
                     
                            
                    </div>
                
                </div>
                    
                    
                </div>
            </div>
        )
    }

}

export default AnimeDetails;