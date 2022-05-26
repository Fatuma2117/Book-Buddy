import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Kid from '../Kid/Kid';
import { useHistory } from 'react-router-dom';

// MUI----------------------------------------
import {CssBaseline} from '@material-ui/core';
import {container} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import { yellow } from 'material-ui-colors';
import { Button } from '@material-ui/core';


function KidList(){
    const dispatch = useDispatch();
    const kids = useSelector(store => store.kids);
    useEffect(() => {
        dispatch({
            type:'FETCH_KIDS'
        })
    },[])
    const history = useHistory()

    return(
        <>
        
         
        <div>
            <CssBaseline/>
   
    {/* <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                   Kid Profile
            </Typography> */}
            <Typography variant="h3" align="center" color="textSecondary" gutterBottom>
                   Choose Your Name
            </Typography>



    {kids.map(kid => {
                    return (
                        <Kid key={kid.id} kid={kid} />
                    );
                })}
 <Button onClick={() => history.push("/ParentBookList")}align="center" size='small' variant="contained" style={{backgroundColor: yellow [500]}} >Parent Portal</Button>

        </div>
        </>
    )
};

export default KidList;