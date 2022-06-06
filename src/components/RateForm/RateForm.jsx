import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//MUI-----------------------------------------------------
import { Typography } from "@material-ui/core";
import { Button, Box } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { yellow } from "material-ui-colors";
import { useParams } from "react-router-dom";

function RateForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  console.log("params------->", params.id);

  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "RATE_BOOK",
      payload: { rating, book: params.id },
    });
    setRating("");
    history.push("/BookLog");
  };
  return (
    <div>
      <Box mt={20} textAlign="center">
        <h1> Rate Completed Book 1-10</h1>
        <Typography>
          <Stack
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "80ch",
                marginLeft: "300px",
              },
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
 </Stack>
            <Button
              onClick={handleSubmit}
              size="small"
              variant="contained"
              style={{ backgroundColor: yellow[500] }}
            >
              Add Rating
            </Button>
         
        </Typography>
      </Box>
    </div>
  );
}

export default RateForm;
