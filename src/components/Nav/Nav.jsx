import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// MUI----------------------------------------------------
// import './Nav.css';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core'
// import CollectionsBookmarkIcon from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar, Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';

import { Container } from '@material-ui/core'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core";
import Themes from '../Nav/navStyles'
function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory()

 

  const theme = createTheme({
  typography: {
    fontFamily: ["Train One", "cursive"].join(","),
  },
});






  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters display="flex" 
          // justifyContent="space-between"
          >
            {/* <CollectionsBookmarkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}


            <ThemeProvider theme={theme}>
      <Typography>

   









            <Typography

            >
              {/* <BookmarkIcon/> */}
              <div className="nav">

                <Button theme={theme}>
                  Book Tracker App
                </Button>
                <div>
                  {/* If no user is logged in, show these links */}
                  {!user.id && (
                    // If there's no user, show login/registration links
                    <Link className="navLink" to="/login">
                      Login / Register
                    </Link>
                  )}

                  {/* If a user is logged in, show these links */}
                  {user.id && (
                    <>
                      <Button onClick={() => history.push("/")} style={{ color: "#c6ff00"}}>
                        Home
                      </Button>



                      <Stack direction='row' spacing={2}>
                        <Button onClick={() => history.push("/KidList")} 
                          style={{ color: "#c6ff00"}}
                        
                        
                    
                        >
                          Kid List
                        </Button>
                        <Button theme={theme} onClick={() => history.push("/BookList")} style={{ color: "#c6ff00"}} >
                          Book List
                       
                        </Button>
                        <Button onClick={() => history.push("/BookForm")} style={{ color: "#c6ff00"}} >
                          Book Form
                        </Button>
                        <Button  onClick={() => history.push("/BookLog")}style={{ color: "#c6ff00"}}>
                          Book Log
                        </Button>
                        <Button  onClick={() => history.push("/KidProfile")}style={{ color: "#c6ff00"}}>
                          Kid Profile
                        </Button>
                        <LogOutButton />
                      </Stack>
                    </>

                  )}


                </div>
              </div>


            </Typography>
            </Typography>
    </ThemeProvider>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav;
