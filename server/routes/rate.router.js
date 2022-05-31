



router.post("/", rejectUnauthenticated, (req, res) => {
    // console.log(req.headers.currentkidid)
    // console.log(req.body)
    const sqlQuery = `
      INSERT into "books"
      (rate)
      VALUES
      ($1);
      `;
    const sqlValues = [
      req.body.title
    ,
    ];
    pool.query(sqlQuery, sqlValues).then((dbRes) => {
      // console.log(dbRes.rows)
    });
  });