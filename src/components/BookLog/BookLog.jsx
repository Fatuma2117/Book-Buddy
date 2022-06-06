import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CompletedBook from "../CompletedBook/CompletedBook";
import { useHistory } from "react-router-dom";
import KidProfile from "../KidProfile/KidProfile";
//MUI----------------------------------------------------------
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import { Button, Box } from "@material-ui/core";
import { yellow } from "material-ui-colors";

function BookLog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_COMPLETED_BOOKS",
    });
  }, []);
  const history = useHistory();

  const theme = createTheme({
    typography: {
      // fontFamily: ["Train One", "cursive"].join(","),
    },
  });

  const completedBooks = useSelector((store) => store.completedBooks);
  console.log("completedBooksReducer", completedBooks);

  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
        <Box mt={20} >
          <Typography align='center'>
            {/* <h1>Reading Log </h1> */}


            <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          
          >
          Reading Log
          </Typography>
            <KidProfile />
            {completedBooks.map((book) => {
              return <CompletedBook key={book.id} book={book} />;
            })}

            <Button
              size="large"
              variant="contained"
              style={{ backgroundColor: yellow[500], marginTop: "200px" }}
              onClick={() => history.push("/BookList")}
            >
              Back To Book List
            </Button>
          </Typography>
        </Box>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default BookLog;
