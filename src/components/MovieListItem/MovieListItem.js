import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListItem extends Component {
  state = {};
}

const mapStoreToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStoreToProps)(MovieListItem);
