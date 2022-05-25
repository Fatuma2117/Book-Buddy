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
import{ Toolbar} from '@material-ui/core';
// import {BookmarkIcon} from '@material-ui/icons';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
<CssBaseline/>
<AppBar position="relative">
  <Toolbar>
    <Typography>
    {/* <BookmarkIcon/> */}
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Book Tracker App</h2>
      </Link>
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
            <Link className="navLink" to="/user">
              Home
            </Link>
            <Link className="navLink" to="/KidList">
              Kid List
            </Link>

            <Link className="navLink" to="/BookList">
              Book List
            </Link>
            <Link className="navLink" to="/BookForm">
               Book Form
            </Link>
            <Link className="navLink" to="/BookLog">
              Book Log
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        
      </div>
    </div>


          </Typography>
    </Toolbar>
    </AppBar>
    </>
  );
}

export default Nav;
