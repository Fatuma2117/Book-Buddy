const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// const { rejectUnauthenticated} = require('../modules/authentication-middleware');



router.get('/', (req, res) => {
  // console.log('req.user', req.user)
  const sqlQuery = `
    SELECT * FROM "kids";
  `
  pool.query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET/KIDS', dbErr);
      res.sendStatus(500);
    })
});









module.exports = router;