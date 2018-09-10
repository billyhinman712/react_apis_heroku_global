import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {

  handleDetailsClick = film => (console.log("fetching details for" + film))

  render() {
    const {poster, title} = this.props
    const date = new Date(this.props.date);
    return(
      <div className="film-row" onClick={() => this.handleDetailsClick('film')}>
        <FilmPoster poster={poster} />

        <div className="film-summary">
          <Fave />
          <h1>{title}</h1>
          <p>{date.getFullYear()}</p>
        </div>
      </div>
    )
  }
}