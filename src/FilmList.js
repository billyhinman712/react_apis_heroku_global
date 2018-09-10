import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB.js';

class FilmList extends Component {
  render() {
  	const allFilms = TMDB.films.map( (film, index) => ( 
  		<div className="film-row">
  			<img src={posterUrl} alt="" />
  			<div className="film-summary">
  				<h1>{film.title}</h1>
  				<p>{film.release_date}</p>
  			</div>
  		</div> ));
    return (
      <div className="App">
        <h1>{allFilms}</h1>
      </div>
    );
    let posterUrl = "https://image.tmdb.org/t/p/w780/" + {film.poster_path}
  }
}

export default FilmList;