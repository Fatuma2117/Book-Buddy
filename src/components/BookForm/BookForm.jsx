// Book form will have a children's book search bar from API.
// Inputs included for title, author, book url, year, and total pages.
// So that users can create book items if not found in the API.
// Add book button puts the book on the 1.5 kid  book list page.


import { useState } from 'react'
import { useDispatch } from 'react-redux'

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description,setDescription]=useState('')
  const [publish_year, setPublish_year] = useState('');
  const [image_url, setImage_Url] = useState('');
  const [total_pages, setTotal_Pages] = useState('');
  const dispatch = useDispatch();

// let newBook={
//     title,
//     author,
//     description,
//     publish_year,
//     image_url,
//     total_pages
// }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_BOOKS',
      payload: {  
        title,
        author,
        description,
        publish_year,
        image_url,
        total_pages}
    })
    setTitle('');
    setAuthor('');
    setDescription('');
    setPublish_year('');
    setImage_Url('');
    setTotal_Pages('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder=" Title"
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}></input>
          <input
        placeholder="Author"
        value={author}
        onChange={(e) => {setAuthor(e.target.value)}}></input>
        <input
        placeholder="Description"
        value={description}
        onChange={(e) => {setDescription(e.target.value)}}></input>
          <input
        placeholder="Year"
        value={publish_year}
        onChange={(e) => {setPublish_year(e.target.value)}}></input>
           <input
        placeholder="Image"
        value={image_url}
        onChange={(e) => {setImage_Url(e.target.value)}}></input>
          <input
        placeholder="Total Pages"
        value={total_pages}
        onChange={(e) => {setTotal_Pages(e.target.value)}}></input>
     

      <button>Submit!</button>
    </form>
  );
}

export default BookForm;
