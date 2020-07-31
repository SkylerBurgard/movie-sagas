import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
  state = {};
}

const mapStoreToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStoreToProps)(Detail);
