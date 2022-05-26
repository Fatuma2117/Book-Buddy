
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField'
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import BookForm from '../BookForm/BookForm'



function UpdateForm(){
    useEffect(() => {
        dispatch({
          type: 'FETCH_ONE_BOOK',
          payload: bookId
        })
      }, [])

      const dispatch = useDispatch();
      const history = useHistory();
      const params = useParams();
      const bookId = params.id;



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
  //  onSubmit={handleSubmit}
 >

<TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        // defaultValue="Normal"
        variant="filled" margin="normal"
        label={'UPdate Pages'}
        // placeholder="Total Pages"
        // value={total_pages}
        onChange={(e) => { setTotal_Pages(e.target.value) }} />


</Stack>
       
    )
}
export default UpdateForm;