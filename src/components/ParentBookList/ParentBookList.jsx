// Parent book list page that has a drop down of names of children.
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core'
import {Grid} from '@material-ui/core'


function ParentBookList(){
    useEffect(() => {
        dispatch({
            type:'FETCH_PARENT'
        })
    },[])
    const dispatch = useDispatch();
    const parentBooks = useSelector(store => store.parentBooks)
console.log('parentBooks',parentBooks)
    return(
        <div>
        <h1>Parent Book List</h1>
        <Grid container spacing={4}>

            {parentBooks &&
            parentBooks.map(book =>{
                console.log('parent book',book)
                return(
                    <></>
                //    {book.title}
                )}) }

        </Grid>
        </div>
    )
};

export default ParentBookList;