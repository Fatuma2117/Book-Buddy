// Kids can see the total number of points from the reading log 
//  page as well as a progress graph 
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../BookList/BookList'
import { Typography } from '@material-ui/core'
import {Grid} from '@material-ui/core';
import {Box} from '@material-ui/core'
import { Container } from '@material-ui/core';

import {Card, CardMedia, CardContent, CardActions} from '@material-ui/core'

function KidProfile(){
    const dispatch = useDispatch();
    const points = useSelector(store => store.points);

    useEffect(() => {
        dispatch({
            type: 'FETCH_POINTS'

        })
    }, [])

    return(
        <div>

    
        <h1>Kid Profile</h1>
      
            {
           points.map(point =>{
                console.log('points map----->',point)
                return(
                   <>  
              
   Total Points: {point.points} 
  </>
                    
                 
                    
                    

                )}) }

     

     
         </div>
    )
};

export default KidProfile;