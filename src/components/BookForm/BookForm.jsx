// Book form will have a children's book search bar from API.
// Inputs included for title, author, book url, year, and total pages.
// So that users can create book items if not found in the API.
// Add book button puts the book on the 1.5 kid  book list page.

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { yellow } from "material-ui-colors";
import Search from "../Search/Search";
import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import swal from "sweetalert";
import KidList from '../KidList/KidList'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Nav from '../Nav/Nav'




function BookForm() {

  useEffect(() => {
    dispatch({
        type:'FETCH_KIDS'
    })



},[])
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publish_year, setPublish_year] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [total_pages, setTotal_Pages] = useState("");
  const [current_page, setCurrent_page] = useState(0);
  const [kid, setKid] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const kids = useSelector(store => store.kids);
  console.log('kids reducer***************', kids)


  const theme = createTheme({
    typography: {
      fontFamily: ["Train One", "cursive"].join(","),
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_BOOKS",
      payload: {
        title,
        author,
        description,
        publish_year,
        image_url,
        total_pages,
        current_page,
        kid
      },
    });
    setTitle("");
    setAuthor("");
    setDescription("");
    setPublish_year("");
    setImage_Url("");
    setTotal_Pages("");

    swal({
      title: "Good job!",
      text: "You added a new book!",
      icon: "success",
      button: "Done!",
    });
    // history.push("/BookList");
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleKid = (kidId) => {
    localStorage.setItem('current_kid_id', kidId)
    setAnchorEl(null);
console.log('kidId*************',kidId)

setKid(kidId)

  };








  return (
    ///is there a kid?? if not drop down.
 <div>
    <ThemeProvider 
    // theme={theme}
    >
   {/* <Nav/> */}
   <Box mt={15} >
      <Typography>
        <Stack
        
          component="form"
          sx={{
            width: "100%",
          }}
          spacing={5}
        
          onSubmit={handleSubmit}
        >
 
      
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            // defaultValue="Normal"
            variant="filled"
            label={"Title"}
            margin="normal"
            // placeholder=" Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            // defaultValue="Normal"
            variant="filled"
            label={"Author"}
            margin="normal"
            // placeholder="Author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />

          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            // defaultValue="Normal"
            variant="filled"
            margin="normal"
            label={"Description"}
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            //  defaultValue="Normal"
            variant="filled"
            margin="normal"
            label={"Year"}
            // placeholder="Year"
            value={publish_year}
            onChange={(e) => {
              setPublish_year(e.target.value);
            }}
          />
          {/* <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            // defaultValue="Normal"
            variant="filled"
            margin="normal"
            label={"Image"}
            // placeholder="Image"
            value={image_url}
            onChange={(e) => {
              setImage_Url(e.target.value);
            }}
          /> */}
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            // defaultValue="Normal"
            variant="filled"
            margin="normal"
            label={"Total Pages"}
            // placeholder="Total Pages"
            value={total_pages}
            onChange={(e) => {
              setTotal_Pages(e.target.value);
            }}
          />

          <Button
            onClick={handleSubmit}
            size="small"
            variant="contained"
            style={{ backgroundColor: yellow[500] }}
          >
            Add Book
          </Button>

          <Search />
          { localStorage.getItem('current_kid_id') === '0' &&
  
//  <KidList/>

<div>
<Button
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
>
  Choose Kid
</Button>
<Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  // onClose={handleClose}
  value={kids.id}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>


{kids.map(kid => {
                    return (
                        <MenuItem onClick={()=> handleKid(kid.id)} key={kid.id}>
                          {kid.name}
                        </MenuItem> 
                    );
                })}

 
</Menu>
</div>















} 
        </Stack>
        
      </Typography>
      </Box>
    </ThemeProvider>
    </div>
  );
}

export default BookForm;
