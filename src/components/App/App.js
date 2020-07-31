import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <p>Movie Saga</p>
          <Route exact path="/" component={MovieList} />
        </Router>
      </div>
    );
  }
}

export default App;
