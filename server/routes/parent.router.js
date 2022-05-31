const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
  // console.log('userId',req.user)
  // console.log('currentKidId', req.headers.currentkidid)
  const sqlQuery = `
      SELECT kids.name, books.title, books.current_page
      FROM books 
      JOIN kids ON books.kid_id=kids.id
      WHERE  kids.user_id=$1
      GROUP BY kids.name,books.title, books.current_page;
      `;
  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
      // console.log("parentBook response ************", dbRes.rows);
    })
    .catch((dbErr) => {
      console.log("ERROR in GET/PARENT", dbErr);
      res.sendStatus(500);
    });
});
module.exports = router;
