import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Weather from './components/pages/Weather';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Route path="/" exact={true} component={Home} ></Route>
            <Route path="/weather" exact={true} component={Weather} ></Route>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
