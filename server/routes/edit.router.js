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


  router.put('/:id', (req, res) => {
    console.log(req.body)
    const sqlText = `

      UPDATE books 
        SET 
          title = $1,
          author = $2,
          publish_year = $3,
          image_url= $4,
          total_pages = $5,
          kid_id=$6,
          current_page=$7
        WHERE id = $8;
    `;
    const sqlValues = [
      req.body.title,
      req.body.author,
      req.body.publish_year,
      req.body.image_url,
      req.body.total_pages,
      req.headers.currentkidid,
      req.body.current_page,
      req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log('UPDATE database error', dbErr);
        res.sendStatus(500);
      });
  });






module.exports = router;
