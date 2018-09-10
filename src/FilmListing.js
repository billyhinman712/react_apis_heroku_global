import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    return(
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {this.props.films.map(film => 
            <FilmRow 
              key={film.id}
              poster={film.poster_path}
              title={film.title} 
              date={film.release_date} 
            />)}
        </div>
      </div>
      )
  }
}

export default FilmListing;