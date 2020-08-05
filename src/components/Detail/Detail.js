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

  onBackClick = (event) => {
    this.props.dispatch({ type: 'CLEAR_CURRENT_MOVIE' });
    this.props.history.push('/');
  };
  render() {
    let genreArray = [];
    if (this.props.store.currentMovie && this.props.store.currentMovie.genres) {
      const genreArray = this.props.store.currentMovie.genres.map(
        (item, index) => {
          return <span class="genre">{item}</span>;
        }
      );
    }

    return (
      <div>
        <button onClick={this.onBackClick}>Back</button>
        {this.props.store.currentMovie.title ? (
          <div>
            <h1>{this.props.store.currentMovie.title}</h1>
            <img src={this.props.store.currentMovie.poster} />
            <h5>{genreArray}</h5>
            <p>{this.props.store.currentMovies.description}</p>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(Detail);
