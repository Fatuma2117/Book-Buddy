const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');


/////BookList
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user', req.user)
  // console.log('line 11--->',req.headers.currentkidid)
  const sqlQuery = `
  SELECT * FROM books
  WHERE kid_id=$1 AND completed=$2
  ;
  `
  const sqlValues = [req.headers.currentkidid, false];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET/books', dbErr);
      res.sendStatus(500);
    })
});

///////BookLog
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user', req.user)
  // console.log('line 11--->',req.headers.currentkidid)
  const sqlQuery = `
  SELECT * FROM books
  WHERE kid_id=$1 AND completed=$2
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



///// ParentBookLIst
router.get('/', rejectUnauthenticated, (req, res) => {
console.log('userId',req.user)
// console.log('currentKidId', req.headers.currentkidid)
  const sqlQuery = `
  SELECT *  FROM books 
  WHERE user_id=$1
  ;
  `
  const sqlValues = [ 
    req.user
   
  ];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET/PARENT', dbErr);
      res.sendStatus(500);
    })
});



/////BookForm

router.post('/',rejectUnauthenticated, (req, res) => {
// console.log(req.headers.currentkidid)
// console.log(req.body)
    const sqlQuery = `
    INSERT into "books"
    (title, author, publish_year,description,image_url,total_pages,kid_id,current_page,completed)

    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8,$9);
    `
    const sqlValues = [
      req.body.title,
      req.body.author,
      req.body.publish_year,
      req.body.description,
      req.body.image_url,
      req.body.total_pages,
      req.headers.currentkidid,
      req.body.current_page,
      false
    ]
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        // console.log(dbRes.rows)
      })
  }
)

// BookLog
router.put('/:id', (req, res) => {
  // console.log(req.body)
  const sqlQuery = `
    UPDATE "books" 
      SET 
        completed = $1
      WHERE id = $2 AND kid_id=$3;
  `;
  const sqlValues = [ 
    true,
    req.params.id,
    req.headers.currentkidid
     ]
  
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log('UPDATE database error', dbErr);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  console.log(req.body)
  const sqlQuery = `
    UPDATE "books" 
      SET 
        completed = $1
      WHERE id = $2 AND kid_id=$3;
  `;
  const sqlValues = [ 
    true,
    req.params.id,
    req.headers.currentkidid
     ]
  
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log('UPDATE database error', dbErr);
      res.sendStatus(500);
    });
});










router.delete( '/:id', ( req, res )=>{
  console.log( 'book id to delete', req.params.id );
  const sqlQuery = `DELETE FROM "books" 
  WHERE kid_id=$1 and books.id=$2 ;`;
  const sqlValues = [ 
    req.headers.currentkidid,
    req.params.id ];

  pool.query( sqlQuery, sqlValues )
  .then( ( response )=>{
      res.sendStatus( 200 );
  }).catch( ( err )=>{
      console.log( 'error with DELETE:', err );
      res.sendStatus( 500 );
  })
})




module.exports = router;
