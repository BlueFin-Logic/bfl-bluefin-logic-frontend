import React, {Component} from 'react';

import './OurTech.scss'

class OurTech extends Component {
  render() {
    return (
      <div id="our-tech" className="our-tech-container">
        <div className="our-tech-content-area">
          <p className="our-tech-title">
            Our Technology
          </p>

          <p className="our-tech-content">
            Advanced Solutions
          </p>

          <p className="our-tech-content">
            Smart solutions are at the core of all that we do at BlueFin Logic. Our main goal is finding smart ways of
            using technology that will help build a better tomorrow for everyone, everywhere. Click below to learn more
            about the technology behind our Software Startup, or get in touch to set up a meeting with one of our
            representatives.
          </p>
        </div>
        <div className="cover"/>
      </div>
    );
  }
}

export default OurTech;