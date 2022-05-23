/// Displays all the books the kid is reading
// Two buttons to delete a  book from the list and mark a book as completed. 
// The book that is marked as completed will be in 1.7 Kid Book Log.
// Input so kids can update the current page they are on. 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function KidBookList(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type:'FETCH_BOOKS'
        })
    },[])

    return(
        <h1>Kid Book List</h1>

    )
};

export default KidBookList;