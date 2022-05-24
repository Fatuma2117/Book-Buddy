const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user', req.user)
  // console.log('line 11--->',req.headers.currentkidid)
  const sqlQuery = `
  SELECT * FROM books
  JOIN kids_books ON books.id=kids_books.book_id
  WHERE kids_books.kid_id=$1
  ;
  `
  const sqlValues = [req.headers.currentkidid];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET/books', dbErr);
      res.sendStatus(500);
    })
});



// router.post('/',rejectUnauthenticated, (req, res) => {

//     const sqlQuery = `
//     INSERT into "books"
//     (title, author, publish_year,description,image_url,total_pages)
//     VALUES
//     ($1,$2,$3,$4,$5,$6)
//     `
//     const sqlValues = [
//       req.body.title,
//       req.body.author,
//       req.body.publish_year,
//       req.body.description,
//       req.body.image_url,
//       req.body.total_pages
//     ]
//     pool.query(sqlQuery, sqlValues)
//       .then((dbRes) => {
//         res.sendStatus(201)
//       })
   

//   }
// )






module.exports = router;
