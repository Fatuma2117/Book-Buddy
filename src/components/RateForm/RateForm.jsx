import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { yellow } from "material-ui-colors";
import { useParams} from 'react-router-dom';





function RateForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    console.log(params)

    const [rating, setRating] = useState("");
    const books = useSelector((store) => store.books);

    console.log('this***********************',books.books)

    const handleSubmit = ()=>{
        e.preventDefault();
        dispatch({
            type:'ADD_RATING',
            payload: {rating, book: params.id}
        })
        setRating('')
            history.push("/BookLog");

    }
    return(
        <div>
        <h1> Rate Book!</h1>
        <Typography>
        <Stack
          component="form"
          sx={{
            width: "100%",
          }}
          spacing={2}
          // noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
<TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            variant="filled"
            label={"Rating"}
            margin="normal"
            // placeholder=" Title"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
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

</Stack>
      </Typography>

</div>
    )
}

export default RateForm;