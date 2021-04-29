import React, {Component} from 'react';

import "./Quote.scss"
import quoteImage from "../../assets/quote.png"

class Quote extends Component {
  render() {
    return (
      <div id="quote" className="quote-container">
        <div className="quote-content-area">
          <p className="quote-content">
            "The best way to predict the future is to create it"
          </p>

          <p className="quote-author">
            Abraham Lincoln
          </p>
        </div>

        <div className="quote-image-area">
          <img src={quoteImage} alt="The best way to predict the future is to create it"/>
        </div>
      </div>
    );
  }
}

export default Quote;