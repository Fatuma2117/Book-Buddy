import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { createTheme, ThemeProvider,Typography } from "@material-ui/core";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const theme = createTheme({
    typography: {
      fontFamily: ["Train One", "cursive"].join(","),
    },
  });
  return (
      <div className="container">
    <ThemeProvider theme={theme} >
<Typography variant='h3'>
  
      Welcome, {user.username}!
     Your ID is: {user.id}
      <LogOutButton className="btn" />
   
    </Typography>    
    </ThemeProvider>
     </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
