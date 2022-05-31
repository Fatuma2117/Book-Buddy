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
        padding: '20px 0',
       

    
    },
    card:{
        height: '100%',
        display: 'flex',
       

    },
    cardMedia:{
        paddingTop: '56.25%'
    },
    cardContent:{
        flexGrow: 1
    },
    swal:{
        backgroundColor: 'primary',
        border: '3px' 
      }
}))


export default useStyles;