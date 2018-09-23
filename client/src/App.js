import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import AnimeDetails from './components/AnimeDetails';
import Library from './components/Library';
import RegisterLogin from './components/RegisterLogin';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Switch>
          <Route path='/anime_details/:id' component={(props)=>(<AnimeDetails 
           id = {props.match.params.id}
           />)} />
           <Route path='/search/:anime' component={(props)=>(
             <SearchResults anime = {props.match.params.anime} />
           )} />
           <Route path='/library'  component={Library} />
          <Route path='/register_login' component={RegisterLogin} />
          <Route exact path='/' component={Home} />
      </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
