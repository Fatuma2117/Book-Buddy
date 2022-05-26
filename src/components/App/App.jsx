import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import UserPage from '../UserPage/UserPage';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import BookLog from '../BookLog/BookLog';
import KidProfile from '../KidProfile/KidProfile';
import ParentBookList from '../ParentBookList/ParentBookList';
import ParentBookForm from '../ParentBookForm/ParentBookForm';
import ParentProfile from '../ParentProfile/ParentProfile';
import ProfileList from '../ProfileList/ProfileList';
import KidList from '../KidList/KidList';
import Kid from '../Kid/Kid';
import UpdateForm from '../UpdateForm/UpdateForm';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

       

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/KidList"
          >
            {/* <ProfileList/> */}
            <KidList/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/BookList"
          >
            <BookList />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/BookForm"
          >
            <BookForm/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/BookLog"
          >
            <BookLog/>

          </ProtectedRoute>

          <ProtectedRoute exact path="/edit/:id">
          <UpdateForm />
        </ProtectedRoute>
        <ProtectedRoute exact path="/ParentBookList">
          <ParentBookList />
        </ProtectedRoute>





  
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

         
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
