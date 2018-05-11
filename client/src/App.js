import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './components/Login.jsx';
// import '.components/User.jsx';
import { Link } from 'react-router-dom';


class User extends Component {
     // constructor(props){
     // super(props);
     // }

  render() {
    return (
      <div className="User">
        <div className="body">
          <div className="main">
            <h1> Code_de_la_Kraken </h1>
            <div> <img className="avatar" src="https://media.kitsu.io/anime/cover_images/1801/tiny.jpg?1519181875"></img></div>
            
              <ul>
                  
                  <li><Link to="/anime-details/:id">Naruto</Link>
                  <button type='submit'>remove</button> </li>
                  
                  <li><Link to="/anime-details/:id">One Piece</Link>
                  <button type='submit'>remove</button></li>
                 
                   <li><Link to="/anime-details/:id">Dragon Ball Z</Link>
                  <button type='submit'>remove</button></li>
                 
              </ul>
            </div>
          </div>
        </div>
    )
  }
}




export default User;
