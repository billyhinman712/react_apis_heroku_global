import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmList />
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <FilmDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
