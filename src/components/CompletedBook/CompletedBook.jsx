import { Button, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {Card, CardContent, CardMedia} from '@material-ui/core'


// import useStyles from './styles'


function CompletedBook({book}){
    return(

       
        <Container maxWidth='md'style={{marginTop: '100px'}}>
             <div >
            <Grid container spacing={4}  >
                <Grid item   style={{
          
         backgroundColor: "#c6ff00",
          
       }}>
                    <Card  height= '20px'>
                    <CardMedia
                        // className={classes.cardMedia}
                        image= "https://prodimage.images-bn.com/pimages/9780142413852_p0_v3_s192x300.jpg"
                        title="Image title"
                        />
                       
                        <CardContent size='small'
                        // className={classes.cardContent}
                        >
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
export default CompletedBook;