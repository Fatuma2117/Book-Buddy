import { useDispatch } from 'react-redux';


function Book({ book }) {
     const dispatch = useDispatch();

    const handleDelete=()=>{
    dispatch({
        type: 'DELETE_BOOKS',
        payload: book.id

    })
}




    // console.log(kid.id)
    return (
        <div >
            <ul>
                <li>Title: {book.title} -
                    Author: {book.author} -
                    Description: {book.description} -
                    Publish Year: {book.publish_year} -
                    Image: {book.image_url} -
                    Points: {book.points} -
                    Total pages: {book.total_pages}
                    <button onClick={handleDelete}>Delete</button>  
                </li>
            </ul>
          
            {/* <input>update current pages</input> */}
        </div>
    )
}
export default Book;