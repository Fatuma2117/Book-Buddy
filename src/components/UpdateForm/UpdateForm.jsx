
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField'
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import BookForm from '../BookForm/BookForm'
import { yellow } from 'material-ui-colors';



function UpdateForm(){
    useEffect(() => {
        dispatch({
          type: 'EDIT_ONE_BOOK',
          payload: bookId
        })
        console.log('bookId----->',bookId)
      }, [])

      const dispatch = useDispatch();
      const history = useHistory();
      const params = useParams();
      const bookId = params.id;
const editBook = useSelector(store => store.editBook)

const handleSubmit=()=>{
  dispatch({
    type: 'UPDATE_BOOK',
    payload: editBook
  })
  history.push('/BookList')

}


    return(
     
  //  <>Update Book Form</>
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
     <TextField
        hiddenLabel
        id="filled-label-normal"
        // defaultValue="Normal"
        variant="filled"
        label={'Title'} margin="normal"
        // placeholder=" Title"
        value={editBook.title}
        onChange={(e) => { setTitle(e.target.value) }} 
        />

<TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        // defaultValue="Normal"
        variant="filled"
        label={'Author'} margin="normal"
        // placeholder="Author"
        value={editBook.author}
        onChange={(e) => { setAuthor(e.target.value) }} 
        />


<TextField

hiddenLabel
id="filled-hidden-label-normal"
// defaultValue="Normal"
variant="filled" margin="normal"
label={'Description'}

placeholder="Description"
value={editBook.description}
onChange={(e) => { setDescription(e.target.value) }} 
/>

<TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        //  defaultValue="Normal"
        variant="filled" margin="normal"
        label={'Year'}
        // placeholder="Year"
        value={editBook.publish_year}
        onChange={(e) => { setPublish_year(e.target.value) }} 
        />

<TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        label={'Image'}
        // placeholder="Image"
        value={editBook.image_url}
        onChange={(e) => { setImage_Url(e.target.value) }} />

<TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        label={'Total Pages'}
        // placeholder="Total Pages"
        value={editBook.total_pages}
        onChange={(e) => { setTotal_Pages(e.target.value) }} />





<TextField
        hiddenLabel
        id="label-normal"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        // label={'Add Current Page'}
        placeholder="Add Current Page"
        value={editBook.current_page}
        // onChange={(e) => { setTotal_Pages(e.target.value) }} 
        />
        <Button size='small' variant="contained" style={{backgroundColor: yellow [500]}} >Add Current Page</Button>


</Stack>
       
    )
}
export default UpdateForm;