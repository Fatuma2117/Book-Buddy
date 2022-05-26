
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        <div>
 <h1>Update Book Form</h1>
 <form>



     
 </form>



        </div>
       
    )
}
export default UpdateForm;