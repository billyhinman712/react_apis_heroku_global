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
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;