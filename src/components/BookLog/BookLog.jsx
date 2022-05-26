// Contains a history of all books marked as completed.
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CompletedBook from '../CompletedBook/CompletedBook'



function BookLog() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_COMPLETED_BOOKS'

        })
    }, [])
    const completedBooks = useSelector(store => store.completedBooks);
    console.log('completedBooksReducer', completedBooks)

    return (
        <div>
            <h1>Kid Book Log </h1>

            {completedBooks.map(book => {
                    return (
                        <CompletedBook key={book.id} book={book}/>
                    );
                })} 


          
      
        </div>
    )
};

export default BookLog;