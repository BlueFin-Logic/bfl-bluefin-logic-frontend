import React, {Component} from 'react';

import "./Header.scss"

class Header extends Component {
  render() {
    return (
      <div id="header" className="header-container">
        <a className="header-logo" href="#nav">BlueFin Logic</a>
        <hr className="header-separator"/>
      </div>
    );
  }
}

export default Header;