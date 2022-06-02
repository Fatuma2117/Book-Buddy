import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Kid from '../Kid/Kid';
import { useHistory } from 'react-router-dom';

// MUI----------------------------------------
import {CssBaseline} from '@material-ui/core';
import {container} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import { yellow } from 'material-ui-colors';
import { Button, Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@material-ui/core";


function KidList(){
    const dispatch = useDispatch();
    const kids = useSelector(store => store.kids);
    useEffect(() => {
        dispatch({
            type:'FETCH_KIDS'
        })
    },[])
    const theme = createTheme({
        typography: {
          fontFamily: ["Train One", "cursive"].join(","),
        },
        justifyContent:"center",

      });
    const history = useHistory()
    const handleParent=()=>{
        localStorage.setItem('current_kid_id', '0')

        history.push("/ParentBookList")

    }

    return(
        <>
             <ThemeProvider theme={theme}>
                 <Box mt={15} >
      <Typography>
         
        <div>
            <CssBaseline/>
   
             <Typography  variant="h3"align="center" color="textSecondary" gutterBottom>
                   Pick A Name
            </Typography> 




            {/* <Typography  variant="h3"align="center" color="textSecondary" gutterBottom>
                   Choose Your Name
            </Typography> */}



    {kids.map(kid => {
                    return (
                        <Kid key={kid.id} kid={kid} />
                    );
                })}
 <Button onClick={handleParent}align="center" size='small' variant="contained" style={{backgroundColor: yellow [500]}} >Parent Portal</Button>

  






        </div>
        </Typography>
        </Box>
    </ThemeProvider>
        </>
    )
};

export default KidList;