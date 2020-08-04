import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch({
      type: 'GET_MOVIE_DETAIL',
      payload: this.props.match.params.id,
    });
  }
  render() {
    return (
      <div>
        <h1>Detail page</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(Detail);
