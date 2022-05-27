// Parent book list page that has a drop down of names of children.
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function ParentBookList(){
    useEffect(() => {
        dispatch({
            type:'Fetch_PARENT'
        })
    },[])
    const dispatch = useDispatch();

    return(
        <h1>Parent Book List</h1>

    )
};

export default ParentBookList;