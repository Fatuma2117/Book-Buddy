import { useDispatch } from 'react-redux';
import { useState } from 'react'

import { Button, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {Card, CardMedia, CardContent, CardActions} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import {Box} from '@material-ui/core'


import useStyles from './styles'


function Book({ book }) {
    const dispatch = useDispatch();
    const history = useHistory()

    const classes = useStyles();
    const [completed,setCompleted]= useState(false)
    const [pages,setPages]=useState(book.current_page)

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_BOOKS',
            payload: book.id

        })
    }

    const handleCompleted = () => {
      
        dispatch({
            type: 'COMPLETED_BOOK',
            payload: book.id

        })
       setCompleted(!completed)
       history.push('/BookLog')
    } 

    const handlePageNumber = () => {
      dispatch({
          type:'UPDATE_ONE_BOOK',
          payload: book.id
      })
    
    }


    // console.log(kid.id)
    return (





       
        <Container maxWidth='lg' className={classes.cardGrid} style={{marginTop: '100px',
        marginLeft: '100px'}}>
     
                <Grid  item  xs={4}  >
                    <Box sx={{width:'auto'}}>
                    <Card  className={classes.Card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image= "https://prodimage.images-bn.com/pimages/9780142413852_p0_v3_s192x300.jpg"
                        title="Image title"
                        />

                        <CardContent size='small'className={classes.cardContent}>
                        <Typography gutterBottom variant='h5'>
                            Title: {book.title} -
                            Author: {book.author} -
                            Description: {book.description} -
                            Publish Year: {book.publish_year} -
                            
                            Points: {book.points} -
                            Total pages: {book.total_pages}
                            Current Page: {book.current_page}
                            {pages}
                        </Typography>


                        </CardContent>

                        <CardActions>



                        <Button onClick={handleDelete} size='small' className={classes.buttons} variant="contained" color="primary">
                            Delete
                        </Button>
                        <Button onClick={handleCompleted} size='small' className={classes.buttons} 
                        variant="contained" color={completed ? "secondary" : "primary"}>
                          Completed ✓ 
                        </Button>

                        <Button onClick={() => history.push(`/edit/${book.id}`)}size='small' className={classes.buttons} 
                        variant="contained" color={"primary"}>
                         Update Pages
                        </Button>
                        {/* <Button onClick={() => history.push(`/edit/${book.id}`)} size='small' className={classes.buttons} 
                        variant="contained" color={"primary"}>
                         Edit Book
                        </Button> */}






                        </CardActions>


                    

                    </Card>
                    </Box>
                </Grid>
            {/* </Grid> */}
        </Container>
    )
}
export default Book;