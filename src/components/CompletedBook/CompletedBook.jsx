import { Button, Grid, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";



function CompletedBook({ book }) {
  return (
    <Container maxwidth="md" style={{ marginTop: "10px" }}>
      <Box  sx={{ width: '100%' }} >

      
      <div>
        <Grid container  spacing={4}>
          <Grid
            item
            style={{
              backgroundColor: "#ffff00",
            }}
          >
            <Card maxWidth='700px' elevation={9} >
              <CardMedia
                // className={classes.cardMedia}
                image={book.image_url}
                title="Image title"
              />

              <CardContent
                size="large"
                // className={classes.cardContent}
              >
                <Typography gutterBottom>
                  
                  Title: {book.title} - Author: {book.author} 
                  - Publish Year: {book.publish_year} - Description: {book.description}
                  Points: {book.points} - Total pages: {book.total_pages} -
                  Rating:{book.rate}- Completed ✓
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      </Box>
    </Container>
  );
}
export default CompletedBook;
