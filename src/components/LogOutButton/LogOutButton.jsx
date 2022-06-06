import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

function LogOutButton(props) {
  const dispatch = useDispatch();

  const handleLogOut=()=>{
    dispatch({ type: 'LOGOUT' })

    localStorage.setItem('current_kid_id', '0')

  }
  return (
    <Button 
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={handleLogOut}
      
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
