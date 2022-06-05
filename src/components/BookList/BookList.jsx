import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Book from "../Book/Book";
import Kid from "../Kid/Kid";
//MUI--------------------------------------------------
import { Typography, Button } from "@material-ui/core";
import { Grid, Box} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

function BookList() {
  const dispatch = useDispatch();
  const history = useHistory();

  const books = useSelector((store) => store.books);
  const kids = useSelector((store) => store.kids);
  console.log(books);
  useEffect(() => {
    dispatch({
      type: "FETCH_BOOKS",
    });
  }, []);



  return (
    <div>
     <Box mt={18}>
        <Typography>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Current Books
          </Typography>
          <Grid container >
            {books.map((book) => {
              return (
                <Grid mr={45} key={book.id} item xs={4}>
                  <Book book={book} />
                </Grid>
              );
            })}
          </Grid>
        </Typography>

        <Button
          size="large"
          variant="contained"
          color={"primary"}
          align='center'
         
          onClick={() => history.push("/BookForm")}
        >
          ADD NEW BOOK
        </Button>
        </Box>
    </div>
  );
}

export default BookList;
