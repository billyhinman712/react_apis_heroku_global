import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmPoster from './FilmPoster';

class FilmList extends Component {
  render() {
  	const allFilms = TMDB.films.map( (film, index) => ( 
  		<div className="film-row">
  			<FilmPoster poster={film.poster_path} />
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
  }
}

export default FilmList;