import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import Axios from 'axios';
import { put } from '../server/Router/movie.router';
import { takeEvery, put } from 'redux-saga/effects';

function* getMovies(action) {
  try {
    const response = yield Axios.get('/api/movies');
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getEditMovie(action) {
  try {
    yield Axios.post('/api/movie', action.payload);
    yield put({
      type: 'GET_MOVIES',
    });
  } catch (err) {
    console.log(err);
  }
}
function* getMovieDetail(action) {
  try {
    const response = yield Axios.get(`/api/movie/detail${action.payload}`);
    // console.log(response);
    yield put({
      type: 'SET_CURRENT_MOVIES',
    });
  } catch (err) {
    console.log(err);
  }
}
// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('GET_MOVIES', getMovies);
  yield takeEvery('GET_EDIT', getEditMovie);
  yield takeEvery('MOVIE_DETAIL', getMovieDetail);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const currentMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_MOVIE':
      return action.payload;
    case 'CLEAR_CURRENT_MOVIE':
      return {};
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    currentMovie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
