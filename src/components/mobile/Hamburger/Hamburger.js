import React, {Component} from 'react';

import "./Hamburger.scss"

class Hamburger extends Component {

  render() {
    let {isActive} = this.props,
      topClass = null,
      middleClass = null,
      bottomClass = null;

    if (isActive) {
      topClass = 'top-active'
      middleClass = 'middle-active'
      bottomClass = 'bottom-active'
    }

    return (
      <div onClick={this.props.displayNavigator} className="hamburger-container">
        <div className={topClass}/>
        <div className={middleClass}/>
        <div className={bottomClass}/>
      </div>
    );
  }
}

export default Hamburger;