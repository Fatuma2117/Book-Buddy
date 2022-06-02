import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { createTheme, ThemeProvider,Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Card, Box} from '@material-ui/core';
import { white } from "material-ui-colors";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const user = useSelector((store) => store.user);
  const useStyles = makeStyles((theme) => ({
    typography: {
    
    },  root: {
      minHeight: '150vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/books.jpeg'})`,
      backgroundSize: 'cover',
      fontFamily: 'Berkshire Swash',
      
color: '#d1c4e9',
fontSize:'70px'

    },
  })); 
   const classes = useStyles();

  return (
      <div className={classes.root}>
 
     
  
  <CssBaseline/>
  <Card className={classes.root}>
    <Box mt={15} >



    Hello!!!!!
      Welcome, {user.username}!
     Your ID is: {user.id}
      <LogOutButton className="btn" />
    We are the music makers, and we are the dreamers of dreams.”
    --- Roald Dahl
    </Box>
  </Card>

     </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
