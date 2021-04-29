import React, {Component} from 'react';

import "./input.scss"

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      invalidMessage: "",
    }
  }

  inputChange = (newValue) => {
    let {isRequired, isEmail, valueReturn} = this.props

    if (isRequired && !newValue) {
      return this.setState(prevState => {
        return {
          ...prevState,
          invalidMessage: "Should have value"
        }
      })
    }

    if (isEmail) {
      let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

      if (!emailRegex.test(newValue)) {
        return this.setState(prevState => {
          return {
            ...prevState,
            invalidMessage: "Invalid Email"
          }
        })
      }
    }

    valueReturn(newValue)
    this.setState(prevState => {
      return {
        ...prevState,
        value: newValue.value,
        invalidMessage: ''
      }
    })
  }

  render() {
    let {placeholder, type, isRequired} = this.props
    let {invalidMessage} = this.state
    let errorClass = invalidMessage ? "error" : ''

    return (
      <React.Fragment>
        <input
          className={`input-container ${errorClass}`}
          placeholder={placeholder}
          type={type || "text"}
          required={isRequired}
          onBlur={$event => {
            this.inputChange($event.target.value)
          }}
        />

        <span className={`content-${errorClass}`}>
          {invalidMessage}
        </span>
      </React.Fragment>
    );
  }
}

export default Input;