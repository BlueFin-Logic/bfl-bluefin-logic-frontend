import React, {Component} from 'react';

import './Navigator.scss'
import NavigatorItem from "./NavigatorItem/NavigatorItem";

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigatorItems: [
        {id: 1, name: 'Home', anchor: '#home',},
        {id: 2, name: 'About Us', anchor: '#about',},
        {id: 3, name: 'Our Technology', anchor: '#our-tech',},
        {id: 4, name: 'Quote', anchor: '#quote',},
        {id: 5, name: 'Contact', anchor: '#contact',},
      ]
    }
  }

  render() {
    let {navigatorItems} = this.state

    return (
      <div className="navigator-container">
        {
          navigatorItems.map(item =>
            <NavigatorItem key={item.id} name={item.name} anchor={item.anchor}/>
          )
        }
      </div>
    );
  }
}

export default Navigator;