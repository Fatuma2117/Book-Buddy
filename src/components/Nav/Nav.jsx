import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// MUI----------------------------------------------------
// import './Nav.css';
import { useSelector } from 'react-redux';
import {Typography} from '@material-ui/core'
// import CollectionsBookmarkIcon from '@material-ui/icons';
import {CssBaseline} from '@material-ui/core';
import {AppBar} from '@material-ui/core';
import{ Toolbar,Button} from '@material-ui/core';
import Stack from '@mui/material/Stack';

import {Container} from '@material-ui/core'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useHistory } from 'react-router-dom';

function Nav() {
  const user = useSelector((store) => store.user);
const history=useHistory()

  const kidList=()=>{
    history.push('/KidList')
  }
  const bookList=()=>{
    history.push('/BookList')
  }
  const bookForm=()=>{
    history.push('/BookForm')
  }
  const bookLog=()=>{
    history.push('/BookLog')
  }

  return (
    <>
<CssBaseline/>
<AppBar position="static" color="secondary">
  <Container maxWidth="xl">
  <Toolbar disableGutters  display="flex" justifyContent="space-between">
  {/* <CollectionsBookmarkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

    <Typography
    
    
    
    
    
    
    
    
    
    
    >
    {/* <BookmarkIcon/> */}
    <div className="nav">

      <Button to="/home" className="nav-title">
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
            <Button className="navLink" to="/user">
              Home
            </Button>



<Stack direction='row' spacing={2}>
 <Button onClick={kidList}className="navLink" to="/KidList">
              Kid List
            </Button>



            <Button onClick={bookList}className="navLink" to="/BookList">
              Book List
            </Button>








           








            <Button className="navLink" to="/BookForm">
               Book Form
            </Button>
            <Button className="navLink" to="/BookLog">
              Book Log
            </Button>

            <LogOutButton className="navLink" color="primary"/>

</Stack>

          </>






        )}

        
      </div>
    </div>


          </Typography>
    </Toolbar>
    </Container>
    </AppBar>
    </>
  );
}

export default Nav;
