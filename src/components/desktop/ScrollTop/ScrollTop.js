import React, {Component} from 'react';

import "./ScrollTop.scss"

class ScrollTop extends Component {
  render() {
    return (
      <div className="scroll-top-container">
        <a href="#header">&nbsp;&uarr;&nbsp;</a>
      </div>
    );
  }
}

export default ScrollTop;