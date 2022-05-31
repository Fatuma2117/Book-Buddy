import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { createTheme, ThemeProvider,Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Card} from '@material-ui/core';
import { white } from "material-ui-colors";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const user = useSelector((store) => store.user);
  const useStyles = makeStyles((theme) => ({
    typography: {
    
    },  root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/books.jpeg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      fontFamily: 'Berkshire Swash', 
      
color: '#d1c4e9',
fontSize:'60px'

    },
  })); 
   const classes = useStyles();

  return (
      <div className={classes.root}>
<Typography variant='h3' color='primary' align='center' >
   Hello!!!!!
      Welcome, {user.username}!
     Your ID is: {user.id}
      <LogOutButton className="btn" />
      khgljsdhgfjshdf
      kjhsdjfsdf

      ksdhgfjshagdf
      sdfasjdhfksajdf
      sdajfksdfksd
      sdfsdf
  
  <CssBaseline/>
  <Card className={classes.root}>
    <box>
    <typography>
    We are the music makers, and we are the dreamers of dreams.”
    --- Roald Dahl
    </typography>
    </box>
  </Card>

    </Typography>    
     </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
