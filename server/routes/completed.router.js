const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log('req.user', req.user)
    // console.log('line 11--->',req.headers.currentkidid)
    const sqlQuery = `
    SELECT * FROM books
    WHERE kid_id=$1 AND completed = $2
    ORDER BY rate ASC
    ;
    `
    const sqlValues = [
      req.headers.currentkidid,
      true
    ];
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('ERROR in GET/books', dbErr);
        res.sendStatus(500);
      })
  });

  module.exports = router;