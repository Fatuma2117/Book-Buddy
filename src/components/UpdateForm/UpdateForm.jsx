
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField'
import { Button,Box } from '@material-ui/core';
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
  <Box mt={15} >
   <Stack
   component="form"
   sx={{
     width: '100%',
   }}
   spacing={2}
   noValidate
   autoComplete="off"
   onSubmit={handleSubmit}
 >
     <TextField
        hiddenLabel
        id="outlined-multiline-flexible"
        // defaultValue="Normal"
        variant="filled"
        margin="normal"
      
        label={'Title'}
        value={editBook.title}
        onChange={(e) => { 
          dispatch({
            type: 'EDIT_TITLE',
            payload: e.target.value 
          })
        }} 
        />

<TextField
        // hiddenLabel
        id="outlined-multiline-flexible"
        // defaultValue="Normal"
        variant="filled"
         margin="normal"
    
        label={'Author'}
        value={editBook.author}
        onChange={(e) => { 
          dispatch({
            type: 'EDIT_AUTHOR',
            payload: e.target.value 
          })
        }} 
        />


<TextField

hiddenLabel
id="outlined-multiline-flexible"
// defaultValue="Normal"
variant="filled" margin="normal"
label={'Description'}

// placeholder="Description"
value={editBook.description}
onChange={(e) => { 
  dispatch({
    type: 'EDIT_DESCRIPTION',
    payload: e.target.value 
  })
}} 
/>

<TextField
        hiddenLabel
        id="outlined-multiline-flexible"
        //  defaultValue="Normal"
        variant="filled" margin="normal"
        label={'Year'}
        placeholder="Year"
        value={editBook.publish_year}
        onChange={(e) => { 
          dispatch({
            type: 'EDIT_PUBLISH_YEAR',
            payload: e.target.value 
          })
        }}  
        />

{/* <TextField
        hiddenLabel
        id="outlined-multiline-flexible"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        // label={'Image'}
        // placeholder="Image"
        value={editBook.image_url}
        onChange={(e) => { 
          dispatch({
            type: 'EDIT_IMAGE_URL',
            payload: e.target.value 
          })
        }} /> */}

<TextField
        hiddenLabel
        id="outlined-multiline-flexible"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        label={'Total Pages'}
        placeholder="Total Pages"
        value={editBook.total_pages}
        onChange={(e) => { 
          dispatch({
            type: 'EDIT_TOTAL_PAGE',
            payload: e.target.value 
          })
        }} 
        />





<TextField
        hiddenLabel
        id="outlined-multiline-flexible"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        label={'Add Current Page'}
        placeholder="Add Current Page"
        value={editBook.current_page}
        onChange={(e) => { 
          dispatch({
            type: 'EDIT_CURRENT_PAGE',
            payload: e.target.value 
          })
        }} 
        />
        <Button onClick={handleSubmit}size='small' variant="contained" style={{backgroundColor: yellow [500]}} >Update Book</Button>


</Stack>
</Box>
       
    )
}
export default UpdateForm;