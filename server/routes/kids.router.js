const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('req.user', req.user)
  const sqlQuery = `
    SELECT * FROM "kids"
      WHERE "id"=$1;
  `
  const sqlValues = [req.user.id];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET/books', dbErr);
      res.sendStatus(500);
    })
});