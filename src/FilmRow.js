import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default class FilmRow extends Component {
  render() {
    const {poster, title} = this.props
    const date = new Date(this.props.date);
    return(
      <div className="film-row">
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