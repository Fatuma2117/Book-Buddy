import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Card, Box } from "@material-ui/core";
import { yellow } from "material-ui-colors";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const user = useSelector((store) => store.user);
  const useStyles = makeStyles((theme) => ({
    typography: {},
    root: {
      minHeight: "150vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/books.jpeg"})`,
      backgroundSize: "cover",
      fontFamily: "Berkshire Swash",
      color: '#03a9f4',
      fontSize: "70px",
    },
    backgroundColor:'#03a9f4',
  }));
  const classes = useStyles();

  return (
    <div >
      {/* <CssBaseline /> */}
         {/* <img src="images/book-stack.jpg"/> */}
      <Card
       className={classes.root}
      > 
    
     
        <Box sx={{ borderRadius: '16px' }} mt={39} maxWidth='900px' style={{ backgroundColor: yellow[500] }}>



          We are the music makers, and we are the dreamers of dreams.” --- Roald
          Dahl
           
        </Box>
      </Card>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
