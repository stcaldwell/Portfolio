import React, { Component } from 'react';
import '../styles/Soundcloud.css';

class Soundcloud extends Component {
  render() {
    return(
      <div className="card">
        <img className="card-img-top" src="..." alt="Etsy clone I helped to create."></img>
        <div className="card-block">
          <h4 className="card-title">Find Your Sound</h4>
          <a href="https://github.com/stcaldwell/Week-4-SoundCloud" className="btn btn-primary">The Code</a>
          <a href="#" className="btn btn-primary">The Site</a>
        </div>
      </div>

    )
  }
}

export default Soundcloud;
