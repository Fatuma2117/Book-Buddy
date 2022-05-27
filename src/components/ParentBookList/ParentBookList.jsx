// Parent book list page that has a drop down of names of children.
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core'
import {Grid} from '@material-ui/core';
import {Box} from '@material-ui/core'
import { Container } from '@material-ui/core';

import {Card, CardMedia, CardContent, CardActions} from '@material-ui/core'



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
            

            {
            parentBooks.map(book =>{
                // console.log('parent book',book)
                return(
                <Card style={{
                    height: '100%',
                    display: 'flex',
                   flexGrow: 1,
                   marginTop: '40px',
                   backgroundColor: "palegreen"
                }}>
                       
                    <CardContent >
                    <Box sx={{width:'auto'}}>
                        <Typography>
                    Title: {book.title} -
                    Author: {book.author} -
                    Description: {book.description} -
                    Publish Year: {book.publish_year} -
                    
                    Points: {book.points} -
                    Total pages: {book.total_pages}
                    Current Page: {book.current_page}
                    </Typography>
               </Box>
                </CardContent> 
</Card>
                )}) }

        </Grid>
        </div>
    )
};

export default ParentBookList;