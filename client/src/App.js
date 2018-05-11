import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props)
    
    
  }


  render() {
    return (
      <div className="App">
      <Header />
       <Home/>
      </div>
    );
  }
}

export default App;
