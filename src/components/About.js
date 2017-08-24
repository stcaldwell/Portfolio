import React, { Component } from 'react';
import '../styles/About.css';




class About extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>About Me</h2>
            <p>Hi! I'm Samuel Thorne Caldwell or Sam for short. I am a Front End Web Developer currently working out of Durham, NC. I love clean, minimalist design. If you want to talk shop, contact me!</p>
          </div>
          <div className="col-sm-6">
            <div><a className="twitter-timeline" data-height="458" data-link-color="#005bb2" href="https://twitter.com/CaldNotCold">Tweets by CaldNotCold</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>
          </div>
        </div>
      </div>

    )
  }
}

export default About;
