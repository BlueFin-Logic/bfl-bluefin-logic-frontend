import React, {Component} from 'react';

import "./Contact.scss"
import ContactForm from "../../components/desktop/ContactForm/ContactForm";
import contactImage from "../../assets/contact.png"
import mobileContactImage from "../../assets/contact-mb.png"

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="contact-image-area">
          <img className="img-desktop" src={contactImage} alt="Contact"/>
          <img className="img-mobile" src={mobileContactImage} alt="Contact"/>
        </div>

        <div className="contact-form-area">
          <ContactForm/>
        </div>
      </div>
    );
  }
}

export default Contact;