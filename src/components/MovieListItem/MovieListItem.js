import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.movies.poster} />
        <h3>{this.props.movies.title}</h3>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieListItem);
