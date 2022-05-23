import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function KidList(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type:'FETCH_KIDS'
        })
    },[])

    return(
        <h1></h1>

    )
};

export default KidList;