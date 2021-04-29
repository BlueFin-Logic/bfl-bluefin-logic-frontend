import React, {Component} from 'react';

import './Home.scss'
import homeMobileImage from "../../assets/home-mb.png"

class Home extends Component {
  render() {
    return (
      <div id="home" className="home-container">
        <div className="home-title-area">
          <p className="home-title">
            Introducing BlueFin Logic
          </p>
          <p className="home-sub-title">
            Practical Solutions
          </p>
        </div>

        <div className="home-background-area">
          <div className="home-background-image" />
          <img src={homeMobileImage} alt="Home"/>
        </div>
      </div>
    );
  }
}

export default Home;