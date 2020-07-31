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

function* getMovie() {
  try {
    const response = yield Axios.get('/api/movie');
    yield put({
      type: 'SET_MOVIE',
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
      type: 'GET_MOVIE',
    });
  } catch (err) {
    console.log(err);
  }
}
// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('GET_MOVIE', getMovie);
  yield takeEvery('GET_EDIT', getEditMovie);
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
