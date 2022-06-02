const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');

//////POINTS
router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log('points----->',req.user)
      const sqlQuery = `
      SELECT sum(books.points)
      FROM books 
      WHERE kid_id=$1;
      `
      const sqlValues = [ 
        req.headers.currentkidid
  
      ];
      pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
          res.send(dbRes.rows);
        })
        .catch((dbErr) => {
          console.log('ERROR in GET/POINTS', dbErr);
          res.sendStatus(500);
        })
    });




module.exports = router;