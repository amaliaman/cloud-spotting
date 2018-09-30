import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>CloudSpotting</h1>
        <span>Level {this.props.level}</span>
      </div>
    )
  }
}

export default Nav;