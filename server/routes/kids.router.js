const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');



router.get('/',rejectUnauthenticated, (req, res) => {
  // console.log('req.user', req.user)
  const sqlQuery = `
  SELECT * FROM  "kids" 
  WHERE user_id = $1;
  `
  pool.query(sqlQuery,[req.user.id])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET/KIDS', dbErr);
      res.sendStatus(500);
    })
});









module.exports = router;