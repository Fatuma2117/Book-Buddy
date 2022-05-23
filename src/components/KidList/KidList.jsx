import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function KidList(){
    const dispatch = useDispatch();
    const kids = useSelector(store => store.kids);
    useEffect(() => {
        dispatch({
            type:'FETCH_KIDS'
        })
    },[])

    return(
      <h1>Kid List</h1>

    )
};

export default KidList;