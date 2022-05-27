/// Displays all the books the kid is reading
// Two buttons to delete a  book from the list and mark a book as completed. 
// The book that is marked as completed will be in 1.7 Kid Book Log.
// Input so kids can update the current page they are on. 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Book from '../Book/Book'
import Kid from '../Kid/Kid';
import { Typography } from '@material-ui/core'
import {Grid} from '@material-ui/core'
import { createTheme, ThemeProvider } from "@material-ui/core";

function BookList() {
    // const history = useHistory();

    const dispatch = useDispatch();
    const books = useSelector(store => store.books);
    const kids = useSelector(store => store.kids)
    console.log(books)
    useEffect(() => {
        dispatch({
            type: 'FETCH_BOOKS'

        })
    }, [])

    const theme = createTheme({
        typography: {
          fontFamily: ["Train One", "cursive"].join(","),
        },
      });




    return (


     <div>
    <ThemeProvider theme={theme}>
      <Typography>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Book List
            </Typography>
<Grid container spacing={4}>
            {books.map(book => {
                return (
                    <Book key={book.id} book={book} />
                );
            })}
       
        </Grid>
        </Typography>
    </ThemeProvider>
       </div>
    )
};

export default BookList;