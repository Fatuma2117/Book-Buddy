import { useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core'



function Book({ book }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_BOOKS',
            payload: book.id

        })
    }




    // console.log(kid.id)
    return (
        <Container maxWidth='sm'>
            <Grid container >
                <Grid item>
                    <div >

                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Book List -
                        </Typography>
                        <Typography variant='h5' align='center'>
                            Title: {book.title} -
                            Author: {book.author} -
                            Description: {book.description} -
                            Publish Year: {book.publish_year} -
                            Image: {book.image_url} -
                            Points: {book.points} -
                            Total pages: {book.total_pages}

                        </Typography>




                        <Button onClick={handleDelete} variant="contained" color="Secondary">
                            Delete
                        </Button>
                    </div>
                </Grid>
            </Grid>



            {/* <input>update current pages</input> */}

        </Container>
    )
}
export default Book;