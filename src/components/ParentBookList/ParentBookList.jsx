// Parent book list page that has a drop down of names of children.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";

function ParentBookList() {
  useEffect(() => {
    dispatch({
      type: "FETCH_PARENT",
    });
  }, []);
  const history = useHistory();

  const dispatch = useDispatch();
  const parentBooks = useSelector((store) => store.parentBooks);
  console.log("parentBooks----------------->", parentBooks);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <div>
      <h1>Parent Book List</h1>
      <Grid container spacing={4}>
        {parentBooks.map((book) => {
          // console.log('parent loop book',book)
          return (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Kid: {book.name}---- Book: {book.title} -- Current Page:
                  {book.current_page}
                </Typography>
              </CardContent>
            </Card>
          );
        })}

        <Typography>
          <Button
            size="large"
            variant="contained"
            color={"primary"}
            onClick={() => history.push("/ParentBookForm")}
          >
            ADD NEW BOOK
          </Button>
        </Typography>
      </Grid>
    </div>
  );
}

export default ParentBookList;
