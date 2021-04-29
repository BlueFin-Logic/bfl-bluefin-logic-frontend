import React, {Component} from 'react';

import './App.scss'

import Home from "./pages/Home/Home";
import Header from "./components/desktop/Header/Header";
import Navigator  from "./components/desktop/Navigator/Navigator";
import MobileNavigator  from "./components/mobile/Navigator/Navigator";
import About from "./pages/About/About";
import OurTech from "./pages/OurTech/OurTech";
import Quote from "./pages/Quote/Quote";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/desktop/Footer/Footer";
import ScrollTop from "./components/desktop/ScrollTop/ScrollTop";


class App extends Component {
  constructor() {
    super();

    this.state = {isMobile: false}
  }

  // componentDidMount() {
  //   window.addEventListener("resize", this.resize);
  //   this.resize();
  // }
  //
  // resize = () => {
  //   console.log(1, this.state.isMobile)
  //   console.log(2, window.innerWidth)
  //   // if (this.state.isMobile !== (window.innerWidth < 768))
  //   //   this.setState({isMobile: window.innerWidth < 768});
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.resize);
  // }

  render() {

    return (
      <div className="App">
        <Header/>
        <MobileNavigator />
        <Navigator/>
        <Home/>
        <About/>
        <OurTech/>
        <Quote/>
        <Contact/>
        <ScrollTop/>
        <Footer/>
      </div>
    );
  }

}

export default App;
