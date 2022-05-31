// Parents can assign books to specific kids as well as assign points to the new book. 
import { useEffect } from "react";
// import HUE from '@material-ui/core'
import { useState } from "react";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { yellow } from "material-ui-colors";
import Search from "../Search/Search";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import swal from 'sweetalert';
import BookForm from '../BookForm/BookForm'


function ParentForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publish_year, setPublish_year] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [total_pages, setTotal_Pages] = useState("");
  const [current_page, setCurrent_page] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();


  const theme = createTheme({
    typography: {
      fontFamily: ["Train One", "cursive"].join(","),
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_PARENT_BOOKS",
      payload: {
        title,
        author,
        description,
        publish_year,
        image_url,
        total_pages,
        current_page,
      },
    });
    setTitle("");
    setAuthor("");
    setDescription("");
    setPublish_year("");
    setImage_Url("");
    setTotal_Pages("");

   
    history.push("/ParentBookList");
  };

  return (
  //   <ThemeProvider theme={theme}>
  //     <Typography>
  //       <Stack
  //         component="form"
  //         sx={{
  //           width: "100%",
  //         }}
  //         spacing={2}
    
  //         autoComplete="off"
  //         onSubmit={handleSubmit}
  //       >
      
  //         <TextField
  //           hiddenLabel
  //           id="filled-hidden-label-normal"
         
  //           variant="filled"
  //           label={"Title"}
  //           margin="normal"
         
  //           value={title}
  //           onChange={(e) => {
  //             setTitle(e.target.value);
  //           }}
  //         />

  //         <TextField
  //           hiddenLabel
  //           id="filled-hidden-label-normal"
  //           variant="filled"
  //           label={"Author"}
  //           margin="normal"
  //           value={author}
  //           onChange={(e) => {
  //             setAuthor(e.target.value);
  //           }}
  //         />

  //         <TextField
  //           hiddenLabel
  //           id="filled-hidden-label-normal"
  //           // defaultValue="Normal"
  //           variant="filled"
  //           margin="normal"
  //           label={"Description"}
  //           placeholder="Description"
  //           value={description}
  //           onChange={(e) => {
  //             setDescription(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           hiddenLabel
  //           id="filled-hidden-label-normal"
  //           //  defaultValue="Normal"
  //           variant="filled"
  //           margin="normal"
  //           label={"Year"}
  //           // placeholder="Year"
  //           value={publish_year}
  //           onChange={(e) => {
  //             setPublish_year(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           hiddenLabel
  //           id="filled-hidden-label-normal"
  //           // defaultValue="Normal"
  //           variant="filled"
  //           margin="normal"
  //           label={"Image"}
  //           // placeholder="Image"
  //           value={image_url}
  //           onChange={(e) => {
  //             setImage_Url(e.target.value);
  //           }}
  //         />
  //         <TextField
  //           hiddenLabel
  //           id="filled-hidden-label-normal"
  //           // defaultValue="Normal"
  //           variant="filled"
  //           margin="normal"
  //           label={"Total Pages"}
  //           // placeholder="Total Pages"
  //           value={total_pages}
  //           onChange={(e) => {
  //             setTotal_Pages(e.target.value);
  //           }}
  //         />

  //         <Button
  //           onClick={handleSubmit}
  //           size="small"
  //           variant="contained"
  //           style={{ backgroundColor: yellow[500] }}
  //         >
  //           Add Book
  //         </Button>
  //         {/* </form> */}

  //       </Stack>
  //     </Typography>
  //   </ThemeProvider>
  // );

  <BookForm/>
  )
}

export default ParentForm;