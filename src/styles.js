import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.background.paper,
        Padding: theme.spacing(8,0,6)
    }
}))


export default useStyles;