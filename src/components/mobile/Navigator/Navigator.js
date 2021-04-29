import React, {Component} from 'react';

import "./Navigator.scss"
import Hamburger from "../Hamburger/Hamburger";
import NavigatorItem from "../../mobile/Navigator/NavigatorItem/NavigatorItem";

class Navigator extends Component {
  constructor() {
    super();

    this.state = {
      isDisplay: false,
      navigatorItems: [
        {id: 1, name: 'Home', anchor: '#home',},
        {id: 2, name: 'About Us', anchor: '#about',},
        {id: 3, name: 'Our Technology', anchor: '#our-tech',},
        {id: 4, name: 'Quote', anchor: '#quote',},
        {id: 5, name: 'Contact', anchor: '#contact',},
      ]
    }
  }

  displayNavigator = () => {
    this.setState( prevState => {
      return {
        isDisplay: !prevState.isDisplay
      }
    })
  }

  render() {
    let {isDisplay, navigatorItems} = this.state

    let activeClass = ''
    if (isDisplay) activeClass = 'active'

    return (
      <div className="mobile-navigator-container">
        <Hamburger isActive={isDisplay} displayNavigator={this.displayNavigator} />

        <div className={`navigator-modal ${activeClass}`}>
          {
            navigatorItems.map(item =>
              <NavigatorItem
                key={item.id}
                displayNavigator={this.displayNavigator}
                name={item.name}
                anchor={item.anchor}/>
            )
          }
        </div>
      </div>
    );
  }
}

export default Navigator;