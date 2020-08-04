import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
  componentDidMount() {
    this.getMovie();
  }
  getMovie() {
    {
      this.props.dispatch({
        type: 'GET_MOVIE',
      });
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.reduxState.movies.map((movieItem) => {
            return <MovieListItem key={MovieListItem.id} />;
          })}
        </ul>
      </div>
    );
  }
}
const mapStoreToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStoreToProps)(MovieList);
