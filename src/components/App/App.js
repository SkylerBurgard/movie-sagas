import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIE' });
  }
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
const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(App);
