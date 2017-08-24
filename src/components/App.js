import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';


class App extends Component {
  render() {
    return (
      <div className="overallContainer">
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
