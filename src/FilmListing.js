import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  constructor(){
    super()

    // This binding is necessary to make `this` work in the callback
    this.handleFilterClick = this.handleFilterClick.bind(this)

    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick = filter => (
    this.setState({filter: filter}),
    console.log("Setting filter to" + filter)
    )

  render() {
    const favesOn = this.state.filter === 'all' ? '' : 'is-active'
    const allOn = this.state.filter === 'all' ? 'is-active' : ''
    return(
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div className={`film-list-filter ${allOn}`} onClick={() => this.handleFilterClick('all')}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className={`film-list-filter ${favesOn}`} onClick={() => this.handleFilterClick('faves')}>
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