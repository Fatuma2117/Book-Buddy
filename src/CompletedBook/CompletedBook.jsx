import { Button, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {Card, CardContent} from '@material-ui/core'


import useStyles from './styles'


function CompletedBooks({book}){
    return(

       
        <Container maxWidth='md' className={classes.cardGrid} style={{marginTop: '100px'}}>
             <div className={classes.container}>
            <Grid container spacing={4}  >
                <Grid item>
                    <Card  height= '20px'>
                       
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


                   
                    </Card>
                </Grid>
            </Grid>
 </div>
        </Container>
    )
    
}
export default CompletedBooks;