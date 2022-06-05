import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.background.paper,
        Padding: theme.spacing(8,0,6),
    },
    buttons:{
        marginTop: '40px'
    },
    cardGrid:{
        padding: '10px ',
        marginBlock:'20px',
        marginRight:'100px'
       

    
    },
    card:{
        // height: '100vh',
marginRight: '30px' ,
marginLeft:'30px'      

    },
    cardMedia:{
    
    },
    // cardContent:{
    //     flexGrow: 1
    // },
    swal:{
        backgroundColor: 'primary',
        border: '3px' 
      }
}))


export default useStyles;