import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AnimeDetails from './components/AnimeDetails';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    
    
  }


  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
          <Route path='/anime_details/:id' component={(props)=>(<AnimeDetails 
           id = {props.match.params.id}
           />)} />
          <Route exact path='/' component={Home} />
      </Switch>
      
      </div>
    );
  }
}

export default App;
