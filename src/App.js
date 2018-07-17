import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// playlist and hours class
class Aggregate extends Component{
    render () {
        return(
          <div style={{width: '30vmax', display: 'inline-block'}}class="appHeader">
            some numbers
          </div>
        );
    }
}

// filter
class Filter extends Component{
  render () {
      return(
        <div>
          <input type="text"></input>
        </div>
      );
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header id="App-Title">
        <h1>Spotify Stats</h1>  
        </header>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
      </div>
    );
  }
}

export default App;
