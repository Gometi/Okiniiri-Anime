import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';
class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state = {
            animeList: []
        }

        this.link = '/anime_details/'
    }

    fetchAnime() {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${this.props.anime}`

        )
            .then(resp => {
                if (!resp.ok) {
                    throw Error('oops: ', resp.message);
                }
                return resp.json();
            }).then(anime => {
                this.setState({
                    animeList: anime.data
                })
                console.log(this.state.animeList[0].attributes.titles.en_jp)
            })
            .catch(err => console.log(`There is an error: ${err}`));

    }

    componentDidMount(){
    this.fetchAnime();
    }

    

    render(){
        return(
            <div>
            <Header/>
                <h2>Search Results:</h2>
                {this.state.animeList.map(anime => (
                    <div key={anime.id}>
                        <Link to={this.link + anime.id}> 
                        <h3>{anime.attributes.titles.en_jp}</h3>
                            <img src={anime.attributes.posterImage.tiny} alt=""/>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default SearchResults;