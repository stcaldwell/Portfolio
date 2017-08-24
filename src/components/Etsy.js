import React, { Component } from 'react';
import '../styles/Etsy.css';

class Etsy extends Component {
  render() {
    return(
      <div className="card">
        <img className="card-img-top" src="..." alt="Etsy clone I helped to create."></img>
        <div className="card-block">
          <h4 className="card-title">Etsy Clone</h4>
          <a href="https://github.com/TIY-Etsy-Project/TIY-Etsy-Final" className="btn btn-primary">The Code</a>
          {/* <a href="#" className="btn btn-primary">The Site</a> */}
        </div>
      </div>

    )
  }
}

export default Etsy;
