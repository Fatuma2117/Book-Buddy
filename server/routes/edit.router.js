const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');


router.get('/:id', (req, res) => {
    console.log('editBooks req.body--->',req.params.id)
    const sqlText = `
      SELECT * FROM books
        WHERE id=$1;
    `;
    const sqlValues = [req.params.id];
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        const oneBook = dbRes.rows[0];
        console.log('One Book------->', oneBook);
        res.send(oneBook);
      })
      .catch((dbErr) => {
        console.log('error in GET/ONE BOOK/:id', dbErr);
        res.sendStatus(500);
      })
  })









module.exports = router;
