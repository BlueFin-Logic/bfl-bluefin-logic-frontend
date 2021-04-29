import React, {Component} from 'react';

import './NavigatorItem.scss'

class NavigatorItem extends Component {
  render() {
    let {name, anchor} = this.props

    return (
      <a className="navigator-item-container" href={anchor}>
        {name}
      </a>
    );
  }
}

export default NavigatorItem;