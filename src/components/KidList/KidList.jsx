import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Kid from '../Kid/Kid';
// MUI----------------------------------------
import {CssBaseline} from '@material-ui/core';
import {container} from '@material-ui/core'
import {Typography} from '@material-ui/core'


function KidList(){
    const dispatch = useDispatch();
    const kids = useSelector(store => store.kids);
    useEffect(() => {
        dispatch({
            type:'FETCH_KIDS'
        })
    },[])

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

        </div>
        </>
    )
};

export default KidList;