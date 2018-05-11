import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Anime extends Component{
    constructor(props){
        super(props)
        this.name = this.props.name;
        this.name = this.name.replace(" ", "%20");
       this.state = {
           id: "",
           name: "",
           posterImage: ""
       }
        this.link = '/anime_details/'
    }
    fetchAnime() {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${this.name}`
            
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
                   posterImage: anime.data[0].attributes.posterImage.small
               })
            })
            .catch(err => console.log(`There is an error: ${err}`));

    }
    componentDidMount(){
        this.fetchAnime()
    }

    render(){
        return(
            <div>
             
             <p>{this.state.name}</p>
             <Link to={this.link + this.state.id}><img src={this.state.posterImage} /></Link>
            </div>
        )
    }
}

export default Anime;