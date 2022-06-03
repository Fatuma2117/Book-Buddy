import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Book from "../Book/Book";
import Kid from "../Kid/Kid";
//MUI--------------------------------------------------
import { Typography, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

function BookList() {
  const dispatch = useDispatch();
  // const history = useHistory();

  const books = useSelector((store) => store.books);
  const kids = useSelector((store) => store.kids);
  console.log(books);
  useEffect(() => {
    dispatch({
      type: "FETCH_BOOKS",
    });
  }, []);

  const theme = createTheme({
    typography: {
      // fontFamily: ["Train One", "cursive"].join(","),
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Book List
          </Typography>
          <Grid container mr={4} ml={4}p={4}spacing={2}>
            {books.map((book) => {
              return (
                <Grid key={book.id} item xs={6}>
                  <Book book={book} />
                </Grid>
              );
            })}
          </Grid>
        </Typography>

        <Button
          size="small"
          variant="contained"
          color={"primary"}
          align='center'
          onClick={() => history.push("/BookForm")}
        >
          ADD NEW BOOK
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default BookList;
