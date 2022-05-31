// Kids can see the total number of points from the reading log
//  page as well as a progress graph
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookList from "../BookList/BookList";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";

function KidProfile() {
  const dispatch = useDispatch();
  const points = useSelector((store) => store.points);

  useEffect(() => {
    dispatch({
      type: "FETCH_POINTS",
    });
  }, []);
  const theme = createTheme({
    typography: {
      fontFamily: ["Train One", "cursive"].join(","),
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography>
          <Typography gutterBottom>
            <h1>Kid Profile</h1>

            {points.map((point) => {
              console.log("points map----->", point);
              return (
                <>
                  Total Book Points: {point.sum} ------ [insert progress graph
                  here]
                </>
              );
            })}
          </Typography>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default KidProfile;
