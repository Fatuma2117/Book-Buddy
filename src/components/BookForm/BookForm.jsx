// Book form will have a children's book search bar from API.
// Inputs included for title, author, book url, year, and total pages.
// So that users can create book items if not found in the API.
// Add book button puts the book on the 1.5 kid  book list page.

import  { useEffect } from 'react';

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import { Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';



function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('')
  const [publish_year, setPublish_year] = useState('');
  const [image_url, setImage_Url] = useState('');
  const [total_pages, setTotal_Pages] = useState('');
  const[current_page,setCurrent_page] = useState(0)
  const dispatch = useDispatch();
  const history = useHistory()

//   useEffect(() => {
//     dispatch({
//         type:'FETCH_BOOKS'
    
//     })
// },[])


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
        total_pages,
        current_page
      }
    })
    setTitle('');
    setAuthor('');
    setDescription('');
    setPublish_year('');
    setImage_Url('');
    setTotal_Pages('');
    
    history.push("/BookList")
  }

  return (
    <Stack
      component="form"
      sx={{
        width: '100%',
      }}
      spacing={2}
      // noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

      {/* <form onSubmit={handleSubmit}> */}
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          // defaultValue="Normal"
          variant="filled"
          label={'Title'} margin="normal"
          // placeholder=" Title"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }} />

        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          // defaultValue="Normal"
          variant="filled"
          label={'Author'} margin="normal"
          // placeholder="Author"
          value={author}
          onChange={(e) => { setAuthor(e.target.value) }} />

        <TextField

          hiddenLabel
          id="filled-hidden-label-normal"
          // defaultValue="Normal"
          variant="filled" margin="normal"
          label={'Description'} 

          // placeholder="Description"
          value={description}
          onChange={(e) => { setDescription(e.target.value) }} />
        <TextField
   hiddenLabel
   id="filled-hidden-label-normal"
  //  defaultValue="Normal"
   variant="filled" margin="normal"
   label={'Year'} 
          // placeholder="Year"
          value={publish_year}
          onChange={(e) => { setPublish_year(e.target.value) }}/>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          // defaultValue="Normal"
          variant="filled" margin="normal"
          label={'Image'} 
          // placeholder="Image"
          value={image_url}
          onChange={(e) => { setImage_Url(e.target.value) }}/>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          // defaultValue="Normal"
          variant="filled" margin="normal"
          label={'Total Pages'} 
          // placeholder="Total Pages"
          value={total_pages}
          onChange={(e) => { setTotal_Pages(e.target.value) }}/>






        <Button onClick={handleSubmit}size ='small'variant="contained" color="primary" >Add Book</Button>
      {/* </form> */}
    // </Stack>
  );
}

export default BookForm;
