function Book({ book }) {


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
                    <button>Delete Book</button>  
                </li>
            </ul>
          
            {/* <input>update current pages</input> */}
        </div>
    )
}
export default Book;