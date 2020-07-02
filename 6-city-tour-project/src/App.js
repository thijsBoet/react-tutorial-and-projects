import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList/TourList'

import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <TourList/>
      </>
    );
  }
}

export default App;
