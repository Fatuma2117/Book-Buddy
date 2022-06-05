import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Kid from "../Kid/Kid";
import { useHistory } from "react-router-dom";

// MUI----------------------------------------
import { CssBaseline } from "@material-ui/core";
import { container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { yellow, orange } from "material-ui-colors";
import { Button, Box } from "@material-ui/core";
import {Avatar} from '@mui/material/'
import Stack from '@mui/material/Stack';

import { createTheme, ThemeProvider } from "@material-ui/core";

function KidList() {
  const dispatch = useDispatch();
  const kids = useSelector((store) => store.kids);
  useEffect(() => {
    dispatch({
      type: "FETCH_KIDS",
    });
  }, []);
  const theme = createTheme({
    typography: {
    },
    justifyContent: "center",
  });
  const history = useHistory();
  const handleParent = () => {
    localStorage.setItem("current_kid_id", "0");

    history.push("/ParentBookList");
  };











  return (
    <>
      {/* <ThemeProvider alignItems="center" theme={theme}> */}
     
        <Box sx={{ borderRadius: '16px' }} mt={30} ml={58} textAlign='center' alignContent='center' maxWidth='900px' style={{ backgroundColor: yellow[500] }} >
          <Typography>
            <div>
              <CssBaseline />

       





              

              <Typography
                variant="h3"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Pick Your Name
              </Typography>

              {kids.map((kid) => {
                return <Kid key={kid.id} kid={kid} />;
              })}
              <Button
                onClick={handleParent}
                align="center"
                size="large"
                variant="contained"
                style={{ backgroundColor: orange[700]}}
              >
                Parent Portal
              </Button>
            </div>
          </Typography>
        </Box>
    
    </>
  );
}

export default KidList;
