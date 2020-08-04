import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Detail from '../Detail/Detail';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIE' });
  }
  render() {
    return (
      <div className="App">
        <h1>Movie Saga</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Router>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(App);
