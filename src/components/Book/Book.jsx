import { useDispatch } from "react-redux";
import { useState } from "react";

import { Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import swal from "sweetalert";

import useStyles from "./styles";

function Book({ book }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const [completed, setCompleted] = useState(false);
  const [pages, setPages] = useState(book.current_page);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_BOOKS",
      payload: book.id,
    });
    swal({
      title: "DELETE BOOK",
      text: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your book has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your book is safe!");
      }
    });
  };

  const handleCompleted = () => {
    dispatch({
      type: "COMPLETED_BOOK",
      payload: book.id,
    });

    setCompleted(!completed);
    history.push(`/RateForm/${book.id}`);
  };

  const handlePageNumber = () => {
    dispatch({
      type: "UPDATE_ONE_BOOK",
      payload: book.id,
    });
  };

  // console.log(kid.id)
  return (
    <Container
      maxWidth="md"
      className={classes.cardGrid}
      style={{ marginTop: "100px", marginLeft: "100px" }}
    >
    
        <Box >
          <Card className={classes.Card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://prodimage.images-bn.com/pimages/9780142413852_p0_v3_s192x300.jpg"
              title="Image title"
            />

            <CardContent size="small" className={classes.cardContent}>
              <Typography gutterBottom>
                Title: {book.title} - Author: {book.author} - Description:{" "}
                {book.description} - Publish Year: {book.publish_year} - Points:{" "}
                {book.points} - Total pages: {book.total_pages}
                Current Page: {book.current_page}
                {/* {pages} */}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={handleDelete}
                size="small"
                className={classes.buttons}
                variant="contained"
                color="primary"
              >
                Delete
              </Button>
              <Button
                onClick={handleCompleted}
                size="small"
                className={classes.buttons}
                variant="contained"
                color={"secondary"}
              >
                Completed ✓
              </Button>

              <Button
                onClick={() => history.push(`/edit/${book.id}`)}
                size="small"
                className={classes.buttons}
                variant="contained"
                color={"primary"}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        </Box>
    </Container>
  );
}
export default Book;
