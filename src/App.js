import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilmListing films={TMDB.films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;