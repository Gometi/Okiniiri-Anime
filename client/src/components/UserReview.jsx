
import React, { Component } from "react";
import jwtDecode from 'jwt-decode';
import './UserReview.css';

class UserReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            review: "",
            anime_name: "",
            user_id: "",
            getReview: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    getUser() {
        let user = "";
        if (localStorage.getItem('authToken')) {
            user = jwtDecode(localStorage.getItem('authToken'));
            return user;
        }
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
                    review: this.state.review,
                    anime_name: anime.data[0].attributes.titles.en_jp,
                    user_id: this.getUser().id
                })
                console.log('review cOMP', this.state)
                this.fetchUserReview()

            })
            .catch(err => console.log(`There is an error: ${err}`));

    }


    fetchUserReview() {
        let data = {
            anime_name: this.state.anime_name,
            user_id: this.getUser().id
        }


        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch('/reviews/user_review', options)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusMessage);
                return resp.json();
            })
            .then(response => {
                if(response.length > 0){
                    this.setState({
                        review: response[0].review,
                        getReview: true
                    })
                }
                
            });
    }

    createReview() {
        let reviewData = {
            review: this.state.review,
            anime_name: this.state.anime_name,
            user_name: this.getUser().username,
            user_id: this.getUser().id
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        }
        fetch('/reviews', options)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusMessage);
                return resp.json();
            })
            .then(response => {
                this.fetchUserReview();
                console.log(response)});
    }

    updateReview(){
        let reviewData = {
            review: this.state.review,
            anime_name: this.state.anime_name,
            user_name: this.getUser().username,
            user_id: this.getUser().id
        }

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        }
        fetch('/reviews/user_review', options)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusMessage);
                return resp.json();
            })
            .then(response => {
                this.fetchUserReview();
                console.log('updated review',response)});
    }

    create(e) {
        e.preventDefault();
        if (localStorage.getItem('authToken')) this.createReview();
    }

    update(e){
     e.preventDefault();
        if (localStorage.getItem('authToken')) this.updateReview();
        document.getElementById('editReview').classList.add('hideReview')
    }
    showEditForm(){
        document.getElementById('editReview').classList.add('showReview')
    }

    componentDidMount() {
        if (localStorage.getItem('authToken')) {
            this.fetchAnime();
        }
    }

    render() {
        return (
            <div className="review">
                <h3 className="review__header"> {localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')).username +"'s" : 'User'} Review</h3>
                <h4 className={this.state.getReview ? 'showReview' : 'hideReview'}>{(this.state.review) && this.state.review}</h4>
                <form id="editReview" className={this.state.getReview ? 'hideReview' : 'showReview' }>
                <h5 className="review__review">Write Review</h5>
                    <textarea className="review__textArea" name="review" value={this.state.review} onChange={this.handleInputChange}></textarea>
                        <br/>
                        <button className="review__save" onClick={this.state.getReview ? this.update : this.create}>Save</button>
                        
                </form>
                <button className="review__edit" onClick={this.showEditForm}>Edit Review</button>
            </div>
        )
    }

}


export default UserReview;