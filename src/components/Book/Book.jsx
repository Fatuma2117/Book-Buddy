import { useDispatch } from 'react-redux';
import { useState } from 'react'

import { Button, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {Card, CardMedia, CardContent, CardActions} from '@material-ui/core'


import useStyles from './styles'


function Book({ book }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [completed,setCompleted]= useState(false)

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
    } 



    // console.log(kid.id)
    return (





       
        <Container maxWidth='md' className={classes.cardGrid} style={{marginTop: '100px'}}>
            <Grid  spacing={4}  >
                <Grid container item  md={4}>
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

                        </CardActions>


                    

    
                          
 




                   
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Book;