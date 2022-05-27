// Contains a history of all books marked as completed.
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CompletedBook from '../CompletedBook/CompletedBook'
import { createTheme, ThemeProvider,Typography } from "@material-ui/core";



function BookLog() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_COMPLETED_BOOKS'

        })
    }, [])
    const theme = createTheme({
        typography: {
          fontFamily: ["Train One", "cursive"].join(","),
        },
      });



    const completedBooks = useSelector(store => store.completedBooks);
    console.log('completedBooksReducer', completedBooks)

    return (
       
        <div>
<ThemeProvider theme={theme} >
<Typography>
<h1>Kid Book Log </h1>

            
       
            

            {completedBooks.map(book => {
                    return (
                        <CompletedBook key={book.id} book={book}/>
                    );
                })} 


          
</Typography>    
    </ThemeProvider>
        </div>
  
    )
};

export default BookLog;