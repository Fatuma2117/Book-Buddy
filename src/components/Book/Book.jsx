import { useDispatch } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {Card, CardMedia, CardContent, CardActions} from '@material-ui/core'


import useStyles from './styles'


function Book({ book }) {
    const dispatch = useDispatch();
    const classes = useStyles();

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
        history.push('/BookLog')
    } 



    // console.log(kid.id)
    return (





       
        <Container maxWidth='md' className={classes.cardGrid} style={{marginTop: '100px'}}>
             <div className={classes.container}>
            <Grid container spacing={4}  >
                <Grid item>
                    <Card  height= '20px'>
                        {/* <CardMedia
                        className={classes.cardMedia}
                        image= "https://momlovesbest.com/wp-content/uploads/2020/08/story-1.png"
                        title="Image title"
                        /> */}

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
                        <Button onClick={handleCompleted} size='small' className={classes.buttons} variant="contained" color="primary">
                           Completed ✓
                        </Button>

                        </CardActions>


                    

    
                          
 




                   
                    </Card>
                </Grid>
            </Grid>
 </div>
        </Container>
    )
}
export default Book;