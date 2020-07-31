import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  state = {};
}

const mapStoreToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStoreToProps)(Edit);
