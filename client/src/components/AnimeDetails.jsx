import React, { Component } from "react";
import './AnimeDetails.css';
import Header from './Header';
import UserReview from './UserReview';
import AddRemoveAnime from "./AddRemoveAnime";

import jwtDecode from 'jwt-decode';

class AnimeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            posterImage: require("./images/loading.gif"),
            synopsis: "",
            coverImage: require("./images/loading.gif"),
            Japanese: "",
            showType: "",
            status: "",
            episodeCount: "",
            startDate: "",
            endDate: "",
            rating: "",
            trailer: "",
            anime: "Not Added To Library",
            streamingLink1: "",
            streamingLink2: "",
            streamingLink3: "",
            streamer1: "",
            streamer2: "",
            streamer3: "",
            review: "",
            show: false

        }

        this.link = "https://www.youtube.com/embed/";

        this.handleInputChange = this.handleInputChange.bind(this);
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

                this.fetchStreamingLinks();
            })
            .catch(err => console.log(`There is an error: ${err}`));

    }

    fetchStreamingLinks() {
        fetch(`https://kitsu.io/api/edge/anime/${this.state.id}/streaming-links`

        )
            .then(resp => {
                if (!resp.ok) {
                    throw Error('oops: ', resp.message);
                }
                return resp.json();
            }).then(link => {
                this.setState({
                    streamingLink1: link.data[0].attributes.url,
                    streamingLink2: link.data[1].attributes.url,
                    streamingLink3: link.data[2].attributes.url

                })
                this.fetchStreamer('streamer1', link.data[0].relationships.streamer.links.related);
                this.fetchStreamer('streamer2', link.data[1].relationships.streamer.links.related);
                this.fetchStreamer('streamer3', link.data[2].relationships.streamer.links.related);
            })
            .catch(err => console.log(`There is an error: ${err}`));
    }

    fetchStreamer(streamer, url) {
        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw Error('oops: ', resp.message);
                }
                return resp.json();
            }).then(link => {
                this.setState({
                    [streamer]: link.data.attributes.siteName
                })
            })
            .catch(err => console.log(`There is an error: ${err}`));
    }

    getUser() {
        let user = "";
        if (localStorage.getItem('authToken')) {
            user = jwtDecode(localStorage.getItem('authToken'));
            return user;
        }
    }




    componentDidMount() {
        this.fetchAnime();
    }



    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }





    // toggle the trailer
    display() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="details">
                <Header />
                <div className="details__header">
                    <img className="details--img" src={this.state.coverImage} alt="details" />
                    <h2 className="details--head">{this.state.name}</h2>
                    <div className="details--overlay"></div>
                </div>



                <div className="details__info">
                    <div className="info--syn">
                        <p>{this.state.synopsis}</p>
                    </div>

                    <div className="info--list">
                        <img className="details__pic" src={this.state.posterImage} alt="poster" />
                        <h3 className="list--head">Anime Details</h3>
                        <p>English: {this.state.name}</p>
                        <p>Japanese: {this.state.Japanese}</p>
                        <p>Type: {this.state.showType}</p>
                        <p>Episodes: {this.state.episodeCount}</p>
                        <p>Status: {this.state.status}</p>
                        <p>Rating: {this.state.rating}</p>

                        <div className="streaming">
                            <p>Streaming Links:</p>
                            <div>
                                <a href={this.state.streamingLink1}><h4>{this.state.streamer1}</h4></a>
                            </div>
                            <div>
                                <a href={this.state.streamingLink2}><h4>{this.state.streamer2}</h4></a>
                            </div>
                            <div>
                                <a href={this.state.streamingLink3}><h4>{this.state.streamer3}</h4></a>
                            </div>
                        </div>

                        <button onClick={this.display} className="details--watch"> Watch trailer  </button>


                    </div>
                </div>

                <div>

                    <div className="details--video">

                        {
                            this.state.show ? <div className="container embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" title="trailer"
                                src={this.link + this.state.trailer}>
                            </iframe></div> : null
                        }

                        <div>
                            <br />
                            <AddRemoveAnime id={this.state.id} anime_name={this.state.name} />
                        </div>
                    </div>

                    <div>

                        <UserReview id={this.props.id} />

                    </div>
                </div>
            </div>
        )
    }

}

export default AnimeDetails;