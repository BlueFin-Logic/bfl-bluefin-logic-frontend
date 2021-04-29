import React, {Component} from 'react';

import "./ContactForm.scss"
import Button from "../Button/Button";
import Input from "../Input/Input";

import sendEmail from "../../../services/sendEmail";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }

  validate = async e => {
    e.preventDefault()
    let {name, email, subject} = this.state

    if (!name || !email || !subject)
      return console.log("Invalid value")

    let response = await sendEmail(this.state)
    if (response && response.data && response.data.message && response.data.message == "Done!") {
      return alert("Thank you for your message.")
    }
  }

  updateName = (newValue) => {
    this.setState(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    })
  }

  updateEmail = (newValue) => {
    this.setState(prevState => {
      return {
        ...prevState,
        email: newValue
      }
    })
  }

  updateSubject = (newValue) => {
    this.setState(prevState => {
      return {
        ...prevState,
        subject: newValue
      }
    })
  }

  updateMessage = (newValue) => {
    this.setState(prevState => {
      return {
        ...prevState,
        message: newValue.value
      }
    })
  }

  render() {
    return (
      <div className="contact-form-container">
        <p className="contact-form-title">
          Get In Touch
        </p>

        <div className="input-group">
          <div className="input-name">
            <Input
              placeholder="Your name"
              type="text"
              isRequired={true}
              valueReturn={this.updateName}
            />
          </div>

          <div className="input-email">
            <Input
              placeholder="Your Email"
              type="text"
              isRequired={true}
              isEmail={true}
              valueReturn={this.updateEmail}
            />
          </div>

          <div className="input-subject">
            <Input
              placeholder="Subject"
              type="text"
              isRequired={true}
              valueReturn={this.updateSubject}
            />
          </div>

          <div className="input-message">
            <textarea
              required
              name="message"
              rows="4"
              placeholder="Your message"
              onBlur={e => {
                this.updateMessage(e.target)
              }}
            />
          </div>

          <Button
            btnName="Submit"
            btnClass="full-width lg secondary"
            clickHandler={this.validate}
          />
        </div>
      </div>
    );
  }
}

export default ContactForm;