const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");



router.put("/:id",  rejectUnauthenticated,
(req, res) => {
    console.log(req.body.rating)
    const sqlQuery = `
    UPDATE "books" 
    SET rate = $1
         WHERE books.id = $2;
    `;
    const sqlValues = [req.body.rating, req.body.book];
  
    pool
      .query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log("UPDATE database error", dbErr);
        res.sendStatus(500);
      });
  });

  module.exports = router;
