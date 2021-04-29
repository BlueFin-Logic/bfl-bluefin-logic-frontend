import React, {Component} from 'react';
import Button from "../../components/desktop/Button/Button";

import './About.scss'

import aboutImage from "../../assets/about.png"

class About extends Component {

  getInTouch = (e) => {
    e.preventDefault()
    console.log("clicked")
  }

  render() {
    return (
      <div id="about" className="about-container">
        <div className="about-content-area">
          <p className="about-content-title">
            Who We Are
          </p>

          <p className="about-content">
            We’re a young and talented group of entrepreneurs and engineers with a groundbreaking idea designed to
            contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride
            ourselves on our unparalleled, dedicated service. At BlueFin Logic, we believe that the right understanding
            and technological edge can lead companies towards a successful future. Contact us today to set up a meeting
            with one of our sales representatives.
          </p>

          <Button
            btnName="Get In Touch"
            btnClass="rounded outlined lg"
            clickHandler={this.getInTouch}
          />
        </div>

        <div className="about-image-area"/>
        <img src={aboutImage} alt="About"/>

      </div>
    );
  }
}

export default About;