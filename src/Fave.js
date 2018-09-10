import React, { Component } from 'react';

class Fave extends Component {

  constructor(){
    super()

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      isFave: false
    }
  }

  handleClick = e => (
    e.stopPropagation(),
    console.log("handling Fave click"),
    this.setState({isFave: !this.state.isFave})
    )

  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    return (
      <div className="film-row-fave {isFave}" onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}

export default Fave;