import { useHistory } from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';
import {Typography} from '@material-ui/core'


function Kid({kid}){

    const history = useHistory();

    const handleKidClick=()=>{
        localStorage.setItem('current_kid_id', kid.id)
        history.push('/BookList')
    }
// console.log(kid.id)
    return(
        <>
        <CssBaseline/>
        <Container maxWidth="sm">
          <div onClick={handleKidClick}>
           
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                   {kid.name}
            </Typography>
            
        </div>
        
        </Container>
        </>
      
    )
}
export default Kid;