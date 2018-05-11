import React, {Component} from 'react';

class Anime extends Component{
    constructor(props){
        super(props)
        this.name = this.props.name;
        this.name = this.name.replace(" ", "%20");
       this.state = {
           name: "",
           posterImage: ""
       }
    }
    fetchAnime() {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${this.name}`
            
        )
            .then(resp => {
                if (!resp.ok) {
                    throw Error('oops: ', resp.message);
                }
                return resp.json();
            }).then(data => {
               console.log(data);
                console.log(data.data[0].attributes.titles.en_jp)
               this.setState({
                   name: data.data[0].attributes.titles.en_jp,
                   posterImage: data.data[0].attributes.posterImage.small
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
             <img src={this.state.posterImage} />
            </div>
        )
    }
}

export default Anime;