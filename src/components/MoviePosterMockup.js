import React, { Component } from 'react';
import '../styles/MoviePosterMockup.css';

class MoviePosterMockup extends Component {
  render() {
    return(
      <div className="card">
        <img className="card-img-top" src="..." alt="Movie Website Mockup."></img>
        <div className="card-block">
          <h4 className="card-title">Movie Website Mockup</h4>
          <a href="https://github.com/stcaldwell/week-2-project" className="btn btn-primary">The Code</a>
          <a href="#" className="btn btn-primary">The Site</a>
        </div>
      </div>

    )
  }
}

export default MoviePosterMockup;
