import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  state = {};
}

const mapStoreToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStoreToProps)(MovieList);
