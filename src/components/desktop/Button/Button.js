import React, {Component} from 'react';

import './Button.scss'

class Button extends Component {
  render() {
    let {btnName, btnClass, clickHandler} = this.props

    return (
      <button onClick={clickHandler} className={`button-container ${btnClass}`} >
        {btnName}
      </button>
    );
  }
}

export default Button;