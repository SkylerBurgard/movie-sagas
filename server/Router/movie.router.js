const express = require('express');
const pool = require('../modules/pool');
// const { axios } = require('axios');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = 
})

pool
.query(queryText)
.then((response) => {
    const movies = response.rows;
    res.send(movies);
})
.catch ((err) => {
    console.log(err);
    res.sendStatus(500);
})

router.put



module.exports = router;