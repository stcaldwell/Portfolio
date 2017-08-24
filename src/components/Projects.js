import React, { Component } from 'react';
import Etsy from './Etsy.js';
import Soundcloud from './Soundcloud.js';
import MoviePosterMockup from './MoviePosterMockup.js';

class Projects extends Component {
  render() {
    return(
      <div>
        <Etsy />
        <Soundcloud />
        <MoviePosterMockup />
      </div>
    )
  }
}

export default Projects;
