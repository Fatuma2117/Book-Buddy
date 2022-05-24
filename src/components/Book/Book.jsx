import { useHistory } from 'react-router-dom';
function Book({book}){


// console.log(kid.id)
    return(
        <div >
            <h3>{book.title} 
            {book.author} 
            {book.publish_year}
            {book.book_url}
            {book.points}
            {book.total_pages}
            </h3>
            <button>Delete Book</button>
            {/* <input>update current pages</input> */}
        </div>
    )
}
export default Book;