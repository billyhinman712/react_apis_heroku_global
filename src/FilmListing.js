import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  handleFilterClick = filter => (console.log("Setting filter to" + filter))

  render() {
    return(
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div className="film-list-filter" onClick={() => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}>
              FAVES
              <span className="section-count">0</span>
            </div>
          </div>
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