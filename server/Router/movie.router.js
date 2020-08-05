const express = require('express');
const pool = require('../modules/pool');
// const { axios } = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "movies';
});

pool
  .query(queryText)
  .then((response) => {
    const movies = response.rows;
    res.send(movies);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });

router.get('/details/:id', (req, res) => {
  const queryText = `SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) as genres FROM movies
  JOIN movie_genres ON movies.id=movie_genres.movie_id
  JOIN genres ON movie_genres.genre_id=genres.id
  WHERE movies.id=$1 GROUP BY movies.id;`;
});

pool
  .query(queryText, [req.params.id])
  .then((response) => {
    const movies = response.rows;
    res.send(response.rows[0]);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });

router.put;

module.exports = router;
