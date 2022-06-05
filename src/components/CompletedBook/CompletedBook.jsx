import { Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";



function CompletedBook({ book }) {
  return (
    <Container maxWidth="md" style={{ marginTop: "10px" }}>
      <div>
        <Grid container spacing={4}>
          <Grid
            item
            style={{
              backgroundColor: "#ffff00",
            }}
          >
            <Card elevation={9} height="20px">
              <CardMedia
                // className={classes.cardMedia}
                image={book.image_url}
                title="Image title"
              />

              <CardContent
                size="small"
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
    </Container>
  );
}
export default CompletedBook;
